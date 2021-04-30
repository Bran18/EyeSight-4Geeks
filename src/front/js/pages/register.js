import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = e => {
		e.preventDefault();

		actions.setRegister({
			email: email,
			username: username,
			password: password
		});
	};

	return (
		<div className="mx-auto pt-5">
			<h1>Register</h1>
			<form onSubmit={handleSubmit} style={{ width: "500px", height: "425px" }}>
				<div className="mb-3">
					<label htmlFor="exampleInputUsername" className="form-label">
						Username
					</label>
					<input
						onChange={e => setUsername(e.target.value)}
						type="text"
						className="form-control"
						id="exampleUserName"
						aria-describedby="userHelp"
					/>
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" className="form-text">
						Well never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};
