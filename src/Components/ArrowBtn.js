import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../Css/App.scss";
const ArrowBtn = ({ page, setPage, direction, setDirection, lastPage }) => {
  return (
    <>
      <button
        className="arrow left"
        onClick={() => {
          setPage(page - 1);
          setDirection("left");
        }}
        disabled={page === 0}
      >
        <FaAngleLeft size="100px" />
      </button>

      <button
        className="arrow right"
        onClick={() => {
          setPage(page + 1);
          setDirection("right");
        }}
        disabled={page === lastPage}
      >
        <FaAngleRight size="100px" />
      </button>
    </>
  );
};

export default ArrowBtn;
