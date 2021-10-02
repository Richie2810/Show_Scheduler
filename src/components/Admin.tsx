import { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addPerformance,
  removePerformance,
} from "../store/performance/actions";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [start_date, set_start_date] = useState("");
  const [end_date, set_end_date] = useState("");
  const [remove_perf, set_remove_perf] = useState("");

  const dispatch = useDispatch();

  function submitForm(event: { preventDefault: () => void }) {
    event.preventDefault();

    dispatch(addPerformance(title, description, start_date, end_date));
    // console.log(title, description, link, img)

    setTitle("");
    setDescription("");
  }

  function removePerf(event: { preventDefault: () => void }) {
    event.preventDefault();
    dispatch(removePerformance(remove_perf));
    set_remove_perf("");
  }

  return (
    <Container>
      <Form
        as={Col}
        md={{ span: 6, offset: 3 }}
        className="mt-5 pb-2"
        style={{ backgroundColor: "#557A95" }}
      >
        <h1 className="mt-5 mb-5">Add Performance</h1>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Title"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicDesc">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            placeholder="Description"
            required
          />
        </Form.Group>
        <Form.Label>
          Please enter time in this format 2021-10-28T22:10:00.000+02:00
        </Form.Label>
        <Form.Group controlId="formBasicLink">
          <Form.Label>Start Time</Form.Label>
          <Form.Control
            value={start_date}
            onChange={(event) => set_start_date(event.target.value)}
            type="text"
            placeholder="Start Time"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicImg">
          <Form.Label>End Time</Form.Label>
          <Form.Control
            value={end_date}
            onChange={(event) => set_end_date(event.target.value)}
            type="text"
            placeholder="End Time"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button
            variant="primary"
            type="submit"
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              submitForm(event);
            }}
          >
            Add Performance
          </Button>
        </Form.Group>
        <h1 className="mt-5 mb-5">Remove Performance</h1>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={remove_perf}
            onChange={(event) => set_remove_perf(event.target.value)}
            type="text"
            placeholder="This Show will be removed"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button
            variant="primary"
            type="submit"
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              removePerf(event);
            }}
          >
            Remove Performance
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
