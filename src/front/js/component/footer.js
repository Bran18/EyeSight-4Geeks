import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer-20192">
		<div className="site-section">
			<div className="container">
				<div className="cta d-block d-md-flex align-items-center px-5">
					<div>
						<h2 className="mb-0">Ready for a next learning?</h2>
						<h3 className="text-dark">Lets get started!</h3>
					</div>
					<div className="ml-auto">
						<a href="#" className="btn btn-dark rounded-0 py-3 px-5">
							Contact us
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col-sm">
						<a href="#" className="footer-logo">
							EyeSight
						</a>
						<p className="copyright">
							<small>&copy; 2021</small>
						</p>
					</div>
					<div className="col-sm">
						<h3>Customers</h3>
						<ul className="list-unstyled links">
							<li>
								<a href="#">Buyer</a>
							</li>
							<li>
								<a href="#">Supplier</a>
							</li>
						</ul>
					</div>
					<div className="col-sm">
						<h3>Company</h3>
						<ul className="list-unstyled links">
							<li>
								<a href="#">About us</a>
							</li>
							<li>
								<a href="#">Careers</a>
							</li>
							<li>
								<a href="#">Contact us</a>
							</li>
						</ul>
					</div>
					<div className="col-sm">
						<h3>Further Information</h3>
						<ul className="list-unstyled links">
							<li>
								<a href="#">Terms &amp; Conditions</a>
							</li>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
						</ul>
					</div>
					<div className="col-md-3">
						<h3>Follow us</h3>
						<ul className="list-unstyled social">
							<li>
								<a href="#">
									<span className="fab fa-facebook-f" />
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fab fa-twitter" />
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fab fa-linkedin-in" />
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fab fa-medium-m" />
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fas fa-paper-plane" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
);
