// cover home career stack project contact
import React from "react";
import "../Css/Cover.scss";
import image from "../image/jiyeong.png";
const Cover = () => {
  return (
    <div className="cover">
      <div className="cover__left">
        <div className="cover__left__wrapper">
          <h2 className="cover__intro">Hello, My Name Is</h2>
          <h1 className="cover__name">JIYEONG PARK</h1>
          <div className="cover__title">
            <div className="cover__title__wrapper">
              <div className="cover__title__item">1.Web Developer</div>
              <div className="cover__title__item">2.Publisher</div>
              <div className="cover__title__item">3.web Designer</div>
            </div>
          </div>
          <p className="cover__desc">
            개발자를 꿈꾸며 <br /> 프론트엔드 개발자를 시작으로 풀스택 개발자가
            되는 것이 목표입니다.
            <br />
            React로 개발하고 있으며 웹 퍼블리싱도 겸하는 중입니다.
          </p>
        </div>
      </div>
      <div className="cover__right">
        <img src={image} alt="" className="cover__img" />
      </div>
    </div>
  );
};

export default Cover;
