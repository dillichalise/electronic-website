import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { server } from "../../config/server";
import { toast } from "react-toastify";

const Login = (props) => {
  const [data, setData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    server
      .post(`/login`, data)
      .then((response) => {
        window.localStorage.setItem("isAuthenticated", response.data.data);
        props.history.push("/admin/products");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  return (
    <div className="my-4">
      <Container>
        <Form onSubmit={handleSubmit} onChange={handleChange}>
          <Row>
            <Col md={6}>
              <FormGroup className="my-2">
                <Label>Username</Label>
                <Input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup className="my-2">
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                />
              </FormGroup>
            </Col>
          </Row>
          <Button>Login</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
