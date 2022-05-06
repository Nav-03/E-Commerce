import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Carousel from 'react-bootstrap/Carousel'
import { ProductCard } from "../component/productCards.jsx";
import { ProductCarousel } from "../component/productCarousel.jsx";

export const Home = () => {
	// const { store, actions } = useContext(Context);

	return (
		<>
			<ProductCarousel />
			<br />
			<ProductCard />
		</>
	);

};
