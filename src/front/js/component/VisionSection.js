import React from "react";
import CardSection from "../component/CardSection";
import ScrollAnimation from "react-animate-on-scroll";

const VisionSection = () => {
	return (
		<div>
			<section className="vision_section layout_padding2">
				<div className="container mb-3">
					<h2 className="text-center text-uppercase">Endless possibilities with ESIGHT and AI</h2>
					<p className="text-center">
						Simply pass an image input with a accessible URL or by directly sending image bytes. Them ESIGHT
						will returns a list of concepts present within the image
					</p>
				</div>
				<div className="container mx-auto mx-auto mb-5">
					<ScrollAnimation animateIn="fadeIn" duration="2" animateOnce="true">
						<div className="card-deck">
							<div className="card rounded border-white">
								<div className="card-body">
									<h5 className="card-title text-center">Improve Comprehension</h5>
									<p className="card-text">
										Connecting words to pictures gives them a more concrete base in our mind and
										memory. If we see a new word in front of us, it is more difficult to remember
										because it is simply an abstract concept.
									</p>
								</div>
							</div>
							<div className="card rounded border-white">
								<div className="card-body">
									<h5 className="card-title text-center">Visual Cues Trigger Emotions</h5>
									<p className="card-text">
										Visuals cause a faster and stronger reaction than words. They help users engage
										with the content, and such emotional reactions influence information retention.
										This is because the visual memory is encoded in the medial temporal lobe of the
										brain.
									</p>
								</div>
							</div>
							<div className="card rounded border-white">
								<div className="card-body">
									<h5 className="card-title text-center">They Transmit Messages Faster </h5>
									<p className="card-text">
										Did you know the brain can see images that last for just 13 milliseconds? Also
										our eyes can register 36,000 visual messages per hour and 90% of information
										transmitted to the brain is visual.
									</p>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</section>
		</div>
	);
};

export default VisionSection;
