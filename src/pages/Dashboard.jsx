import { Link } from "react-router-dom";
import "./Dashboard.css";
import logo from "../assets/icon-logo-dolbomzigi.svg";
import bellIcon from "../assets/icon-bell.svg";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <img src={logo} alt="Logo" />
      <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
        보호환자 실시간 건강 모니터링
      </p>
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
        user 보호환자 대시보드
      </p>
      <br />

      <div className="dashboard-container">
        <p
          className="header-text-4"
          style={{
            color: "var(--gray-color-1)",
            fontSize: 24,
            fontWeight: "700",
          }}
        >
          환자 기본 정보
        </p>

        <button to="/signup" className="button gradient-button">
          <img src={bellIcon} alt="Add Account Icon" />
          <p className="header-text-4" style={{ color: "var(--gray-color-4)" }}>
            긴급 119 연락
          </p>
        </button>

        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
          이름 : 김영희
        </p>
        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
          나이 : 78세
        </p>
        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
          보호자 : 김철수, 김방수, 김복수
        </p>
        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
          최근 설문 응답시간: 2025년 01월 20일 14:30
        </p>
      </div>

      <div className="dashboard-container">
        <p
          className="header-text-4"
          style={{
            color: "var(--gray-color-1)",
            fontSize: 24,
            fontWeight: "700",
          }}
        >
          일일 건강 리포트
        </p>
        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
          상태 정보에 대한 내용을 입력하세요.
        </p>
      </div>

      <div className="dashboard-container">
        <p
          className="header-text-4"
          style={{
            color: "var(--gray-color-1)",
            fontSize: 24,
            fontWeight: "700",
          }}
        >
          정보 수정
        </p>

        <Link to="/setting" className="inner-button simple-button">
          <p
            className="header-text-4"
            style={{ color: "var(--brand-color-2)" }}
          >
            정보 수정하러가기
          </p>
        </Link>
      </div>
      <br />
    </div>
  );
};

export default Dashboard;
