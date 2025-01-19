import { Link } from "react-router-dom";
import "./surveyType1Index.css";
import logo from "../assets/icon-logo-dolbomzigi.svg";
import soundIcon from "../assets/icon-sound.svg";

const SurveyType1Index = () => {
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
        다음의 질문에 대해<br />
네 / 보통 / 아니오 중 <br />
한가지 답변을 <br />
선택해주세요.<br />

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

      <Link to="/survey-type-1-1" className="button gradient-button">
        <p className="header-text-4" style={{ color: "var(--gray-color-4)" }}>
          시작하기
        </p>
      </Link>
    </div>
  );
};

export default SurveyType1Index;
