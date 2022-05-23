import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { ProductCard } from "../component/productCards.jsx";
import { ProductCarousel } from "../component/productCarousel.jsx";

export const Home = () => {
  // const { store, actions } = useContext(Context);

  return (
    <>
      <Zoom>
        <ProductCarousel />
      </Zoom>

      <br />
      <Fade bottom>
        <ProductCard />
      </Fade>
    </>
  );
};
