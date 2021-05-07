import React from "react";
import { Container, Row } from "reactstrap";

const Facts = () => {
  return (
    <div className="bg-light">
      <Container>
        <Row>
          <div className="facts-wrapper">
            <div className="col-sm-4 ts-facts">
              <div className="ts-facts-img">
                <img src="" alt="" />
              </div>
              <div className="ts-facts-content">
                <h2 className="ts-facts-num">
                  <span className="counterUp" data-count="1389">
                    0
                  </span>
                </h2>
                <h3 className="ts-facts-title">Total Products</h3>
              </div>
            </div>

            <div className="col-sm-4 ts-facts">
              <div className="ts-facts-img">
                <img src="" alt="" />
              </div>
              <div className="ts-facts-content">
                <h2 className="ts-facts-num">
                  <span className="counterUp" data-count="20">
                    0
                  </span>
                </h2>
                <h3 className="ts-facts-title">Staff Members</h3>
              </div>
            </div>

            <div className="col-sm-4 ts-facts">
              <div className="ts-facts-img">
                <img src="" alt="" />
              </div>
              <div className="ts-facts-content">
                <h2 className="ts-facts-num">
                  <span className="counterUp" data-count="3000">
                    0
                  </span>
                </h2>
                <h3 className="ts-facts-title">Hours of Work</h3>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Facts;
