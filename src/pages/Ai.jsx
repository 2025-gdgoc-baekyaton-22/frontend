import { useState } from "react";
import "./Ai.css";
import logo from "../assets/icon-logo-dolbomzigi.svg";
import playIcon from "../assets/icon-play.svg";

const Ai = () => {
  const [audioSrc, setAudioSrc] = useState(null);
  const [selectedText, setSelectedText] = useState(
    "오늘은 신체적 건강이 굉장히 좋으시네요! 약물 복용도 원활하고 식사도 잘 드셨습니다. 인지 능력도 매우 좋아지셨군요.\n\n기분이 약간 떨어지신 것 같지만, 사회적 활동은 향후 개선할 수 있을 것입니다. 잠자기도 좀 더 개선하실 수 있을 것 같습니다.\n\n어려운 시기도 있지만, 모든 것이 개선될 수 있다는 것을 기억하세요. 건강 상태는 시간이 지남에 따라 변할 수 있으며, 현재의 문제에도 반드시 해결책이 있습니다.\n\n건강에 투자하면 삶의 질이 향상될 수 있습니다. 규칙적인 운동, 건강한 식단, 충분한 수면을 취하는 등 자신을 돌보는 데 중점을 두세요.\n\n절대 혼자가 아니라는 것을 알아주세요. 항상 여러분을 걱정하고 도와주고자 하는 사람들이 있습니다. 필요한 경우 도움을 요청하는 것을 주저하지 마세요.\n\n오늘은 최선을 다해보세요. 그리고 미래에 대해 희망을 갖고 계세요. 함께 이 과정을 잘 극복해 나가실 거라고 믿습니다."
  );

  const textOptions = [
    "친애하는 사용자님,\n\n오늘 건강 상태를 살펴본 결과, 몇 가지 우려 사항을 확인했습니다.\n\n* 기분이 좋지 않은 것처럼 보입니다. \n* 약을 제대로 복용하지 못하고 있는 것 같습니다.\n* 식사를 하지 않은 것 같습니다.\n\n이러한 문제는 건강에 상당한 영향을 미칠 수 있습니다. 기분 저하, 약물 불복용, 영양 결핍은 심각한 건강 결과로 이어질 수 있는 여러 건강 상태로 이어질 수 있습니다.\n\n꼭 의료 전문가에게 연락하여 이러한 문제를 해결하는 방법을 논의하세요. 필요한 경우 지원을 받을 수 있습니다. \n\n인생은 때때로 어려울 수 있지만, 당신은 혼자가 아닙니다. 언제나 당신을 걱정하고 도와주고 싶어하는 사람들이 있습니다. 지금 당장 상황이 어렵더라도 더 나은 나날이 올 것이라는 것을 기억하세요.\n\n긍정적인 마음가짐을 갖고, 도움을 요청하는 것을 부끄러워하지 마세요. 당신은 이 어려움을 극복할 수 있습니다.",
  ];

  // 음성 브리핑 API 호출 및 재생 함수
  const handlePlayAudio = async () => {
    try {
      const randomText =
        textOptions[Math.floor(Math.random() * textOptions.length)];
      setSelectedText(randomText); // 상태 업데이트

      const response = await fetch(
        "http://dollbomzigi.store/api/tts/synthesize?text=" + randomText,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
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
          {selectedText}
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
