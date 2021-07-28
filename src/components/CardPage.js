import React from "react";
import Progress from "./Markers/Progress";
import { Card } from "react-bootstrap";
import "./../styles/CardPage.css";

export default function CardPage(props) {
  const name = props.name;
  return (
    <Card text="dark" className="card">
      <Card.Header className="cardHeader"> {props.name} </Card.Header>{" "}
      {/*props.name*/}
      <Card.Body>
        <div className="DayHeader">
          Mon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fri&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sun&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i class="fas fa-thumbs-up fa-2x"></i>
        </div>
        <br />
        <Progress data={props.res[name]}/>
      </Card.Body>
    </Card>
  );
}
