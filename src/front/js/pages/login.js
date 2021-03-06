import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Redirect, Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handlerClick = e => {
		e.preventDefault();

		actions.setLogin({
			email: email,
			password: password
		});
	};

	useEffect(() => {
		actions.getToken();
	}, []);

	return (
		<div className="row w-100 d-flex justify-content-center">
			{store.logged ? (
				<Redirect to="/recognitionAi" />
			) : (
				<div className="text-center mx-auto mt-5">
					<h1 className="login-tittle">Login with your credentials</h1>

					<form style={{ width: "500px", height: "300px", marginTop: "40px" }}>
						<div className="mb-3">
							<label className="form-label">Email address</label>
							<input
								value={email}
								onChange={e => setEmail(e.target.value)}
								type="email"
								className="form-control"
								placeholder="email"
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Password</label>
							<input
								value={password}
								onChange={e => setPassword(e.target.value)}
								type="password"
								className="form-control"
								placeholder="password"
							/>
						</div>

						<p className="text-left">
							If you forget your password click on <Link to="/ForgotPassword">restore my password</Link>{" "}
						</p>
						<button type="submit" onClick={e => handlerClick(e)} className="btn btn-primary  mr-3 mb-3">
							Submit
						</button>

						<Link to="/register" className="btn btn-outline-success mx-auto mr-3 mb-3">
							Register!
						</Link>
					</form>
				</div>
			)}
			<br />
		</div>
	);
};

export default Login;
