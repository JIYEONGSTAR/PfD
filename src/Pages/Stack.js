import React from "react";
import StackCard from "Components/StackCard";
import icon from "Json/icon.json";
import stack from "Json/stack";
import "Css/Stack.scss";

const Stack = () => {
  return (
    <div className="component stack">
      <h1>기술 스택 페이지</h1>
      <div className="stack__section">
        {stack.map((data) => (
          <StackCard src={data} />
        ))}
      </div>
    </div>
  );
};

export default Stack;
