import Header from '/components/Header';
import React from 'react';

const team = () => {

  return (
    <div>
      <Header />
      <div className="teamdiv">
        <h1 className="teamh1">Team Project</h1>
        <div className="teamone">
          <img src="/images/woman.png" />
          이름 : 윤다혜 <br />
          성별 : 여자 <br />
          생년월일 : 2003.08.01 <br />
          MBTI : ISTP <br />
        </div>
        <div className="teamone">
          <img src="/images/woman.png" />
          이름 : 김시우 <br />
          성별 : 여자 <br />
          생년월일 : 2003.01.02 <br />
          MBTI : INTJ <br />
        </div>
        <br />
        <div className="teamone" id="teamone1">
          <img src="/images/woman.png" />
          이름 : 송지현 <br />
          성별 : 여자 <br />
          생년월일 : 2003.10.17 <br />
          MBTI : ESTJ <br />
        </div>
        <div className="teamone" id="teamone2">
          <img src="/images/woman.png" />
          이름 : 이지인 <br />
          성별 : 여자 <br />
          생년월일 : 2003.12.22 <br />
          MBTI : INTJ <br />
        </div>
        <div className="teamone" id="teamone3">
          <img src="/images/man.png" />
          이름 : 홍준희 <br />
          성별 : 남자 <br />
          생년월일 : 2003.07.04 <br />
          MBTI : INTJ <br />
        </div>
      </div>

      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />

      <div className="teamproject">
        <b>팀명 : </b> <span>홍이김송윤</span>
        <br /> <br />
        <b>프로그램 소개 : </b> <span>비공식, 공식을 가리지 않고 신청 된 스터디 또는 동아리들을 승인하는 관리자 서버 프로그램<br />수업 내용 토대의 Next.js 기반 프로그램 제작</span>
      </div> 
    </div>
  );
};

export default team;
