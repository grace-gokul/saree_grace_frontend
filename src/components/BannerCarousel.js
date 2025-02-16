import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../assets/banner1.jpg"; // Update with your image path
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

const BannerCarousel = () => {
  return (
    <div className="mt-16">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
