import { motion } from 'motion/react';
import { 
  CheckCircle2,
  Activity,
  HeartHandshake,
  Syringe,
  Eye,
  Stethoscope,
  UserCheck,
  CalendarCheck,
  Home as HomeIcon,
  Baby
} from 'lucide-react';

export default function Services() {
  // 하단 "이런 분께 추천해요" 격자형 데이터
  const recommendationItems = [
    {
      icon: <UserCheck className="w-6 h-6 text-brand-blue" />,
      title: "시니어 부모님과 직장인 가족",
      desc: "일과 일상으로 부모님의 정기 검진이나 병원 방문을 매번 직접 동행하기 어려운 자녀분들"
    },
    {
      icon: <Activity className="w-6 h-6 text-brand-blue" />,
      title: "항암 · 방사선 치료 환자",
      desc: "체력 소모가 커서 통원 길에 안전한 밀착 동행이 필요하신 분"
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-brand-blue" />,
      title: "정기 혈액 투석 환자",
      desc: "주기적인 방문이 필요하나 매번 보호자가 동행하기 어려운 분"
    },
    {
      icon: <Syringe className="w-6 h-6 text-brand-pink" />,
      title: "수면 내시경 · 마취 치료 환자",
      desc: "검사 후 보호자 동반 귀가가 필수적이거나 의식이 혼미할 수 있는 분"
    },
    {
      icon: <HomeIcon className="w-6 h-6 text-brand-pink" />,
      title: "입원 · 퇴원 절차가 필요한 분",
      desc: "원무 행정 처리, 처방약 수령, 무거운 짐 이동이 부담되시는 분"
    },
    {
      icon: <Eye className="w-6 h-6 text-brand-pink" />,
      title: "안과 진료 및 시술 대상자",
      desc: "산동 검사, 백내장 시술 등으로 일시적으로 시야 확보가 어려우신 분"
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-brand-green" />,
      title: "종합 건강검진 대상자",
      desc: "넓은 대형 병원 안에서 헤매지 않고 신속하게 검사를 마치고 싶으신 분"
    },
    {
      icon: <Baby className="w-6 h-6 text-brand-green" />,
      title: "임산부 및 교통 약자",
      desc: "정기 검진이나 외출 시 혼자 이동하기 불안해 안전한 보살핌이 필요할 때"
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-brand-green" />,
      title: "나 홀로 병원행이 버거운 1인 가구",
      desc: "갑작스러운 부상이나 질병으로 신뢰할 수 있는 동행 보호자가 필요한 분"
    }
  ];

  return (
    <div className="w-full py-20 md:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ================= 섹션 1: 메인 서비스 라인업 (기존 상세 박스 유지 + 컬러 테두리 강화) ================= */}
        <div className="text-center mb-20 text-brand-blue">
          <h2 className="text-[24px] md:text-[32px] font-black tracking-tight mb-4 break-keep">
            맞춤형으로 선택하세요
          </h2>
          <p className="text-brand-blue/70 font-semibold text-[15px] md:text-[17px]">
            상황에 맞는 나란히 동행 서비스 라인업
          </p>
        </div>
        
        {/* 상단 2열 그리드: 실속 & 프리미엄 */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {/* 실속 동행 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-10 lg:p-14 shadow-lg shadow-gray-200/40 border-2 border-brand-green/30 flex flex-col h-full hover:border-brand-green/60 transition-colors"
          >
            <div className="mb-10">
              <div className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-[12px] md:text-[14px] font-bold rounded-full mb-4">안심리포트 제공</div>
              <h3 className="text-[20px] md:text-[24px] font-black text-gray-900 mb-4">실속 동행</h3>
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
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[40px] p-10 lg:p-14 shadow-xl shadow-brand-pink/5 border-2 border-brand-pink/30 flex flex-col h-full relative overflow-hidden hover:border-brand-pink/60 transition-colors"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-pink rounded-bl-full opacity-5"></div>
            
            <div className="mb-10 relative z-10">
              <div className="inline-block px-3 py-1 bg-brand-pink/10 text-brand-pink text-[12px] md:text-[14px] font-bold rounded-full mb-4">안심리포트 제공</div>
              <h3 className="text-[20px] md:text-[24px] font-black text-gray-900 mb-4">프리미엄 동행</h3>
              <p className="text-brand-blue/60 text-[15px] md:text-[17px] font-medium">"자택 문 앞부터 귀가까지 나란히"</p>
            </div>
            
            <ul className="space-y-6 mb-10 flex-grow font-medium text-brand-blue/80 text-[14px] md:text-[15px] relative z-10">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-pink w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span><strong className="text-brand-blue font-bold">자택 문 앞 출발부터 귀가까지</strong> 원스톱 1:1 밀착 케어</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-pink w-6 h-6 flex-shrink-0 mt-0.5" /> 
                <span className="font-bold border-b-2 border-brand-pink/30 pb-0.5 text-brand-blue">고객 차량 대리운전 옵션 제공</span>
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

        {/* 하단 2열 그리드: 일상 & 행정 */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* 일상 동행 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-10 lg:p-14 shadow-lg shadow-gray-200/40 border-2 border-brand-pink/30 flex flex-col h-full hover:border-brand-pink/60 transition-colors"
          >
            <div className="mb-10">
              <div className="inline-block px-3 py-1 bg-brand-pink/10 text-brand-pink text-[12px] md:text-[14px] font-bold rounded-full mb-4">안심리포트 제공</div>
              <h3 className="text-[20px] md:text-[24px] font-black text-gray-900 mb-4">일상 동행</h3>
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
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[40px] p-10 lg:p-14 shadow-lg shadow-gray-200/40 border-2 border-brand-green/30 flex flex-col h-full hover:border-brand-green/60 transition-colors"
          >
            <div className="mb-10">
              <div className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-[12px] md:text-[14px] font-bold rounded-full mb-4">안심리포트 제공</div>
              <h3 className="text-[20px] md:text-[24px] font-black text-gray-900 mb-4">행정 동행</h3>
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


        {/* ================= 섹션 2: 이런 분께 추천해요 (타사 벤치마킹 연계 구조) ================= */}
        <hr className="border-gray-200/60 my-24 max-w-5xl mx-auto" />

        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-pink font-extrabold text-[14px] md:text-[16px] tracking-wider uppercase bg-brand-pink/10 px-4 py-1.5 rounded-full"
          >
            Naranhi Care
          </motion.span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-blue mt-4 mb-3 tracking-tight break-keep">
            이런 상황에, 나란히가 필요합니다
          </h2>
          <p className="text-gray-500 font-medium text-sm md:text-base break-keep">
            보편적인 기준을 넘어, 일상 속 세밀한 안전 공백까지 가족의 마음으로 채웁니다.
          </p>
        </div>

        {/* 픽토그램 스타일 3열 그리드 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {recommendationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (index % 3) * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-100 p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all flex flex-col gap-4 text-left"
            >
              {/* 아이콘 서클 */}
              <div className="w-12 h-12 rounded-2xl bg-gray-50/80 flex items-center justify-center border border-gray-100 flex-shrink-0">
                {item.icon}
              </div>
              
              {/* 텍스트 타이틀 & 디테일 */}
              <div>
                <h3 className="font-extrabold text-gray-900 text-[17px] md:text-[18px] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[13px] md:text-[14px] font-medium leading-relaxed break-keep">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}