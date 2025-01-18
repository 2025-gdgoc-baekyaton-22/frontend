import "./Ai.css";
import logo from "../assets/icon-logo-dolbomzigi.svg";
import playIcon from "../assets/icon-play.svg";

const Ai = () => {
  return (
    <div className="ai-page">
      <img src={logo} alt="Logo" />
      <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
      오늘의 건강 브리핑
      </p>
      <br />
      <br />

      <div className="ai-container">
        <p
          className="header-text-4"
          style={{
            color: "var(--gray-color-1)",
            fontSize: 24,
            fontWeight: "700",
          }}
        >
          오늘의 건강 브리핑
        </p>

        <button to="/signup" className="button gradient-button">
          <img src={playIcon} alt="Add Account Icon" style={{marginRight:10}}/>
          <p className="header-text-4" style={{ color: "var(--gray-color-4)" }}>
            음성 브리핑 듣기
          </p>
        </button>

        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
            user님의 오늘 건강 상태는 전반적으로 양호합니다.
        </p>
      </div>

      

      
      <br />
    </div>
  );
};

export default Ai;
