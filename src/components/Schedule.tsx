import { Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeSchedule } from "../store/user/actions";
import { selectUser } from "../store/user/selector";
import { PerformancesProps } from "./Performances";
import "./Schedule.css";

export default function Schedule(props: PerformancesProps) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const color = props.status ? "orange" : "lightgreen";
  const start = new Date(props.start_date);
  const end = new Date(props.end_date);

  const startHour = start.getHours();
  const startMin = start.getMinutes();

  const endHour = end.getHours();
  const endMin = end.getMinutes();

  const startString =
    startMin.toString().slice().length === 1 ? "0" + startMin : startMin;

  const endString =
    endMin.toString().slice().length === 1 ? "0" + endMin : endMin;

  return (
    <Col className="Schedule">
      <Card style={{ backgroundColor: `${color}` }}>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>
          Start: {startHour}:{startString}
        </Card.Text>
        <Card.Text>
          End: {endHour}:{endString}
        </Card.Text>
        {props.status ? (
          <Card.Text>
            <b>This is your 15 minute warning!!</b>
          </Card.Text>
        ) : (
          <Card.Text></Card.Text>
        )}
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
