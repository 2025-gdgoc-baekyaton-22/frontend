import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // 모든 네트워크 인터페이스에서 접근 가능
    port: 5173,        // 서버 포트
    hmr: {
      protocol: 'http', // HTTP 프로토콜로 설정
      host: 'dollbomzigi.store',  // 실제 도메인 또는 컨테이너의 IP 주소로 변경
      port: 5173,        // HMR 포트 설정
    },
  },
})
