import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-20 md:py-32 bg-gray-50/50 flex-grow">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 text-brand-blue">
          <h2 className="text-[20px] md:text-[25px] font-bold tracking-tight mb-4">맞춤형으로 선택하세요</h2>
          <p className="text-brand-blue/70 font-medium text-[14px] md:text-[15px]">상황에 맞는 나란히 동행 서비스 라인업</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* 실속 동행 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-10 lg:p-14 shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col h-full hover:border-brand-green/30 transition-colors"
          >
            <div className="mb-10">
              <div className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-[12px] md:text-[14px] font-bold rounded-full mb-4">안심리포트 제공</div>
              <h3 className="text-[19px] md:text-[23px] font-bold mb-4">실속 동행</h3>
              <p className="text-brand-blue/60 text-[15px] md:text-[17px] font-medium">"병원 안에서는 전문가와 나란히"</p>
            </div>
            <ul className="space-y-6 mb-10 flex-grow font-medium text-brand-blue/80 text-[14px] md:text-[15px]">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-green w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span><strong className="text-brand-blue font-bold">병원 현장 합류</strong></span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-green w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span>접수, 수납, 각종 검사실 이동 및 진료실 <strong className="text-brand-blue font-bold">전 과정 밀착 동행</strong></span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-green w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span>어려운 의사 소견 및 처방 내용 <strong className="text-brand-blue font-bold">상세 메모</strong></span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-green w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span>진료 후 <strong className="text-brand-blue font-bold">인근 약국 동행</strong> 및 약품 수령·복약 지도 확인</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-green w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span className="text-brand-blue font-bold">진료 내용 요약 및 안심리포트 즉시 발송</span>
              </li>
            </ul>
          </motion.div>

          {/* 프리미엄 동행 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[40px] p-10 lg:p-14 shadow-xl shadow-brand-pink/10 border-2 border-brand-pink/20 flex flex-col h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-pink rounded-bl-full opacity-10"></div>
            
            <div className="mb-10 relative z-10">
              <div className="inline-block px-3 py-1 bg-brand-pink/10 text-brand-pink text-[12px] md:text-[14px] font-bold rounded-full mb-4">안심리포트 제공</div>
              <h3 className="text-[19px] md:text-[23px] font-bold mb-4">프리미엄 동행</h3>
              <p className="text-brand-blue/60 text-[15px] md:text-[17px] font-medium">"자택 문 앞부터 귀가까지 나란히"</p>
            </div>
            <ul className="space-y-6 mb-10 flex-grow font-medium text-brand-blue/80 text-[14px] md:text-[15px] relative z-10">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-pink w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span><strong className="text-brand-blue font-bold">자택 문 앞 출발부터 귀가까지</strong> 원스톱 1:1 밀착 케어</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-pink w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span className="font-bold border-b-2 border-brand-pink/50 pb-0.5 text-brand-blue">고객 차량 대리운전 옵션 제공</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-pink w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span>병원 입출입, 접수, 진료, 입/퇴원 수속 등 <strong className="text-brand-blue font-bold">모든 행정 업무 대행</strong></span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-pink w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span><strong className="text-brand-blue font-bold">약국 전면 동행</strong> 및 처방약 수령 후 안전한 자택 귀가 지원</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-pink w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span className="text-brand-blue font-bold">모든 과정 실시간 안심리포트 및 가족 공유</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* 일상 & 행정 동행 라인업 추가 */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
          {/* 일상 동행 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-10 lg:p-14 shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col h-full hover:border-brand-pink/30 transition-colors"
          >
            <div className="mb-10">
              <div className="inline-block px-3 py-1 bg-brand-pink/10 text-brand-pink text-[12px] md:text-[14px] font-bold rounded-full mb-4">안심리포트 제공</div>
              <h3 className="text-[19px] md:text-[23px] font-bold mb-4">일상 동행</h3>
              <p className="text-brand-blue/60 text-[15px] md:text-[17px] font-medium">"소소한 일상도 안전하고 즐겁게"</p>
            </div>
            <ul className="space-y-6 mb-10 flex-grow font-medium text-brand-blue/80 text-[14px] md:text-[15px]">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-pink w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span>산책, 장보기, 은행 등 <strong className="text-brand-blue font-bold">일상생활 나들이 동행</strong></span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-pink w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span>문화생활, 미용실 방문 등 여가 활동 지원</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-pink w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span>낙상 방지 등 안전한 이동 및 자택 귀가 밀착 케어</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-pink w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span className="text-brand-blue font-bold">일상 활동 및 정서 상태 안심리포트 제공</span>
              </li>
            </ul>
          </motion.div>

          {/* 행정 동행 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[40px] p-10 lg:p-14 shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col h-full hover:border-brand-green/30 transition-colors"
          >
            <div className="mb-10">
              <div className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-[12px] md:text-[14px] font-bold rounded-full mb-4">안심리포트 제공</div>
              <h3 className="text-[19px] md:text-[23px] font-bold mb-4">행정 동행</h3>
              <p className="text-brand-blue/60 text-[15px] md:text-[17px] font-medium">"복잡한 관공서 업무도 든든하게"</p>
            </div>
            <ul className="space-y-6 mb-10 flex-grow font-medium text-brand-blue/80 text-[14px] md:text-[15px]">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-green w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span>행정복지센터, 구청, 세무서 등 <strong className="text-brand-blue font-bold">관공서 방문 동행</strong></span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-green w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span>각종 증명서 발급 및 복잡한 서류 작성 보조</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-green w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span>우체국 등 <strong className="text-brand-blue font-bold">기타 행정/우편 업무</strong> 원스톱 지원</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-green w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span className="text-brand-blue font-bold">업무 처리 결과 및 증빙 서류 안심리포트 포함</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
