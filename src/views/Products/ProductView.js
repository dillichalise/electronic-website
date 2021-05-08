import React, { useEffect, useState } from "react";
import query from "querystring";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import productImage from "../../images/product.jpg";
import { Link } from "react-router-dom";
import BackgroundImage from "../../images/1_rev.png";
import { getFeaturedProducts, getProduct } from "../admin/api";

const ProductView = (props) => {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const qs = query.parse(props.location.search);
  const id = qs["?i"];

  const GetData = () => {
    getProduct(id).then((response) => {
      if (response.status === "Success") {
        setProduct(response.data);
      } else {
        console.log(response.message);
      }
    });

    getFeaturedProducts().then((response) => {
      if (response.status === "Success") {
        setProducts(response.data);
      } else {
        console.log(response.message);
      }
    });
  };

  useEffect(() => {
    GetData();
  }, [id]);

  return (
    <>
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
                    View Product
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Container className="my-5">
        <Card>
          <CardHeader>Product Description</CardHeader>
          <CardBody>
            <Row>
              <Col md={8}>
                <div className="text-center">
                  <img
                    className="img-responsive"
                    src={productImage}
                    alt={product.name}
                  />
                  <h2 className="py-2">
                    <strong>{product.name}</strong>
                  </h2>
                </div>
                <div className="my-3">
                  <p className="mb-2">
                    <strong>Features of {product.name}</strong>
                  </p>
                  <div className="ml-2">{product.description}</div>
                </div>
              </Col>
              <Col md={4}>
                <Card>
                  <CardHeader>Featured Products</CardHeader>
                  <CardBody>
                    {products.map((item, i) => {
                      return (
                        <li className="py-2">
                          <Link to={`?i=${item.id}`}>{item.name}</Link>
                        </li>
                      );
                    })}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default ProductView;
