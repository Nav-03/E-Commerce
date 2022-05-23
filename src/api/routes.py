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


@api.route('/user', methods=['GET'])
@jwt_required()
def user():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    return jsonify({"id": user.id, "email": user.email }), 200
