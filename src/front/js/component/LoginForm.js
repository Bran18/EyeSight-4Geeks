import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const LoginForm = () => {
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
			<div className="col-5">
				{store.user.token !== null ? (
					<div className="text-center mt-5">
						{/* <span>User: {JSON.stringify(store.user)}</span> */}
						<div className="card" style={{ width: "18rem" }}>
							<img
								className="card-img-top"
								src="https://cdn.generadormemes.com/media/templates/xllama_fea.jpg.pagespeed.ic.plantilla-memes.jpg"
							/>
							<div className="card-body">
								<span>User: {JSON.stringify(store.user)}</span>
							</div>
						</div>
					</div>
				) : (
					<div className="text-center mt-5">
						<h1>Login with your credentials</h1>

						<form>
							<div className="mb-3">
								<label className="form-label">Email address</label>
								<input
									value={email}
									onChange={e => setEmail(e.target.value)}
									type="email"
									className="form-control"
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Password</label>
								<input
									value={password}
									onChange={e => setPassword(e.target.value)}
									type="password"
									className="form-control"
								/>
							</div>
							<button type="submit" onClick={e => handlerClick(e)} className="btn btn-primary">
								Submit
							</button>
							{store.user !== "" ? (
								<div className="alert alert-info overflow-auto mt-5">
									{JSON.stringify(store.user.token)}
								</div>
							) : null}

							<Link to="/register" className="btn btn-success">
								Register!
							</Link>
						</form>
					</div>
				)}
			</div>
		</div>
	);
};

export default LoginForm;
