// pages/Home.tsx
import Hero from './components/Hero';
import Philosophy from './components/Philosophy'; // 1. 나란히 소개
import Targets from './components/Targets';         // 2. 서비스 안내 (대상)
import Services from './components/Services';       // 2. 서비스 안내 (라인업)
import Guide from './components/Guide';             // 3. 예약 가이드
import Report from './components/Report';           // 4. 안심 리포트

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      {/* 히어로 화면 */}
      <Hero />
      
      {/* 1. 나란히 소개 */}
      <section id="philosophy" className="scroll-mt-20">
        <Philosophy />
      </section>
      
      {/* 2. 서비스 안내 */}
      <section id="services" className="scroll-mt-20">
        <Targets />
        <Services />
      </section>
      
      {/* 3. 예약 가이드 */}
      <section id="guide" className="scroll-mt-20">
        <Guide />
      </section>
      
      {/* 4. 안심 리포트 */}
      <section id="report" className="scroll-mt-20">
        <Report />
      </section>
    </main>
  );
}