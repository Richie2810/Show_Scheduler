import { Card, Col, Dropdown, DropdownButton } from "react-bootstrap";

export interface PerformancesProps {
  title: String;
  start_date: Date;
  end_date: Date;
  description: String;
  status: String;
  key: Number;
}

export default function Performances(props: PerformancesProps) {
  console.log(props);
  return (
    <Col>
      <Card className="mb-3">
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>Start: {props.start_date}</Card.Text>
        <Card.Text>End: {props.end_date}</Card.Text>
        <DropdownButton id="dropdown-item-button" title="Add to Schedule">
          <Dropdown.Item as="button" />
        </DropdownButton>
      </Card>
    </Col>
  );
}
