import React, { useContext, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

const AboutUs = () => {
	return (
		<div className="team_section layout_padding" style={{ paddingTop: "50px" }}>
			<div className="container">
				<h2 className="text-center"> ABOUT US. </h2>
				<p className="text-center">
					It is a long established fact that we know how to work but we also like to enjoy life, here you can
					see some facts about us.
				</p>
			</div>
			<div className="row" style={{ paddingTop: "60px" }}>
				<div className="col align-items-center" />
				<div className="col align-items-center">
					<div className="team_img-box align-items-center">
						<img
							src="https://www.bcmnetworks.net/images/team-1.png"
							style={{ width: "120px", height: "120px" }}
							className="rounded mx-auto d-block"
						/>
					</div>
					<div className="team_detail-box" style={{ paddingTop: "35px" }}>
						<h5 className="text-center"> 12520 + </h5>
						<p className="text-center"> Hours spent </p>
					</div>
				</div>
				<div className="col align-items-center">
					<div className="team_img-box align-items-center">
						<img
							src="https://www.bcmnetworks.net/images/team-2.png"
							style={{ width: "120px", height: "120px" }}
							className="rounded mx-auto d-block"
						/>
					</div>
					<div className="team_detail-box" style={{ paddingTop: "35px" }}>
						<h5 className="text-center"> 257 + </h5>
						<p className="text-center"> Commits </p>
					</div>
				</div>
				<div className="col align-items-center">
					<div className="team_img-box align-items-center">
						<img
							src="https://www.bcmnetworks.net/images/team-3.png"
							style={{ width: "120px", height: "120px" }}
							className="rounded mx-auto d-block"
						/>
					</div>
					<div className="team_detail-box" style={{ paddingTop: "35px" }}>
						<h5 className="text-center"> 287 + </h5>
						<p className="text-center"> Slices eaten </p>
					</div>
				</div>

				<div className="col align-items-center">
					<div className="team_img-box align-items-center">
						<img
							src="https://www.bcmnetworks.net/images/team-4.png"
							style={{ width: "120px", height: "120px" }}
							className="rounded mx-auto d-block"
						/>
					</div>
					<div className="team_detail-box" style={{ paddingTop: "35px" }}>
						<h5 className="text-center"> 1752 + </h5>
						<p className="text-center"> Coffee cups taken </p>
					</div>
				</div>
				<div className="col align-items-center" />
			</div>
			<div className="container" style={{ paddingTop: "80px" }}>
				<h2 className="text-center"> WE ARE TEAM. </h2>
				<p className="text-center">
					Specialists in creating content. Researchers from the most remote places of Google. Lovers of people
					who write script without accent. Fast as far as quality does not deteriorate. Effective in carrying
					out a plan, your plan. And beyond all that, your team.
				</p>
			</div>
			<div className="row" style={{ paddingTop: "60px" }}>
				<div className="col align-items-center" />
				<div className="col align-items-center">
					<div className="team_img-box">
						<img
							src="https://avatars.githubusercontent.com/u/31634868?v=4"
							style={{ width: "150px", height: "150px" }}
							className="rounded mx-auto d-block img-thumbnail"
							alt="Thumbnail image"
						/>
					</div>
					<div className="team_detail-box align-items-center" style={{ paddingTop: "35px" }}>
						<h5 className="text-center"> Brandon Andrey Fernández Fernández </h5>
						<p className="text-center"> FullStack 4Geek Academy </p>
					</div>
				</div>
				<div className="col align-items-center">
					<div className="team_img-box">
						<img
							src="https://avatars.githubusercontent.com/u/42480874?v=4"
							style={{ width: "150px", height: "150px" }}
							className="rounded mx-auto d-block img-thumbnail"
							alt="Thumbnail image"
						/>
					</div>
					<div className="team_detail-box align-items-center" style={{ paddingTop: "35px" }}>
						<h5 className="text-center"> Carlos Vera Araya </h5>
						<p className="text-center"> FullStack 4Geek Academy </p>
					</div>
				</div>
				<div className="col align-items-center">
					<div className="team_img-box">
						<img
							src="https://avatars.githubusercontent.com/u/59536240?v=4"
							style={{ width: "150px", height: "150px" }}
							className="rounded mx-auto d-block img-thumbnail"
							alt="Thumbnail image"
						/>
					</div>
					<div className="team_detail-box align-items-center" style={{ paddingTop: "35px" }}>
						<h5 className="text-center"> Adrian Eduardo Jenkins </h5>
						<p className="text-center"> FullStack 4Geek Academy </p>
					</div>
				</div>
				<div className="col align-items-center">
					<div className="team_img-box">
						<img
							src="https://avatars.githubusercontent.com/u/77852471?v=4"
							style={{ width: "150px", height: "150px" }}
							className="rounded mx-auto d-block img-thumbnail"
							alt="Thumbnail image"
						/>
					</div>
					<div className="team_detail-box align-items-center" style={{ paddingTop: "35px" }}>
						<h5 className="text-center"> Heyner Avila Sibaja </h5>
						<p className="text-center"> FullStack 4Geek Academy </p>
					</div>
				</div>
				<div className="col align-items-center" />
			</div>
		</div>
	);
};
export default AboutUs;
