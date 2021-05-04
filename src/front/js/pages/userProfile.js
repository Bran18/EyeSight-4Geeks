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
						<div className="col-sm-3">
							<h6 className="mb-0">Full Name</h6>
						</div>
						<div className="col-sm-9 text-secondary">{user.firstname}</div>
					</div>
					<hr />
					<div className="row">
						<div className="col-sm-3">
							<h6 className="mb-0">Email</h6>
						</div>
						<div className="col-sm-9 text-secondary">{user.firstname}</div>
					</div>
					<hr />
					<div className="row">
						<div className="col-sm-3">
							<h6 className="mb-0">Phone</h6>
						</div>
						<div className="col-sm-9 text-secondary">{user.firstname}</div>
					</div>
					<hr />
					<div className="row">
						<div className="col-sm-3">
							<h6 className="mb-0">Mobile</h6>
						</div>
						<div className="col-sm-9 text-secondary">{user.firstname}</div>
					</div>
					<hr />
					<div className="row">
						<div className="col-sm-3">
							<h6 className="mb-0">Address</h6>
						</div>
						<div className="col-sm-9 text-secondary">{user.firstname}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
