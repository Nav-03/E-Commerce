import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Checkout from "../component/checkout/Checkout";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';


export const Navbar = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand " href="/">LOGO</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/registration">Register</a>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Services
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a className="dropdown-item" href="/demo">Oil Change</a></li>
								<li><a className="dropdown-item" href="/demo">Tire Rotation</a></li>
								<li><a className="dropdown-item" href="/demo">Vehicle Inspection</a></li>

								<li><hr className="dropdown-divider" /></li>
								<li><a className="dropdown-item" href="/demo">Demo</a></li>
								<li><a className="dropdown-item" href="/registration">Registration</a></li>
							</ul>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Shop
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a className="dropdown-item" href="/demo">Tires</a></li>
								<li><a className="dropdown-item" href="/demo">Windshield Wipers</a></li>
								<li><a className="dropdown-item" href="/demo">Tools</a></li>
								<li><a className="dropdown-item" href="/demo">Oil</a></li>
								<li><a className="dropdown-item" href="/demo">Filters</a></li>
							</ul>
						</li>
						<form className="d-flex">
							<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-primary" type="submit">Search</button>
						</form>
					</ul>
					<a className="nav-item d-flex align-items-center py-0" onClick={handleShow}>
						<a className="nav-link "><FaShoppingCart /></a>
					</a>
					<Modal size="lg" show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Checkout</Modal.Title>
						</Modal.Header>
						<Modal.Body><Checkout /></Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
							<Button variant="primary" onClick={handleClose}>
								Save Changes
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		</nav>
	);
};
