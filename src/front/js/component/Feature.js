import React from "react";
import BrainImage from "../../img/brain.png";
import HumanImage from "../../img/HumanLearn.png";
import BoxImage from "../../img/Box.png";
import ScrollAnimation from "react-animate-on-scroll";

const Feature = () => {
	return (
		<div className="container">
			<ScrollAnimation animateIn="fadeIn" duration="2" animateOnce="true">
				<div className="row featurette mt-5">
					<div className="col-md-7">
						<h2 className="featurette-heading">
							Explore your brain’s ability. <span className="text-muted">It’ll blow your mind.</span>
						</h2>
						<p className="lead">
							Several studies have shown that the brain’s ability to absorb information is considerably
							higher when new information is presented simultaneously in both visual and verbal forms.
							This way, a strong and permanent connection is created between the picture and the word.
						</p>
					</div>
					<div className="col-md-5">
						<img src={BrainImage} alt="BrainImage" className="featurette-image img-fluid mx-auto" />
					</div>
				</div>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" duration="3" animateOnce="true">
				<div className="row featurette">
					<div className="col-md-7 order-md-2">
						<h2 className="featurette-heading">
							Learn to think. <span className="text-muted">In a new way.</span>
						</h2>
						<p className="lead">
							When the mental image of a study item is triggered by a picture instead of a verbal
							description in your native language, you are able to concentrate on just one language, and
							the association formed between the word and the picture becomes strong.
						</p>
					</div>
					<div className="col-md-5 order-md-1">
						<img src={BoxImage} alt="BoxImage" className="featurette-image img-fluid mx-auto" />
					</div>
				</div>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" duration="2" animateOnce="true">
				<div className="row featurette">
					<div className="col-md-7">
						<h2 className="featurette-heading">
							Inspiring Visual Thinking. <span className="text-muted">Increasing Engagement.</span>
						</h2>
						<p className="lead">
							Images are the simplest and the most effective way to make sure that the information gets
							stored as a long-term memory. Our short term memory processes words and can only retain
							about seven bits of information. Whereas, images are directly processed by our long-term
							memory, where they get indelibly etched.
						</p>
					</div>
					<div className="col-md-5">
						<img src={HumanImage} alt="HumanImage" className="featurette-image img-fluid mx-auto" />
					</div>
				</div>
			</ScrollAnimation>
		</div>
	);
};

export default Feature;
