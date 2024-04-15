import React from "react";
import  Navbar from "./Navbar.jsx";
import Carousel from "./Carousel.jsx";
import Card from "./Card.jsx";






//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<p className="text-center"><Navbar/></p>
			<span><Card/></span>
			<p><Carousel/></p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
