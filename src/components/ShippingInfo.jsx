import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const shippingData = [
  {
    imgSrc: "https://images.drapemall.com/images/appattribute/1668770585.png",
    alt: "Worldwide Shipping",
    title: "Worldwide Shipping",
    webText: "Worldwide Shipping",
    mobileText: "Free Shipping",
  },
  {
    imgSrc: "https://images.drapemall.com/images/appattribute/1668770636.png",
    alt: "8 Days Return Policy",
    title: "8 Days Return Policy",
    webText: "8 Days Return Policy",
    mobileText: "Easy Return Policy",
  },
  {
    imgSrc: "https://images.drapemall.com/images/appattribute/1668770705.png",
    alt: "Cash On Delivery",
    title: "Cash On Delivery",
    webText: "Cash On Delivery",
    mobileText: "Cash On Delivery",
  },
  {
    imgSrc: "https://images.drapemall.com/images/appattribute/1668770821.png",
    alt: "Made In India",
    title: "Made In India",
    webText: "Made In India",
    mobileText: "Made In India",
  },
];

const ShippingInfo = () => {
  return (
    <section className="py-5 bg-light" id="webattribute-section">
      <Container>
        <Row className="g-4">
          {shippingData.map((item, index) => (
            <Col xs={12} sm={6} md={6} lg={3} key={index}>
              <Card className="text-center shadow-sm border-0 rounded-3 p-3 h-100">
                <Card.Img variant="top" src={item.imgSrc} alt={item.alt} className="mx-auto" style={{ width: "60px" }} />
                <Card.Body>
                  <Card.Title className="fs-6 fw-bold">{item.webText}</Card.Title>
                  {/* <Card.Text className="text-muted d-none d-md-block">{item.mobileText}</Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ShippingInfo;