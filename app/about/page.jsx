import React from "react";
import Header from '/components/Header';

const about = () => {
  return (
    <div>
      <Header />
      <h1 className="abouth1">ABOUT ME</h1>
      <div className="about">
        <img src="/images/me.jpg" className="mejpg"/>
        <p className="aboutme">윤다혜</p>
        <p className="aboutme">2003.08.01</p>
        <br />
        <p className="aboutme">경기도 고양시</p>
        <p className="aboutme">ydh_0801@naver.com</p>
        <br />
      </div>
    </div>
  );
};

export default about;
