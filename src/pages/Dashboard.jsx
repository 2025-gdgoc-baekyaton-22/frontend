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
          이름 : 박지형
        </p>
        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
          나이 : 26세
        </p>
        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
          보호자 : 신현우
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
        <br/>전반적인 신체 상태: MID
        <br/>배변/배뇨: 알 수 없음
        <br/>기분: MID
        <br/>사회적 활동: EXCELLENT
        <br/>약물 복용: VERY_GOOD
        <br/>식사: NO
        <br/>수면: NO
        <br/>인지: BAD
        <br/>병원 방문: YES
        <br/>관찰 사항: 환자는 인지적 어려움을 겪고 있습니다. 환자는 식사를 제대로 하지 않습니다. 환자는 수면에 어려움을 겪습니다.보호자를 위한 조언: 환자의 인지적 능력을 정기적으로 평가하고 필요한 경우 지원을 제공하세요. 환자가 규칙적이고 영양가 있는 식사를 하도록 도와주세요. 환자가 충분한 수면을 취할 수 있도록 지원하세요. 환자가 약물을 제대로 복용하고 있는지 확인하세요. 환자에게 감정적 지원을 제공하고, 필요에 따라 전문적인 도움을 받도록 권유하세요. 환자의 건강 상태에 대해 우려 사항이 있는 경우 의료 전문가와 상담하세요.
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
