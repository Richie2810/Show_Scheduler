import { Card, Col } from "react-bootstrap";
import { PerformancesProps } from "./Performances";

export default function Schedule(props: PerformancesProps) {
  const currentStatus = "orange";
  return (
    <Col>
      <Card className="mb-3" style={{ backgroundColor: `${currentStatus}` }}>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>Start: {props.start_date}</Card.Text>
        <Card.Text>End: {props.end_date}</Card.Text>
        <button
          type="button"
          onClick={() => {
            // onRemoveClick(props.id);
          }}
        >
          Add to schedule
        </button>
      </Card>
    </Col>
  );
}
