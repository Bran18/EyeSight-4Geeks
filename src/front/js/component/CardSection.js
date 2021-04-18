import React from "react";
import LearnImage from "../../img/learn.png";

const CardSection = () => {
	return (
		<div className="container mx-auto mx-auto mb-5">
			<div className="card-deck">
				<div className="card rounded border-white">
					<img src={LearnImage} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Visuals Stick in Long-term Memory</h5>
						<p className="card-text">
							One of the easiest ways to ensure that learners store information in their long-term memory
							is to pair concepts with meaningful images.
						</p>
					</div>
				</div>
				<div className="card rounded border-white">
					<img src={LearnImage} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Improve your visual connection</h5>
						<p className="card-text">Great all-purpose solution for most visual recognition learning.</p>
					</div>
				</div>
				<div className="card rounded border-white">
					<img src={LearnImage} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Image Recognition </h5>
						<p className="card-text">
							Recognize over 11,000 different concepts including objects, themes, moods, and more, with
							outputs in 23 different languages.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardSection;
