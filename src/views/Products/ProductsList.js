import React, { useEffect, useState } from "react";
import { Container, Col, Row, Card, Button, CardBody } from "reactstrap";
import BackgroundImage from "../../images/1_rev.png";
import productImage from "../../images/product.jpg";
import { Link } from "react-router-dom";
import PaginationPage from "../Pagination";
import { getPageParams } from "../../utils/utils";
import { getProducts } from "../admin/api";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [offset, setOffset] = useState(0);
  const [pageSize, setPageSize] = useState(3);

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setPage(1);
    GetData();
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    GetData();
  };

  useEffect(() => {
    GetData();
  }, [pageSize, page, offset]);

  const GetData = () => {
    const params = getPageParams(page, pageSize);
    getProducts(params).then((response) => {
      if (response.status === "Success") {
        setProducts(response.data.pageData);
        setTotalPages(response.data.totalPages);
        setTotalItems(response.data.totalItems);
        setOffset(response.data.offset);
      } else {
        console.log(response.message);
      }
    });
  };

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
      <Container className="my-4">
        <Card>
          <CardBody>
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
                            alt={product.name}
                          />
                          <div className="py-2" />
                          <div className="text-center pb-2">
                            <Link to={`/products/view/?i=${product.id}`}>
                              <Button>View Product</Button>
                            </Link>
                          </div>
                        </Col>
                        <Col md={8} className="caption">
                          <h2 style={{ width: "70%" }}>
                            <Link
                              style={{
                                textDecoration: "none",
                                color: "#000",
                              }}
                              to={`/products/view/?i=${product.id}`}
                            >
                              {product.name}
                            </Link>
                          </h2>
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
            <div className="bg-light">
              <PaginationPage
                handlePageChange={handlePageChange}
                handlePageSizeChange={handlePageSizeChange}
                offset={offset}
                pageSize={pageSize}
                totalItems={totalItems}
                totalPages={totalPages}
                page={page}
              />
            </div>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};
export default ListProduct;
