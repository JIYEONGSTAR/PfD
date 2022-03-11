import React from "react";

const PageNum = ({ pageNum }) => {
  return <div className="pageNum" data-num={`${pageNum + 1}/5`}></div>;
};

export default PageNum;
