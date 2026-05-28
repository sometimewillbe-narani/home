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
      
      {/* 1. 나란히 소개 (Brand) */}
      <section id="brand" className="scroll-mt-24">
        <Brand />
      </section>
      
      {/* 2. 서비스 안내 (Services) */}
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>
      
      {/* 3. 예약 가이드 (Guide) */}
      <section id="guide" className="scroll-mt-24">
        <Guide />
      </section>
      
      {/* 4. 안심리포트 및 핵심 특징 (Features) */}
      <section id="features" className="scroll-mt-24">
        <Features />
      </section>
    </main>
  );
}