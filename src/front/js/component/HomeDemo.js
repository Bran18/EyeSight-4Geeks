import React from "react";
import { Link } from "react-router-dom";

const HomeDemo = () => {
	return (
		<div className="container">
			<h2 className=" text-center mb-5 home__demo__title">Learn With Your Favorite Image!</h2>
			<div className="row d-flex justify-content-center mb-5">
				<div className="col">
					<Link to="/">
						<a href="#">
							<img
								className="img-thumbnail "
								src="https://dummyimage.com/310x220/000/fff"
								alt="Thumbnail image"
							/>
						</a>
					</Link>
				</div>
				<div className="col">
					<Link to="/">
						<a href="#">
							<img
								className="img-thumbnail "
								src="https://dummyimage.com/310x220/000/fff"
								alt="Thumbnail image"
							/>
						</a>
					</Link>
				</div>
				<div className="col">
					<Link to="/">
						<a href="#">
							<img
								className="img-thumbnail "
								src="https://dummyimage.com/310x220/000/fff"
								alt="Thumbnail image"
							/>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomeDemo;
