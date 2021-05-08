import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Table,
} from "reactstrap";
import { getPageParams } from "../../utils/utils";
import PaginationPage from "../Pagination";
import { Link } from "react-router-dom";
import { deleteProduct, getProducts } from "./api";

const ProductList = () => {
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

  const handleDelete = (id) => {
    deleteProduct(id).then((response) => {
      if (response.status === "Success") {
        console.log(response.message);
      } else {
        console.log(response.message);
      }
      GetData();
    });
  };

  return (
    <Container className="my-5">
      <Card>
        <CardHeader>
          <span>Product List</span>
          <Link style={{ float: "right" }} to={`/admin/products/add`}>
            <Button
              title={"Edit"}
              size={"sm"}
              color="success"
              className="mx-1 mt-1"
            >
              Add Product
            </Button>
          </Link>
        </CardHeader>
        <CardBody>
          {products.length === 0 ? (
            <div>There are no products added!!</div>
          ) : (
            <>
              <Table responsive bordered>
                <thead>
                  <tr>
                    <th>S.N.</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {products?.map((product, index) => {
                    return (
                      <tr key={product.id}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.product_category.name}</td>
                        <td>
                          <Link to={`/admin/products/edit/?i=${product.id}`}>
                            <Button
                              title={"Edit"}
                              color={"info"}
                              className="mx-1 mt-1"
                            >
                              <i className="fa fa-edit" />
                            </Button>
                          </Link>
                          <Button
                            title={"Delete"}
                            color={"danger"}
                            className="mx-1 mt-1"
                            onClick={() => handleDelete(product.id)}
                          >
                            <i className="fa fa-trash" />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
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
            </>
          )}
        </CardBody>
      </Card>
    </Container>
  );
};

export default ProductList;
