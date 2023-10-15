import React from "react";
import Header from '/components/Header';

const portfolio = () => {
  return (
    <div>
      <Header />
      <div className="portfoliodiv">
      <h1 className="portfolioh1">PORTFOLIO</h1>
        <div className="project">
          <a href="https://webprogramming.vercel.app/" target="_blank"><img src="/images/project1.png" /></a>
          <a href="https://github.com/YoonDahye08/webprogramming1" target="_blank" className="gitH">깃허브 바로가기</a>
        </div>
        <div className="project">
          <a href="https://clerk2-nine.vercel.app/" target="_blank"><img src="/images/project2.png" /></a>
          <a href="https://github.com/YoonDahye08/clerk2" target="_blank" className="gitH">깃허브 바로가기</a>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
