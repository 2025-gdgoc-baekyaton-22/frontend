import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import logo from "../assets/icon-logo-dolbomzigi.svg";

const Signup = () => {
  const navigate = useNavigate();

  const [careTaker, setCareTaker] = useState({
    name: "",
    birthdate: "",
    phone: "",
    address: "",
    password: "",
    alertFrequency: "true",
  });

  const [careGiver, setCareGiver] = useState([
    { name: "", phone: "", relationship: "" },
  ]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCareTaker((prev) => ({ ...prev, [id]: value }));
  };

  const addCareGiver = () => {
    setCareGiver([...careGiver, { name: "", phone: "", relationship: "" }]);
  };

  const handleCareGiverChange = (index, e) => {
    const { id, value } = e.target;
    const updatedCareGivers = careGiver.map((giver, i) =>
      i === index ? { ...giver, [id]: value } : giver
    );
    setCareGiver(updatedCareGivers);
  };

  const handleSubmit = async () => {
    const requestData = {
      careTakerName: careTaker.name,
      careTakerAge: careTaker.birthdate,
      careTakerPhone: careTaker.phone,
      careTakerAddress: careTaker.address,
      passWord: careTaker.password,
      ThreeOrTwo: true, //careTaker.alertFrequency === "true",
      careGiver: careGiver.map((giver) => ({
        careGiverName: giver.name,
        careGiverPhone: giver.phone,
        careGiverRelationship: giver.relationship,
      })),
    };

    console.log("보내는 데이터:", requestData);

    try {
      const response = await fetch(
        "http://dollbomzigi.store/api/users/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        }
      );

      console.log("요청 전송:", response);

      if (!response.ok) {
        throw new Error("서버 응답 실패!");
      }

      const responseData = await response.json();
      console.log("서버 응답 성공:", responseData);

      navigate("/index");
    } catch (error) {
      console.error("요청 오류:", error);
    }
  };

  return (
    <div className="signup-page">
      <img src={logo} alt="Logo" />
      <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
        가족의 건강을 함께 지키는 스마트 케어 서비스
      </p>
      <br />
      <br />

      <div className="signup-container">
        <p
          className="header-text-4"
          style={{ color: "var(--gray-color-1)", fontWeight: "700" }}
        >
          보호환자 기본 정보 입력
        </p>
        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
          건강데이터 관리가 필요한 보호 환자분의 정보를 작성해주세요.
        </p>

        <div className="signup-form">
          <label className="body-text-4" htmlFor="name">
            이름
          </label>
          <input
            type="text"
            id="name"
            value={careTaker.name}
            onChange={handleChange}
            placeholder="보호 환자분의 이름을 입력해주세요."
            className="input-field"
            style={{ color: "var(--gray-color-1)" }}
          />

          <label className="body-text-4" htmlFor="birthdate">
            생년월일
          </label>
          <input
            type="date"
            id="birthdate"
            value={careTaker.birthdate}
            onChange={handleChange}
            className="input-field"
            style={{ color: "var(--gray-color-1)" }}
          />

          <label className="body-text-4" htmlFor="phone">
            연락처
          </label>
          <input
            type="text"
            id="phone"
            value={careTaker.phone}
            onChange={handleChange}
            placeholder="보호 환자분의 연락처를 입력해주세요."
            className="input-field"
            style={{ color: "var(--gray-color-1)" }}
          />

          <label className="body-text-4" htmlFor="address">
            주소
          </label>
          <input
            type="text"
            id="address"
            value={careTaker.address}
            onChange={handleChange}
            placeholder="보호 환자분의 주소를 입력해주세요."
            className="input-field"
            style={{ color: "var(--gray-color-1)", marginBottom: 0 }}
          />
        </div>
      </div>
      <br />

      <div className="signup-container">
        <p
          className="header-text-4"
          style={{ color: "var(--gray-color-1)", fontWeight: "700" }}
        >
          보호환자 관리 옵션
        </p>
        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
          보호 환자분에게 건강 데이터 알림 주기를 설정해주세요.
        </p>
        <br />
        <select
          id="alertFrequency"
          value={careTaker.alertFrequency}
          onChange={handleChange}
          className="input-field"
          style={{ color: "var(--gray-color-1)", marginBottom: 0 }}
        >
          <option value="true">아침, 점심, 저녁</option>
          <option value="false">아침, 저녁</option>
        </select>
      </div>

      <div className="signup-container">
        <p
          className="header-text-4"
          style={{ color: "var(--gray-color-1)", fontWeight: "700" }}
        >
          보호자 기본 정보 입력
        </p>
        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
          보호환자가 위급시에 연락을 받을 수 있는 보호자분의 연락처를
          알려주세요.
        </p>

        {careGiver.map((giver, index) => (
          <div key={index} className="signup-form">
            <label className="body-text-4" htmlFor="name">
              이름
            </label>
            <input
              type="text"
              id="name"
              value={giver.name}
              onChange={(e) => handleCareGiverChange(index, e)}
              placeholder="보호자분의 이름을 입력해주세요."
              className="input-field"
              style={{ color: "var(--gray-color-1)" }}
            />

            <label className="body-text-4" htmlFor="phone">
              연락처
            </label>
            <input
              type="text"
              id="phone"
              value={giver.phone}
              onChange={(e) => handleCareGiverChange(index, e)}
              placeholder="보호자분의 연락처를 입력해주세요."
              className="input-field"
              style={{ color: "var(--gray-color-1)" }}
            />

            <label className="body-text-4" htmlFor="relationship">
              보호환자와의 관계
            </label>
            <input
              type="text"
              id="relationship"
              value={giver.relationship}
              onChange={(e) => handleCareGiverChange(index, e)}
              placeholder="관계를 입력해주세요."
              className="input-field"
              style={{ color: "var(--gray-color-1)", marginBottom: 0 }}
            />
          </div>
        ))}
      </div>

      <button onClick={handleSubmit} className="button gradient-button">
        <p className="header-text-4" style={{ color: "var(--gray-color-4)" }}>
          등록하기
        </p>
      </button>
    </div>
  );
};

export default Signup;
