// src/pages/Home.tsx
import Hero from './Hero'; 
import Brand from './Brand'; 
import Features from './Features'; 
import Services from './Services'; 
import Guide from './Guide'; 

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-white">
      {/* 히어로 메인 화면 */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* 1. 나란히 소개 (Philosophy 대신 Brand) */}
      <section id="brand" className="scroll-mt-24">
        <Brand />
      </section>
      
      {/* 2. 핵심 특징 (추가된 특징 섹션) */}
      <section id="features" className="scroll-mt-24">
        <Features />
      </section>
      
      {/* 3. 서비스 안내 (라인업) */}
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>
      
      {/* 4. 예약 가이드 */}
      <section id="guide" className="scroll-mt-24">
        <Guide />
      </section>
    </main>
  );
}