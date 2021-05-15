import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Redirect, Link } from "react-router-dom";

const Register = () => {
	const { store, actions } = useContext(Context);
	const [firstname, setfirstname] = useState("");
	const [lastname, setlastname] = useState("");
	const [username, setUsername] = useState("");
	const [registered, setRegistered] = useState("false");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		actions.setRegister({
			firstname: firstname,
			lastname: lastname,
			email: email,
			username: username,
			password: password
		});
		e.target.reset();
		console.log(registered);
	};

	return (
		<div className="mx-auto pt-5 pb-4">
			<h1 className="register-tittle">Register</h1>
			<form onSubmit={handleSubmit} style={{ width: "500px", height: "425px", marginTop: "40px" }}>
				<div className="mb-3">
					<label htmlFor="validationDefaultUsername" className="form-label">
						Username
					</label>
					<input
						onChange={e => setUsername(e.target.value)}
						type="text"
						className="form-control"
						id="validationDefaultUsername"
						aria-describedby="userHelp"
						placeholder="Username"
						required
					/>
					<label htmlFor="validationDefault01" className="form-label">
						First name
					</label>
					<input
						onChange={e => setfirstname(e.target.value)}
						type="text"
						className="form-control"
						id="validationDefault01"
						aria-describedby="userHelp"
						placeholder="First name"
						required
					/>
					<label htmlFor="validationDefault02" className="form-label">
						Last Name
					</label>
					<input
						onChange={e => setlastname(e.target.value)}
						type="text"
						className="form-control"
						id="validationDefault02"
						aria-describedby="userHelp"
						placeholder="First name"
						required
					/>
					<label htmlFor="validationDefault03" className="form-label">
						Email address
					</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type="email"
						className="form-control"
						id="validationDefault03"
						aria-describedby="emailHelp"
						required
					/>
					<div id="emailHelp" className="form-text">
						Well never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="validationDefault04" className="form-label">
						Password
					</label>
					<input
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="validationDefault04"
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary mb-4" onClick={() => setRegistered(true)}>
					Submit
				</button>
				<Link to="/login" className="btn btn-outline-success ml-3 mb-4">
					login!
				</Link>
			</form>
			<br />
		</div>
	);
};

export default Register;
