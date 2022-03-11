import React, { useState } from "react";

const Dot = ({ pageNum, index, onPageNum }) => {
  return (
    <div
      className={index === pageNum ? "dot active" : "dot"}
      onClick={() => onPageNum(index)}
    ></div>
  );
};
const Dots = ({ onPageChange, pageNum }) => {
  const handlePageChange = (num) => {
    onPageChange(num);
  };
  // const [dotArr, setDotArr] = useState([]);
  // for (let i = 0; i < 5; i++) {
  //   setDotArr([
  //     ...dotArr,
  //     <Dot pageNum={pageNum} index={i} onPageNum={handlePageChange} />,
  //   ]);
  // }
  // console.log(dotArr);
  return (
    <nav>
      {[...Array(4)].map((e, i) => (
        <div>
          <Dot pageNum={pageNum} index={i} onPageNum={handlePageChange} />
        </div>
      ))}
      {/* {dotArr} */}
    </nav>
  );
};

export default Dots;
