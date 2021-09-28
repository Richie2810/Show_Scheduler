import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function Login() {
  const [name, set_name] = useState("");

  function submitName(event: any) {
    console.log(name);
  }
  return (
    <Container>
      <Form
        as={Col}
        md={{ span: 6, offset: 3 }}
        className="mt-5"
        style={{ backgroundColor: "#557A95" }}
      >
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
