import { Link } from 'react-router-dom';
import './Index.css';
import logo from '../assets/icon-logo-dolbomzigi.svg';
import addAccountIcon from '../assets/icon-add-account.svg';
import heartIcon from '../assets/icon-heart.svg';
import '../styles/colors.css';

const Index = () => {
  return (
    <div className="index-page">
      <img src={logo} alt="Logo" />
      <p className="body-text-4" style={{ color: 'var(--gray-color-1)' }}>
        가족의 건강을 함께 지키는 스마트 케어 서비스
      </p>
      
      <Link to="/signup" className="button gradient-button">
        <img src={addAccountIcon} alt="Add Account Icon" />
        <p className="header-text-4" style={{ color: 'var(--gray-color-4)' }}>
          보호자 & 보호환자
          <br />
          등록하기
        </p>
      </Link>
      
      <Link to="/login" className="button simple-button">
        <img src={heartIcon} alt="Heart Icon" />
        <p className="header-text-4" style={{ color: 'var(--brand-color-2)' }}>
          나의 보호 환자
          <br />
          대시보드 확인하기
        </p>
      </Link>
    </div>
  );
};

export default Index; 