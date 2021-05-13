import React, { useState } from "react";
import { message } from "antd";
import { Context } from "../store/appContext";
import { Redirect, Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ForgotPassword = () => {
	const [InputEmail, setEmail] = useState("");
	const [SuccessMsg, setSuccessMsg] = useState(false);

	const handleSubmit = event => {
		console.log(InputEmail);
		actions.ForgotPassword(InputEmail).then(res => {
			if (res.StatusID) {
				message.error({
					content: res.msg,
					style: {
						marginTop: "30vh"
					}
				});
			} else {
				setSuccessMsg(true);
			}
		});
		event.preventDefault();
	};
	if (SuccessMsg) {
		return (
			<ScrollAnimation animateIn="fadeIn" duration="2" animateOnce="true">
				<section id="F1" className="container my-5 p-3">
					<div className="text-center">
						<h2 className="mt-2 text-font-base text-white">Password recovery</h2>
					</div>
					<div id="F2" className="card-contact card border-5 border-white mw-100 mx-auto">
						<div id="F3" className="card-contact card mw-100 mx-auto">
							<article className="card-body mx-auto py-5">
								<h3 className="text-center text-font-base text-white font-weight-light mt-3">
									Your new password is ready and have been sent to your email!!!
								</h3>
								<br />
								<div className="form-group text-center">
									<p className="m-0">
										<Link to="/Login" className="text-center text-font-base text-primary-color">
											Login
										</Link>
									</p>
								</div>
							</article>
						</div>
					</div>
				</section>
			</ScrollAnimation>
		);
	} else {
		return (
			<ScrollAnimation animateIn="fadeIn" duration="2" animateOnce="true">
				<section className="container my-5 p-3">
					<div className="text-center">
						<h2 className="mt-2 text-font-base text-white">Password recovery</h2>
					</div>
					<div className="card-contact card border-5 border-white mw-100 mx-auto">
						<div className="card-contact card mw-100 mx-auto">
							<article className="card-body mx-auto py-5">
								<form onSubmit={handleSubmit}>
									<div className="form-group input-group mt-3 mb-0">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="far fa-envelope" />
											</span>
										</div>
										<input
											type="email"
											id="Email"
											value={InputEmail}
											onChange={e => setEmail(e.target.value)}
											placeholder="Correo"
											className="form-control"
											required
										/>
									</div>

									<div className="form-group text-center mt-3">
										<button className="btn btn-outline-primary text-font-base btn-block">
											Generate Password
										</button>
									</div>
								</form>
							</article>
						</div>
					</div>
				</section>
			</ScrollAnimation>
		);
	}
};

export default ForgotPassword;
