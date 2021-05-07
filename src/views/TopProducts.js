import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { server } from "../config/server";

const TopProducts = () => {
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
    <div className="bg-light py-4">
      <Container>
        <Card>
          <CardHeader>
            <h3>Our Top Products</h3>
          </CardHeader>
          <CardBody>
            <Row>
              {products.map((product) => {
                return (
                  <Col md={3} className="text-center">
                    <img
                      className="img-responsive center-block "
                      style={{ height: "110px" }}
                      src={
                        "https://sinewave.com.np/wp-content/uploads/2020/07/XL-solar-inverter-DC-UPS.jpg"
                      }
                      title={product.name}
                      alt={product.name}
                    />
                    <div className="py-2">
                      <strong>{product.name}</strong>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default TopProducts;
