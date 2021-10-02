// import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { selectUser } from "../store/user/selector";
import { useDispatch, useSelector } from "react-redux";
import { addToSchedule } from "../store/user/actions";
import "./Performance.css";

export interface PerformancesProps {
  title: String;
  start_date: Date;
  end_date: Date;
  description: String;
  status: Boolean;
  key: Number;
}

export default function Performances(props: PerformancesProps) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const onScheduleClick = () => {
    dispatch(addToSchedule(user.name, props.key));
  };
  let currentStatus = "skyblue";
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
    <Col className="performance">
      <Card style={{ backgroundColor: `${currentStatus}` }}>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>
          Start: {startHour}:{startString}
        </Card.Text>
        <Card.Text>
          End: {endHour}:{endString}
        </Card.Text>
        <button
          type="button"
          onClick={() => {
            onScheduleClick();
          }}
        >
          Add to schedule
        </button>
      </Card>
    </Col>
  );
}
