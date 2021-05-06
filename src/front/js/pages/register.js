import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Redirect, Link } from "react-router-dom";

const Register = () => {
	const { store, actions } = useContext(Context);
	const [firstname, setfirstname] = useState("");
	const [lastname, setlastname] = useState("");
	const [username, setUsername] = useState("");
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
	};

	return (
		<div className="mx-auto pt-5 pb-4">
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
						placeholder="Username"
					/>
					<label htmlFor="exampleInputfirtsname" className="form-label">
						First name
					</label>
					<input
						onChange={e => setfirstname(e.target.value)}
						type="text"
						className="form-control"
						id="exampleInputfirtsname"
						aria-describedby="userHelp"
						placeholder="First name"
					/>
					<label htmlFor="exampleInputfirtsname" className="form-label">
						Last Name
					</label>
					<input
						onChange={e => setlastname(e.target.value)}
						type="text"
						className="form-control"
						id="exampleInputlastname"
						aria-describedby="userHelp"
						placeholder="First name"
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
				<button type="submit" className="btn btn-primary mb-4">
					Submit
				</button>
				<div className="form-group text-center text-font-base">
					<p className="m-0 text-white">
						Already registered?
						<br />
						<Link to="/Login">login here</Link>
					</p>
				</div>
			</form>
			<br />
		</div>
	);
};

export default Register;
