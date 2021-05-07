import React, { useEffect, useState } from "react";
import { server } from "../../config/server";
import { Container, Col, Row, Button } from "reactstrap";

const ListProduct = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    server
      .get("/products")
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col md={3} />
          <Col md={9}>
            {products &&
              products.map((product) => {
                return (
                  <Row>
                    <Col
                      md={12}
                      className="thumbnail "
                      style={{ borderRadius: "15px" }}
                    >
                      <Row>
                        <Col md={4}>
                          <div className="gap-15" />
                          <img
                            className="img-responsive center-block"
                            style={{ borderRadius: "15px", height: "150px" }}
                            src="https://sinewave.com.np/wp-content/uploads/2020/07/XL-solar-inverter-DC-UPS.jpg"
                            title={product.name}
                            alt={"Image"}
                          />
                          <div className="py-2" />
                          <div className="text-center pb-2">
                            <a>
                              <Button>View Product</Button>
                            </a>
                          </div>
                        </Col>
                        <Col md={8} className="caption">
                          <h2 style={{ width: "70%" }}>{product.name}</h2>
                          <div className="caption">
                            <p>
                              <strong>Features of {product.name}</strong>
                            </p>
                            <div>{product.description}</div>
                            <div style={{ height: "30px" }} />
                            <div>
                              Category:{" "}
                              <span className="btn btn-outline-secondary btn-sm">
                                {product.product_category.name}
                              </span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                );
              })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ListProduct;
