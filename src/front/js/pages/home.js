import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Feature from "../component/Feature";
import Hero from "../component/Hero";
import HomeDemo from "../component/HomeDemo";
import CardSection from "../component/CardSection";
import VisionSection from "../component/VisionSection";

export const Home = () => (
	<div>
		<Hero />
		<Feature />
		<VisionSection />
		<HomeDemo />
	</div>
);
