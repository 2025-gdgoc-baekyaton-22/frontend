import { useState } from "react";
import "./Ai.css";
import logo from "../assets/icon-logo-dolbomzigi.svg";
import playIcon from "../assets/icon-play.svg";

const Ai = () => {
  const [audioSrc, setAudioSrc] = useState(null);
  const textToSynthesize = "user님의 오늘 건강 상태는 전반적으로 양호합니다.";

  const handlePlayAudio = async () => {
    try {
      const response = await fetch(
        `http://dollbomzigi.store/api/tts/synthesize?text=${encodeURIComponent(
          textToSynthesize
        )}`
      );

      if (!response.ok) {
        throw new Error("음성 변환 API 요청 실패");
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioSrc(audioUrl);

      const audio = new Audio(audioUrl);
      audio.play();
    } catch (error) {
      console.error("오디오 재생 실패:", error);
    }
  };

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

        {/* 음성 브리핑 듣기 버튼 */}
        <button className="button gradient-button" onClick={handlePlayAudio}>
          <img
            src={playIcon}
            alt="Add Account Icon"
            style={{ marginRight: 10 }}
          />
          <p className="header-text-4" style={{ color: "var(--gray-color-4)" }}>
            음성 브리핑 듣기
          </p>
        </button>

        <p className="body-text-4" style={{ color: "var(--gray-color-1)" }}>
          {textToSynthesize}
        </p>

        {/* 오디오 플레이어 (보이지 않게 설정 가능) */}
        {audioSrc && (
          <audio src={audioSrc} controls style={{ display: "none" }} />
        )}
      </div>
    </div>
  );
};

export default Ai;
