import { Link } from "react-router-dom";
import "./SurveyIndex.css";
import logo from "../assets/icon-logo-dolbomzigi.svg";
import soundIcon from "../assets/icon-sound.svg";

const SurveyIndex = () => {
  return (
    <div className="surveyIndex-page">
      <img src={logo} alt="Logo" />
      <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
        가족의 건강을 함께 지키는 스마트 케어 서비스
      </p>
      <br />
      <br />
      <br />

      <p
        className="header-text-1"
        style={{
          color: "var(--gray-color-1)",
          fontSize: 24,
          fontWeight: "700",
        }}
      >
        안녕하세요 <br/>박지형 님
      </p>
      <br />
      <p
        className="header-text-1"
        style={{
          color: "var(--gray-color-1)",
          fontSize: 24,
          fontWeight: "700",
        }}
      >
        01월 19일 아침
        <br/>
        건강 상태 체크를 할게요.
      </p>
      <br />

        <button to="/signup" className="button sound-button">
          <img src={soundIcon} alt="Add Account Icon" style={{marginRight:10}}/>
          <p className="header-text-4" style={{ color: "var(--gray-color-1)" }}>
            음성으로 듣기
          </p>
        </button>

      <br />
      <br />

      <Link to="/survey-type-1-index" className="button gradient-button">
        <p className="header-text-4" style={{ color: "var(--gray-color-4)" }}>
          시작하기
        </p>
      </Link>
    </div>
  );
};

export default SurveyIndex;
