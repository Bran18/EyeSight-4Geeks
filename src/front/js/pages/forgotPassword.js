import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Redirect, Link } from "react-router-dom";
import { message } from "antd";
import ScrollAnimation from "react-animate-on-scroll";

const ForgotPassword = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [SuccessMsg, setSuccessMsg] = useState(false);

	/*const handleSubmit = e => {
		e.preventDefault();
		console.log("the email is", email);
		actions.forgotPassword(email);
		setSuccessMsg(true);
    };*/

	const handleSubmit = event => {
		console.log(email);
		actions.forgotPassword(email).then(res => {
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
				<section className="container my-5 p-3">
					<div className="text-center">
						<h2 className="mt-2 text-font-base text-dark">Password Recovery</h2>
					</div>
					<div className="card-contact card border-5 border-white mw-100 mx-auto" id="passwordGood">
						<div className="card-contact card mw-100 mx-auto">
							<article className="card-body mx-auto py-5">
								<h3 className="text-center text-font-base text-dark font-weight-light mt-3">
									Your new password is ready and have been sent to your email!!!
								</h3>
								<br />
								<div className="form-group text-center">
									<p className="m-0">
										<Link to="/Login" className="text-center text-font-base text-primary-color">
											<i className="fas fa-sign-in-alt" />
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
						<h2 className="mt-2 text-font-base text-dark">Password Recovery</h2>
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
											value={email}
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
