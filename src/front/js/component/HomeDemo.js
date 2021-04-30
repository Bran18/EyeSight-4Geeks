import React from "react";
import { Link } from "react-router-dom";
import LearnImage from "../../img/learn.png";

const HomeDemo = () => {
	return (
		<div className="container">
			<h3 className=" text-center mb-5 home__demo__title">Try it out with your favorite Image!</h3>
			<div className="row d-flex justify-content-center mb-5">
				<div className="col">
					<Link to="/">
						<a href="#">
							<img className="img-thumbnail " src={LearnImage} alt="Thumbnail image" />
						</a>
					</Link>
				</div>
				<div className="col">
					<Link to="/">
						<a href="#">
							<img className="img-thumbnail " src={LearnImage} alt="Thumbnail image" />
						</a>
					</Link>
				</div>
				<div className="col">
					<Link to="/">
						<a href="#">
							<img className="img-thumbnail " src={LearnImage} alt="Thumbnail image" />
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomeDemo;
