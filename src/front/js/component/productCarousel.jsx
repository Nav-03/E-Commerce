import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const ProductCarousel = () => {
  return (
    <>
      {/* carousel displaying latest news/inventory */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.autozone.com/cdn/images/B2C/US/media/FY22/P10/Heros/fy22p10-superhero-battery-destination-d.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.autozone.com/cdn/images/B2C/US/media/FY22/P10/Heros/fy22p10-superhero-complete-brakejob15%-d.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.autozone.com/cdn/images/B2C/US/media/FY22/P10/Heros/_fy22p10-superhero-lucas-3-d.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
