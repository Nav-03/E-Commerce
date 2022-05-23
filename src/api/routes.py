"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token, decode_token

api = Blueprint('api', __name__)





@api.route('/user', methods=['POST'])
def create_user():
    user = request.get_json()
    if request.json is None:
        return jsonify({"msg":"Missing the payload"}), 400
    name = request.json.get('name', None)
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    user = User(name=name, email=email, password=password)
    db.session.add(user)
    db.session.commit()
    access_token = create_access_token(identity=user.id)
    user.user_hash = access_token
    db.session.add(user)
    db.session.commit()

    return jsonify(user.serialize())


# @api.route('/user', methods=['GET'])
# @jwt_required()
# def user():
#     current_user_id = get_jwt_identity()
#     user = User.query.get(current_user_id)

#     return jsonify({"id": user.id, "email": user.email }), 200


@api.route('/token', methods=['POST'])
def create_token():
    if request.json is None:
        raise APIException("Missing the payload")
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        raise APIException("Wrong email and password",401)
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })



@api.route('/user', methods=['GET'])
def get_users():
    users = User.query.all()
    all_users = list(map(lambda x:x.serialize(),users))
    return jsonify(all_users), 200


@api.route('/user/<int:user_id>', methods=['GET'])
def getGuest(user_id):
    users = User.query.get(user_id)
    if users is None:
        raise APIException('Guest not found', status_code=404)
    return jsonify(users.serialize()), 200

@api.route('/user/token/<string:token>', methods=['GET'])
def get_user_from_token(token):
    identity = decode_token(token)
    print("identity", identity)
    
    users = User.query.get(identity["sub"])
    if users is None:
        raise APIException('Guest not found', status_code=404)
    return jsonify(users.serialize()), 200