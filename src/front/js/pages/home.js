import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { BannerCardsSmall } from "../component/bannerCardsSmall.jsx";
import { ProductCarousel } from "../component/productCarousel.jsx";
import { BannerLarge } from "../component/bannerLarge.jsx";
import { BannerThin } from "../component/bannerThin.jsx";

export const Home = () => {
  // const { store, actions } = useContext(Context);

  return (
    <>
      <Zoom>
        <ProductCarousel />
      </Zoom>

      <br />
      <Fade bottom>
        <BannerCardsSmall />
      </Fade>
      <br />
      <Fade bottom>
        <BannerLarge />
      </Fade>
      <Fade bottom>
        <BannerThin />
      </Fade>
    </>
  );
};
