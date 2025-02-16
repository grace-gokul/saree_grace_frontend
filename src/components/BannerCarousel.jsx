import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./BannerCarousel.css";

const BannerCarousel = () => {
    const banners = [
        { id: 1, image: "https://sareegrace.store/static/media/saree_grace_slider_01.8bdc080a742447b302d1.webp", alt: "Elegant Saree Collection" },
        { id: 2, image: "https://sareegrace.store/static/media/saree_grace_slider_02.2e5f63f6f04627883d3a.webp", alt: "Festive Silk Sarees" },
    ];

    return (
        <Carousel fade interval={3000} className="banner-carousel">
            {banners.map((banner) => (
                <Carousel.Item key={banner.id}>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner.image}
                        alt={banner.alt}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default BannerCarousel;