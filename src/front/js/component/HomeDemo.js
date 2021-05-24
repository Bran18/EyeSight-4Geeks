import React from "react";
import { Link } from "react-router-dom";
import stage01 from "../../img/stage01-es.png";
import stage02 from "../../img/stage02-es.png";
import stage03 from "../../img/stage03-es.png";
import ScrollAnimation from "react-animate-on-scroll";

const HomeDemo = () => {
	return (
		<div className="container mt-4">
			<ScrollAnimation animateIn="fadeIn" duration="2" animateOnce="true">
				<h3 className=" text-center mb-5 home__demo__title">Learn with your favorite Image in just 3 steps!</h3>

				<div className="row d-flex justify-content-center mb-5">
					<div className="col">
						<Link to="/">
							<a className="pulse " href="#">
								<img className="img-thumbnail " src={stage01} alt="Thumbnail image" />
							</a>
						</Link>
						<br />
						<h4 className="text-center mx-auto mt-3 home__demo__subtitle">Choose you image</h4>
					</div>
					<div className="col">
						<Link to="/">
							<a href="#">
								<img className="img-thumbnail " src={stage02} alt="Thumbnail image" />
							</a>
						</Link>
						<br />
						<h4 className="text-center mx-auto mt-3 home__demo__subtitle">Chose your desire language</h4>
					</div>
					<div className="col">
						<Link to="/">
							<a href="#">
								<img className="img-thumbnail " src={stage03} alt="Thumbnail image" />
							</a>
						</Link>
						<br />
						<h4 className="text-center mx-auto mt-2 home__demo__subtitle">See your results</h4>
					</div>
				</div>
			</ScrollAnimation>
		</div>
	);
};

export default HomeDemo;
