import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { server } from "../config/server";
import productImage from "../images/product.jpg";
import { Link } from "react-router-dom";

const TopProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    server
      .get("/featured-products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <div className="bg-light py-4">
      <Container>
        <Card>
          <CardHeader>
            <h3>Our Top Products</h3>
          </CardHeader>
          <CardBody>
            {products.length === 0 ? (
              <div>There are no any featured products yet!!</div>
            ) : (
              <Row>
                {products.map((product) => {
                  return (
                    <Col md={3} className="text-center">
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "#000",
                        }}
                        to={`/products/view/?i=${product.id}`}
                      >
                        <img
                          className="img-responsive center-block "
                          style={{ height: "110px" }}
                          src={productImage}
                          title={product.name}
                          alt={product.name}
                        />
                        <div className="py-2">
                          <strong>{product.name}</strong>
                        </div>
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            )}
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default TopProducts;
