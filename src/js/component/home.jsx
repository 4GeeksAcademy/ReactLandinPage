import React from "react";

//include images into your bundle
import { Navbar } from "./Navbar.jsx";
import { Header } from "./Header.jsx";
import { Card } from "./Card.jsx";
import { CardList } from "./CardList.jsx";
import { Footer } from "./Footer.jsx";



//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Header/>
			<Card/>
			<CardList/>
			<Footer/>
			
			

		</div>
	);
};

export default Home;
