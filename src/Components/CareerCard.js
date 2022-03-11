import React from "react";
import "Css/CareerCard.scss";

function CareerCard({ name, term, text, direction }) {
  return (
    <div key={name} className={"careerCard " + direction}>
      <h2>{name}</h2>
      <p>{term}</p>
      <p>{text}</p>
    </div>
  );
}

export default CareerCard;
