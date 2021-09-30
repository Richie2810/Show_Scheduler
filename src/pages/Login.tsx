import React, { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../store/user/actions";
import { selectUser } from "../store/user/selector";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [name, set_name] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const history = useHistory();

  function submitName(e) {
    dispatch(signIn(name));
    history.push("/shows");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Login</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => set_name(event.target.value)}
            type="name"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitName}>
            Log in
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}