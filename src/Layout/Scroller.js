import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import Dots from "./Dots";
import Cover from "../Pages/Cover";
import Career from "../Pages/Career";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";
import Progress from "Layout/Progress";
import PageNum from "./PageNum";

const Scroller = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };
  const handleBeforePageChange = (number) => {
    console.log(number);
  };
  return (
    <div className="scroller">
      <Progress page={currentPage} />

      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <Cover />
        <Career />
        <Project />
        <Contact />
      </ReactPageScroller>
      <Dots onPageChange={handlePageChange} pageNum={currentPage} />
      <PageNum pageNum={currentPage} />
    </div>
  );
};

export default Scroller;
