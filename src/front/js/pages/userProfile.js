import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Redirect, Link } from "react-router-dom";

const UserProfile = () => {
	const { store, actions } = useContext(Context);
	const [firstname, setfirstname] = useState("");
	const [lastname, setlastname] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = e => {
		e.preventDefault();

		actions.setUpdate({
			firstname: firstname,
			lastname: lastname,
			email: email,
			username: username,
			password: password
		});
	};

	useEffect(() => {
		actions.getUser();
	}, []);

	return (
		<div className="Container">
			<div className="card mb-3">
				<div className="card-body">
					<div className="row">
						<div className="col-md-3">
							<h6 className="mb-0">Username</h6>
						</div>
						<div className="col-md-9 text-secondary" />
					</div>
					<hr />
					<div className="row">
						<div className="col-md-3">
							<h6 className="mb-0">First Name</h6>
						</div>
						<div className="col-md-9 text-secondary" />
					</div>
					<hr />
					<div className="row">
						<div className="col-md-3">
							<h6 className="mb-0">Last Name</h6>
						</div>
						<div className="col-md-9 text-secondary" />
					</div>
					<hr />
					<div className="row">
						<div className="col-md-3">
							<h6 className="mb-0">Email</h6>
						</div>
						<div className="col-md-9 text-secondary" />
					</div>
					<hr />
					<div className="row">
						<div className="col-md-3">
							<h6 className="mb-0">Password</h6>
						</div>
						<div className="col-md-9 text-secondary" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
