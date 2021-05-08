import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { addProduct } from "./api";

const AddProduct = (props) => {
  const [product, setProduct] = useState({});
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
    addProduct(product).then((response) => {
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
          <Input required name="name" type="text" onChange={onChange} />
        </FormGroup>
        <FormGroup className="my-3">
          <Label>Image </Label>
          <Input name="image" type="file" onChange={onChange} />
        </FormGroup>
        <FormGroup check className="col-md-12 my-3">
          <Label check>
            <Input
              onChange={({ target: { checked } }) => {
                setProduct({
                  ...product,
                  isFeatured: checked,
                });
              }}
              checked={product.isFeatured || false}
              name="isFeatured"
              type="checkbox"
            />
            Is Featured Product
          </Label>
        </FormGroup>
        <FormGroup className="col-md-12 my-3">
          <Label>Description</Label>
          <Input name="description" type="textarea" onChange={onChange} />
        </FormGroup>
        <Button size="sm" type="submit" color="success">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
