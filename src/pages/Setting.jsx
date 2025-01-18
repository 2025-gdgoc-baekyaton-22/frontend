import { Link } from "react-router-dom";
import "./Setting.css";
import logo from "../assets/icon-logo-dolbomzigi.svg";

const Setting = () => {
  return (
    <div className="setting-page">
      <img src={logo} alt="Logo" />
      <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
        가족의 건강을 함께 지키는 스마트 케어 서비스
      </p>
      <br />
      <br />

      <div className="setting-container">
        <p className="header-text-4" style={{ color: "var(--gray-color-1)", fontWeight: "700" }}>
          보호환자 기본 정보 입력
        </p>
        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
          건강데이터 관리가 필요한 보호 환자분의 정보를 작성해주세요.
        </p>

        <div className="setting-form">
          <label className="body-text-4" htmlFor="caree-name">이름</label>
          <input type="text" id="caree-name" placeholder="보호 환자분의 이름을 입력해주세요." className="input-field" style={{ color: "var(--gray-color-1)" }} />


          <label className="body-text-4" htmlFor="caree-birthdate">생년월일</label>
          <input type="date" id="caree-birthdate" className="input-field" style={{ color: "var(--gray-color-1)" }} // 텍스트 색상 설정
          />

          <label className="body-text-4" htmlFor="caree-phone">연락처</label>
          <input type="text" id="caree-phone" placeholder="보호 환자분의 연락처를 입력해주세요." className="input-field" style={{ color: "var(--gray-color-1)" }}/>

          <label className="body-text-4" htmlFor="caree-address">주소</label>
          <input type="text" id="caree-address" placeholder="보호 환자분의 주소를 입력해주세요." className="input-field" style={{ color: "var(--gray-color-1)" , marginBottom:0}}/>
        </div>
      </div>
      <br />

      <div className="setting-container">
        <p className="header-text-4" style={{ color: "var(--gray-color-1)", fontWeight: "700" }}>
          보호환자 관리 옵션
        </p>
        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
          보호 환자분에게 건강 데이터 알림 주기를 설정해주세요. (아침, 점심, 저녁 / 아침, 저녁)
        </p>
        <br/>
        <label className="body-text-4" htmlFor="alert-frequency" style={{ color: "var(--gray-color-1)" }}></label>
        <select id="alert-frequency" className="input-field" style={{ color: "var(--gray-color-1)", marginBottom:0 }}>
          <option value="true">아침, 점심, 저녁</option>
          <option value="false">아침, 저녁</option>
        </select>
      </div>

      <div className="setting-container">
        <p className="header-text-4" style={{ color: "var(--gray-color-1)", fontWeight: "700" }}>
            보호자 기본 정보 입력
        </p>
        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
            보호환자가 위급시에 연락을 받을 수 있는 보호자분의 연락처를 알려주세요.
        </p>

        <div className="setting-form">
          <label className="body-text-4" htmlFor="caregiver-name">이름</label>
          <input type="text" id="caregiver-name" placeholder="보호자분의 이름을 입력해주세요." className="input-field" style={{ color: "var(--gray-color-1)" }} />

          <label className="body-text-4" htmlFor="caregiver-phone">연락처</label>
          <input type="text" id="caregiver-phone" placeholder="보호자분의 연락처를 입력해주세요." className="input-field" style={{ color: "var(--gray-color-1)" }}/>

          <label className="body-text-4" htmlFor="caregiver-address">보호환자와의 관계</label>
          <input type="text" id="caregiver-address" placeholder="보호자분과 보호환자와의 관계를 입력해주세요." className="input-field" style={{ color: "var(--gray-color-1)" , marginBottom:0}}/>
        </div>
      </div>
      <br />

      <div className="setting-container">
        <p className="header-text-4" style={{ color: "var(--gray-color-1)", fontWeight: "700" }}>
            비밀번호
        </p>
        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
            보호자 분들이 로그인할 때 사용될 네자리 비밀번호를 설정해주세요.
        </p>

        <div className="setting-form">
          <label className="body-text-4" htmlFor="pw"></label>
          <input type="password" id="pw" placeholder="4개 자리의 숫자를 입력해주세요." className="input-field" style={{ color: "var(--gray-color-1)" }} />
        </div>
      </div>
      <br />

      <Link to="/index" className="button gradient-button">
        <p className="header-text-4" style={{ color: "var(--gray-color-4)" }}>
          수정하기
        </p>
      </Link>
    </div>
  );
};

export default Setting;
