import React, { useEffect, useState } from "react";
import { server } from "../../config/server";
import { Container, Col, Row, Button } from "reactstrap";
import BackgroundImage from "../../images/1_rev.png";
import productImage from "../../images/product.jpg";

const ListProduct = () => {
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
      <div
        id="banner-area"
        className="banner-area"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        <div className="banner-text">
          <Container>
            <Row>
              <Col>
                <div className="text-center">
                  <h1 className="banner-title" style={{ opacity: 1 }}>
                    Products
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Container className="pt-3">
        <Row>
          {products &&
            products.map((product) => {
              return (
                <Col
                  md={6}
                  className="thumbnail my-4 "
                  style={{ borderRadius: "15px" }}
                >
                  <Row>
                    <Col md={4}>
                      <div className="my-3" />
                      <img
                        className="img-responsive center-block"
                        style={{ borderRadius: "15px", height: "120px" }}
                        src={productImage}
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
                          <span className="btn btn-outline-secondary btn-sm disabled">
                            {product.product_category.name}
                          </span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};
export default ListProduct;
