import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { BannerCardsSmall } from "../component/banners/bannerCardsSmall.jsx";
import { BannerCarousel } from "../component/banners/bannerCarousel.jsx";
import { BannerLarge } from "../component/banners/bannerLarge.jsx";
import { BannerThin } from "../component/banners/bannerThin.jsx";

export const Home = () => {
  // const { store, actions } = useContext(Context);

  return (
    <>
      <Zoom>
        <BannerCarousel />
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
