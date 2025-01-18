import { Link } from "react-router-dom";
import "./surveyType11.css";
import soundIcon from "../assets/icon-sound.svg";
import happyIcon from "../assets/icon-happy.svg";
import borringIcon from "../assets/icon-boring.svg";
import sadIcon from "../assets/icon-sad.svg";

const surveyType11 = () => {
  return (
    <div className="surveyIndex-page">
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
        수면 중에 자주 깨시나요?
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
      
      <Link to="/survey-type-1-2" className="button blue-button">
        <img src={happyIcon} alt="Add Account Icon" style={{margin:10}}/>
        <p className="header-text-4" style={{ color: "var(--gray-color-4)" }}>
          네
        </p>
      </Link>
      <Link to="/survey-type-1-2" className="button yello-button">
        <img src={borringIcon} alt="Add Account Icon" style={{margin:10}}/>
        <p className="header-text-4" style={{ color: "var(--gray-color-4)" }}>
          보통
        </p>
      </Link>
      <Link to="/survey-type-1-2" className="button red-button">
        <img src={sadIcon} alt="Add Account Icon" style={{margin:10}}/>
        <p className="header-text-4" style={{ color: "var(--gray-color-4)" }}>
          아니요
        </p>
      </Link>
    </div>
  );
};

export default surveyType11;
