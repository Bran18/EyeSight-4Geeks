import React, { useContext, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import ScrollAnimation from "react-animate-on-scroll";

const Pricing = () => {
	return (
		<div>
			<section className="pricing py-5">
				<ScrollAnimation animateIn="fadeIn" duration="2" animateOnce="true">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<div className="card mb-5 mb-lg-0">
									<div className="card-body">
										<h5 className="card-title text-muted text-uppercase text-center">Free</h5>
										<h6 className="card-price text-center">
											$0
											<span className="period">/month</span>
										</h6>
										<hr />
										<ul className="fa-ul">
											<li>
												<span className="fa-li">
													<i className="fas fa-check" />
												</span>
												Single Language
											</li>
											<li>
												<span className="fa-li">
													<i className="fas fa-check" />
												</span>
												10 Ramdom Image
											</li>
											<li>
												<span className="fa-li">
													<i className="fas fa-check" />
												</span>
												Limited data recognition
											</li>
											<li className="text-muted">
												<span className="fa-li">
													<i className="fas fa-times" />
												</span>
												Community Access
											</li>
											<li className="text-muted">
												<span className="fa-li">
													<i className="fas fa-times" />
												</span>
												Favorite words
											</li>
											<li className="text-muted">
												<span className="fa-li">
													<i className="fas fa-times" />
												</span>
												Favorite translated words
											</li>
											<li className="text-muted">
												<span className="fa-li">
													<i className="fas fa-times" />
												</span>
												Memory training games
											</li>
											<li className="text-muted">
												<span className="fa-li">
													<i className="fas fa-times" />
												</span>
												Progress tracking
											</li>
										</ul>
										<Link to="/register" className="btn btn-block btn-primary text-uppercase">
											Register
										</Link>
									</div>
								</div>
							</div>

							<div className="col-lg-4">
								<div className="card mb-5 mb-lg-0">
									<div className="card-body">
										<h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
										<h6 className="card-price text-center">
											$8.99
											<span className="period">/month</span>
										</h6>
										<hr />
										<ul className="fa-ul">
											<li>
												<span className="fa-li">
													<i className="fas fa-check" />
												</span>
												<strong>4 Languages</strong>
											</li>
											<li>
												<span className="fa-li">
													<i className="fas fa-check" />
												</span>
												25 Ramdom Image
											</li>
											<li>
												<span className="fa-li">
													<i className="fas fa-check" />
												</span>
												Unlimited data recognition
											</li>
											<li>
												<span className="fa-li">
													<i className="fas fa-check" />
												</span>
												Community Access
											</li>
											<li>
												<span className="fa-li">
													<i className="fas fa-check" />
												</span>
												Favorite words
											</li>
											<li className="text-muted">
												<span className="fa-li">
													<i className="fas fa-times" />
												</span>
												Favorite translated words
											</li>
											<li className="text-muted">
												<span className="fa-li">
													<i className="fas fa-times" />
												</span>
												Memory training games
											</li>
											<li className="text-muted">
												<span className="fa-li">
													<i className="fas fa-times" />
												</span>
												Progress tracking
											</li>
										</ul>
										<Link to="/register" className="btn btn-block btn-primary text-uppercase">
											Register
										</Link>
									</div>
								</div>
							</div>

							<div className="col-lg-4">
								<div className="card">
									<div className="card-body">
										<h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
										<h6 className="card-price text-center">
											$19.99
											<span className="period">/month</span>
										</h6>
										<hr />
										<ul className="fa-ul">
											<li>
												<span className="fa-li">
													<i className="fas fa-check" />
												</span>
												<strong>Unlimited languages</strong>
											</li>
											<li>
												<span className="fa-li">
													<i className="fas fa-check" />
												</span>
												Unlimited Ramdom Images
											</li>
											<li>
												<span className="fa-li">
													<i className="fas fa-check" />
												</span>
												Unlimited data recognition
											</li>
											<li>
												<span className="fa-li">
													<i className="fas fa-check" />
												</span>
												Community Access
											</li>
											<li>
												<span className="fa-li">
													<i className="fas fa-check" />
												</span>
												Unlimited favorite words
											</li>
											<li>
												<span className="fa-li">
													<i className="fas fa-check" />
												</span>
												Favorite translated words
											</li>
											<li>
												<span className="fa-li">
													<i className="fas fa-check" />
												</span>
												<strong>Memory training games</strong>
											</li>
											<li>
												<span className="fa-li">
													<i className="fas fa-check" />
												</span>
												Progress tracking
											</li>
										</ul>
										<Link to="/register" className="btn btn-block btn-primary text-uppercase">
											Register
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</ScrollAnimation>
			</section>
		</div>
	);
};

export default Pricing;
