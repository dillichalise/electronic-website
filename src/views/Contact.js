import React from "react";
import { Col, Container, Row } from "reactstrap";

const Contact = () => {
  return (
    <>
      <div
        id="banner-area"
        className="banner-area"
        style={{
          backgroundImage:
            "url(https://sinewave.com.np/wp-content/themes/custom/images/contactBanner.jpg)",
        }}
      >
        <div className="banner-text">
          <Container>
            <Row>
              <Col>
                <div className="text-center">
                  <h1 className="banner-title" style={{ opacity: 1 }}>
                    Contact Us
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="my-4">
        <Container>
          <Row className="text-center">
            <h2 className="section-title">Reaching our Office</h2>
            <h3 className="section-sub-title">Find Our Location</h3>
          </Row>

          <Row>
            <Col md={4}>
              <div className="service-box-bg text-center">
                <span className="service-icon icon-round">
                  <i className="fa fa-map-marker" />
                </span>
                <div className="ts-service-box-content">
                  <h4>Visit Our Office</h4>
                  <p>Mahalaxmi - 02 Gwarko, Imadol Lalitpur Nepal </p>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="service-box-bg text-center">
                <span className="service-icon icon-round">
                  <i className="fa fa-envelope" />
                </span>
                <div>
                  <h4>Email Us</h4>
                  <p>dillichalise@gmail.com</p>
                </div>
              </div>
            </Col>

            <Col>
              <div className="service-box-bg text-center">
                <span className="service-icon icon-round">
                  <i className="fa fa-phone-square" />
                </span>
                <div>
                  <h4>Call Us</h4>
                  <p>+977 9841463272</p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="my-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.8568897150322!2d85.33655549874243!3d27.664435423418354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e0d117f6c7%3A0xf6c7fba7ce292a24!2sBurger%20House!5e0!3m2!1sen!2snp!4v1620375026643!5m2!1sen!2snp"
              height="450"
              width="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen="true"
            />
          </div>
        </Container>
      </div>
    </>
  );
};
export default Contact;
