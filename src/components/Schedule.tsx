import { Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeSchedule } from "../store/user/actions";
import { selectUser } from "../store/user/selector";
import { PerformancesProps } from "./Performances";

export default function Schedule(props: PerformancesProps) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const color = props.status ? "orange" : "lightgreen";
  return (
    <Col>
      <Card className="mb-3" style={{ backgroundColor: `${color}` }}>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>Start: {props.start_date}</Card.Text>
        <Card.Text>End: {props.end_date}</Card.Text>
        <button
          type="button"
          onClick={() => {
            dispatch(removeSchedule(user.name, props.id));
          }}
        >
          Remove
        </button>
      </Card>
    </Col>
  );
}
