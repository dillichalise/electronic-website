import React, { useEffect, useState } from "react";
import query from "querystring";
import { getProduct, updateProduct } from "./api";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const EditProduct = (props) => {
  const [product, setProduct] = useState({});
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
  };
  useEffect(() => {
    GetData();
  }, [id]);

  const onChange = ({ target: { name, value, files } }) => {
    switch (name) {
      case "image":
        setProduct({ ...product, [name]: files[0] });
        break;
      default:
        setProduct({ ...product, [name]: value });
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateProduct(product).then((response) => {
      if (response.status === "Success") {
        console.log(response.message);
      } else {
        console.log(response.message);
      }
      props.history.push("/admin/products");
    });
  };

  return (
    <Container className="my-5">
      <Form onSubmit={onSubmit}>
        <FormGroup className="col-md-6 my-3">
          <Label>Name</Label>
          <Input
            required
            name="name"
            type="text"
            value={product?.name}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup className="my-3">
          <Label>Image </Label>
          <Input name="image" type="file" onChange={onChange} />
        </FormGroup>
        <FormGroup check className="col-md-12 my-3">
          <Label check>
            <Input
              checked={product.isFeatured}
              onChange={({ target: { checked } }) => {
                setProduct({
                  ...product,
                  isFeatured: checked,
                });
              }}
              name="isFeatured"
              type="checkbox"
            />
            Is Featured Product
          </Label>
        </FormGroup>
        <FormGroup className="col-md-12 my-3">
          <Label>Description</Label>
          <Input
            name="description"
            type="textarea"
            value={product?.description}
            onChange={onChange}
          />
        </FormGroup>
        <Button size="sm" type="submit" color="success">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default EditProduct;
