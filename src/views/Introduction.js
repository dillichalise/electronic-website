import React from "react";
import { Col, Container, Row } from "reactstrap";

const Introduction = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={7} xs={12}>
          <div className="ts-intro">
            <h2 className="into-title">About Us</h2>
            <div>
              <h4>WE DELIVER HIGH QUALITY PRODUCTS</h4>
              <p>
                Sine wave Electronics is a leading power solution company,
                consistently delivering more energy and long-term peace of mind
                with the highest performing power solution equipment available.
                Sine Wave is the choice of more homeowners and business around
                the country. The company was established in January 01, 2007
                with the motto to deliver high quality power solution products.
                Our office is located in Kantipath, Kathmandu Nepal (In front of
                Nepal Nach ghar).
              </p>
            </div>
          </div>
        </Col>
        <Col md={5} xs={12}>
          <h3 className="into-title text-center">Contact Info</h3>
          <br />
          <div>
            <ul className="list-unstyled mb-0">
              <li>
                <div className="text-center">
                  <div className="fa fa-map-marker mt-4 fa-2x " />
                  <div>
                    <strong>
                      <i>Mahalaxmi - 02 Gwarko, Imadol Lalitpur Nepal.</i>
                    </strong>
                  </div>
                  <br />
                </div>
              </li>

              <li>
                <div className="text-center">
                  <div className="fa fa-phone mt-4 fa-2x " />
                  <div>
                    <strong>
                      <i>9841463272</i>
                    </strong>
                  </div>
                  <br />
                </div>
              </li>

              <li>
                <div className="text-center">
                  <div className="fa fa-envelope mt-4 fa-2x " />
                  <div>
                    <strong>
                      <i>
                        <a href="mailto:info@sinewave.com.np">
                          dillichalise@gmail.com
                        </a>
                      </i>
                    </strong>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
