import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../assets/icon-logo-dolbomzigi.svg";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "http://dollbomzigi.store/api/users/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            careTakerPhone: phone,
            passWord: password,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      console.log(response);

      if (response.ok && data.isSuccess) {
        navigate("/dashboard");
      } else {
        alert("로그인에 ㅅ패했습니다. 다시 시도해주세요.");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-page">
      <img src={logo} alt="Logo" />
      <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
        가족의 건강을 함께 지키는 스마트 케어 서비스
      </p>
      <br />
      <br />

      <div className="login-container">
        <p
          className="header-text-4"
          style={{ color: "var(--gray-color-1)", fontWeight: "700" }}
        >
          로그인하기
        </p>
        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
          대시보드로 로그인하기 위해 ID와 PW를 입력해주세요. ID의 경우, 보호
          환자분의 전화번호를 입력해주세요.
        </p>

        <div className="login-form">
          <label className="body-text-4" htmlFor="phone">
            ID
          </label>
          <input
            type="text"
            id="phone"
            placeholder="보호 환자분의 전화번호를 입력해주세요."
            className="input-field"
            style={{ color: "var(--gray-color-1)" }} // 텍스트 색상 설정
            onChange={(e) => setPhone(e.target.value)}
          />

          <label className="body-text-4" htmlFor="pw">
            PW
          </label>
          <input
            type="password"
            id="pw"
            placeholder="비밀번호를 입력해주세요."
            className="input-field"
            style={{ color: "var(--gray-color-1)", marginBottom: 0 }} // 텍스트 색상 설정
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <br />
      <button onClick={handleLogin} className="button gradient-button">
        <p className="header-text-4" style={{ color: "var(--gray-color-4)" }}>
          로그인하기
        </p>
      </button>
    </div>
  );
};

export default Login;
