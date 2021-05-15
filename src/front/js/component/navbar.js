import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import eyeSihtLogo from "../../img/EyeSight-4Geeks.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const Logout = () => {
		actions.setLogout();
	};

	if (!store.logged) {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img src={eyeSihtLogo} className="nav-logo" alt="eyeSihtLogo" />
					</span>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link to="/">
								<span className="nav-link">Home</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/pricing">
								<span className="nav-link">Pricing</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/AboutUs">
								<span className="nav-link">About Us</span>
							</Link>
						</li>
					</ul>
				</div>
				<div className="btn-group" role="group">
					<button
						id="btnGroupDrop1"
						type="button"
						className="btn btn-outline-info dropdown-toggle mr-4"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						<i className="fas fa-bars" />
					</button>
					<div className="dropdown-menu ml-auto mr-3" aria-labelledby="btnGroupDrop1">
						<Link to="/register">
							<span className="dropdown-item"> Register </span>
						</Link>
						<Link to="/login">
							<span className="dropdown-item"> Login </span>
						</Link>
					</div>
				</div>
			</nav>
		);
	} else {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img src={eyeSihtLogo} className="nav-logo" alt="eyeSihtLogo" />
					</span>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link to="/">
								<span className="nav-link">Home</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/recognitionAi">
								<span className="nav-link">Recognition Ai</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/pricing">
								<span className="nav-link">Pricing</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/AboutUs">
								<span className="nav-link">About Us</span>
							</Link>
						</li>
					</ul>
				</div>
				<div className="btn-group" role="group">
					<button
						id="btnGroupDrop1"
						type="button"
						className="btn btn-outline-info dropdown-toggle"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						<i className="far fa-user" />
					</button>
					<div className="dropdown-menu ml-auto" aria-labelledby="btnGroupDrop1">
						<button onClick={() => Logout()} className="dropdown-item mr-4" href="#">
							Out
						</button>
					</div>
				</div>
			</nav>
		);
	}
};
