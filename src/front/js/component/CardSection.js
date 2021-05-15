import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const CardSection = () => {
	return (
		<div className="container mx-auto mb-5 mt-4">
			<ScrollAnimation animateIn="fadeIn" duration="2" animateOnce="false">
				<section className="about_section">
					<div className="card-deck">
						<div className="card rounded border-white">
							<div className="card-body">
								<h5 className="card-title text-center">Visuals Stick in Long-term Memory</h5>
								<p className="card-text">
									One of the easiest ways to ensure that learners store information in their long-term
									memory is to pair concepts with meaningful images. the highest metabolic activity in
									your body is in the retinal epithelium
								</p>
							</div>
						</div>

						<div className="card rounded border-white">
							<div className="card-body">
								<h5 className="card-title text-center">Image Recognition </h5>
								<p className="card-text">
									The interactions between the eyes and the brain are still beyond understanding! 90%
									of information transmitted to the brain is visual, and visuals are processed 60,000X
									faster in the brain than text.
								</p>
							</div>
						</div>
					</div>
				</section>
			</ScrollAnimation>
		</div>
	);
};

export default CardSection;
