import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Table,
} from "reactstrap";
import { getHash, getPageParams } from "../../utils/utils";
import PaginationPage from "../Pagination";
import { Link } from "react-router-dom";
import { deleteProduct, getProducts } from "./api";
import { toast } from "react-toastify";

const ProductList = (props) => {
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
    const isLoggedIn = window.localStorage.getItem("isAuthenticated");
    if (!isLoggedIn) {
      toast.info("Please login as admin to continue");
      props.history.push("/admin");
    }
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
        toast.error(response.message);
      }
    });
  };

  const handleDelete = (id) => {
    deleteProduct(id).then((response) => {
      if (response.status === "Success") {
        toast.success(response.message);
      } else {
        toast.error(response.message);
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
                          <Link
                            to={`/admin/products/edit/?i=${getHash(
                              product.id
                            )}`}
                          >
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
