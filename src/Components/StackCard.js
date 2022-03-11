import React from "react";
import "Css/StackCard.scss";
import icon from "Json/icon.json";
// import { java } from "../Json/icon";

function StackCard({ src }) {
  const image = icon.filter((d) => {
    return d.name === src.stack;
  });

  return <img src={image[0].src} className="stackCard" alt="" />;
}

export default StackCard;
