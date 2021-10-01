// import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { selectUser } from "../store/user/selector";
import { useDispatch, useSelector } from "react-redux";
import { addToSchedule } from "../store/user/actions";

export interface PerformancesProps {
  title: String;
  start_date: Date;
  end_date: Date;
  description: String;
  status: String;
  key: Number;
  id: String;
}

export default function Performances(props: PerformancesProps) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const onScheduleClick = (id) => {
    dispatch(addToSchedule(user.name, props.id));
  };
  let currentStatus = "skyblue";

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
            onScheduleClick(props.id);
          }}
        >
          Add to schedule
        </button>
      </Card>
    </Col>
  );
}
