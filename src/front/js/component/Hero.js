import React from "react";
import LearnImage from "../../img/learn.png";
import ScrollAnimation from "react-animate-on-scroll";

const Hero = () => {
	return (
		<div>
			<ScrollAnimation animateIn="pulse" duration="2" animateOnce="false">
				<div className="hero-container">
					<h1 className="text-center">eSight</h1>
					<p>Inspiring Visual Thinking</p>
				</div>
			</ScrollAnimation>
		</div>
	);
};

export default Hero;
