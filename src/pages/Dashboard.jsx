import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import logo from "../assets/icon-logo-dolbomzigi.svg";
import bellIcon from "../assets/icon-bell.svg";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://dollbomzigi.store/api/users/info");

        if (!response.ok) {
          throw new Error("데이터 불러오기 실패");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p style={{ color: "var(--gray-color-1)" }}>로딩 중...</p>;
  }

  if (!data) {
    return (
      <p style={{ color: "var(--gray-color-1)" }}>
        데이터를 불러올 수 없습니다.
      </p>
    );
  }

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
        {data.careTakerName} 보호환자 대시보드
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

        <button className="button gradient-button">
          <img src={bellIcon} alt="Add Account Icon" />
          <p className="header-text-4" style={{ color: "var(--gray-color-4)" }}>
            긴급 119 연락
          </p>
        </button>

        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
          이름 : {data.careTakerName}
        </p>
        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
          나이 : {data.careTakerAge}세
        </p>
        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
          보호자 :{" "}
          {data.careGivers.map((giver) => giver.careGiverName).join(", ")}
        </p>
        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
          최근 설문 응답시간: {data.latestUpdate}
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
          {data.significant || "상태 정보에 대한 내용이 없습니다."}
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
