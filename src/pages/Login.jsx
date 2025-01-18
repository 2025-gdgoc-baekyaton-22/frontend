import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../assets/icon-logo-dolbomzigi.svg';

const Login = () => {
  return (
    <div className="login-page">
      <img src={logo} alt="Logo" />
      <p className="body-text-4" style={{ color: 'var(--gray-color-1)' }}>
        가족의 건강을 함께 지키는 스마트 케어 서비스
      </p>
      <br/>
      <br/>

      <div className="login-container">
        <p className="header-text-4" style={{ color: 'var(--gray-color-1)', fontWeight: '700'}}>로그인하기</p>
        <p className="body-text-4" style={{ color: 'var(--gray-color-1)' }}>
          대시보드로 로그인하기 위해 ID와 PW를 입력해주세요. ID의 경우, 보호 환자분의 전화번호를 입력해주세요.
        </p>

        <div className="login-form">
          <label className="body-text-4" htmlFor="phone">ID</label>
          <input 
            type="text" 
            id="phone" 
            placeholder="보호 환자분의 전화번호를 입력해주세요." 
            className="input-field" 
            style={{ color: 'var(--gray-color-1)' }} // 텍스트 색상 설정
          />

          <label className="body-text-4" htmlFor="pw">PW</label>
          <input 
            type="password" 
            id="pw" 
            placeholder="비밀번호를 입력해주세요." 
            className="input-field" 
            style={{ color: 'var(--gray-color-1)' }} // 텍스트 색상 설정
          />
        </div>
      </div>
      <br/>
      <Link to="/dashboard" className="button gradient-button">
        <p className="header-text-4" style={{ color: 'var(--gray-color-4)' }}>
          로그인하기
        </p>
      </Link>
    </div>
  );
};

export default Login;