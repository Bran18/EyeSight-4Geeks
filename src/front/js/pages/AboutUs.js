import React, { useContext, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import ScrollAnimation from "react-animate-on-scroll";
import CardSection from "../component/CardSection";

const AboutUs = () => {
	return (
		<div>
			<ScrollAnimation animateIn="fadeIn" duration="2" animateOnce="true">
				<div className="container about" style={{ paddingTop: "80px" }}>
					<h2 className="text-center brand"> eSight Visual Thinking </h2>
				</div>

				<CardSection />

				<section className="vision_section layout_padding2">
					<div className="container mb-3">
						<p className="text-justify">
							Our goal is to improve and promote visual thinking in a way to help to reach knowledge while
							learning a foreign language. Several studies have shown that the brain’s ability to absorb
							information is considerably higher when new information is presented simultaneously in both
							visual and verbal forms. Our short-term memory processes words and can only retain about
							seven bits of information.
						</p>
					</div>
				</section>

				<section className="ourteam">
					<ScrollAnimation animateIn="pulse" duration="2" animateOnce="true">
						<h2 className="text-center ourteam mb-4">Our Team</h2>
						<br />

						<div className="row" style={{ paddingTop: "70px" }}>
							<div className="col align-items-center" />
							<div className="col align-items-center">
								<div className="team_img-box">
									<img
										src="https://avatars.githubusercontent.com/u/31634868?v=4"
										style={{ width: "150px", height: "150px" }}
										className="rounded-circle mx-auto d-block img-thumbnail"
										alt="Thumbnail image"
									/>
								</div>
								<div className="team_detail-box align-items-center" style={{ paddingTop: "35px" }}>
									<h5 className="text-center"> Brandon Fernández </h5>
									<p className="text-center"> FullStack 4Geek Academy CR </p>
								</div>
							</div>
							<div className="col align-items-center">
								<div className="team_img-box">
									<img
										src="https://avatars.githubusercontent.com/u/42480874?v=4"
										style={{ width: "150px", height: "150px" }}
										className="rounded-circle mx-auto d-block img-thumbnail"
										alt="Thumbnail image"
									/>
								</div>
								<div className="team_detail-box align-items-center" style={{ paddingTop: "35px" }}>
									<h5 className="text-center"> Carlos Vera Araya </h5>
									<p className="text-center"> FullStack 4Geek Academy CR </p>
								</div>
							</div>
							<div className="col align-items-center">
								<div className="team_img-box">
									<img
										src="https://avatars.githubusercontent.com/u/59536240?v=4"
										style={{ width: "150px", height: "150px" }}
										className="rounded-circle mx-auto d-block img-thumbnail"
										alt="Thumbnail image"
									/>
								</div>
								<div className="team_detail-box align-items-center" style={{ paddingTop: "35px" }}>
									<h5 className="text-center"> Adrian Eduardo Jenkins </h5>
									<p className="text-center"> FullStack 4Geek Academy CR </p>
								</div>
							</div>
							<div className="col align-items-center">
								<div className="team_img-box">
									<img
										src="https://avatars.githubusercontent.com/u/77852471?v=4"
										style={{ width: "150px", height: "150px" }}
										className="rounded-circle mx-auto d-block img-thumbnail"
										alt="Thumbnail image"
									/>
								</div>
								<div className="team_detail-box align-items-center" style={{ paddingTop: "35px" }}>
									<h5 className="text-center"> Heyner Avila Sibaja </h5>
									<p className="text-center"> FullStack 4Geek Academy CR </p>
								</div>
							</div>
							<div className="col align-items-center" />
						</div>
						<br />
						<p className="text-center mb-4">
							We are researchers from the most remote places of Google. Fans of people who write script
							without accent. Fast as far as quality does not deteriorate. Creators, and beyond all , your
							esight development team.
						</p>
					</ScrollAnimation>
				</section>
			</ScrollAnimation>
		</div>
	);
};
export default AboutUs;
