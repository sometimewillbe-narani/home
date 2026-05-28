import { motion } from 'motion/react';
import { 
  HeartPulse, 
  ShoppingBag, 
  Landmark, 
  ArrowRight,
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
  // 1. 상단 메인 서비스 라인업 데이터
  const serviceList = [
    {
      icon: <HeartPulse className="w-8 h-8 text-brand-pink" />,
      title: "병원 전문 동행 서비스",
      description: "진료 접수부터 수납, 약국 동행, 그리고 교수님 진료 브리핑 기록까지 보호자의 빈자리를 완벽하게 채웁니다.",
      tag: "인기",
      bgColor: "bg-brand-pink/5 border-brand-pink/10",
      tagColor: "bg-brand-pink/10 text-brand-pink"
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-brand-green" />,
      title: "일상 맞춤 동행 서비스",
      description: "간단한 산책, 장보기, 문화생활, 안과 나들이 등 혼자 가기 망설여졌던 모든 일상에 안전한 보폭을 맞춥니다.",
      tag: "맞춤",
      bgColor: "bg-brand-green/5 border-brand-green/10",
      tagColor: "bg-brand-green/10 text-brand-green"
    },
    {
      icon: <Landmark className="w-8 h-8 text-brand-blue" />,
      title: "원무 행정 동행 서비스",
      description: "입·퇴원 절차를 비롯하여 주민센터 업무, 은행, 복지 서비스 신청 등 복잡한 서류 처리와 절차를 안전하게 해결합니다.",
      tag: "안심",
      bgColor: "bg-brand-blue/5 border-brand-blue/10",
      tagColor: "bg-brand-blue/10 text-brand-blue"
    }
  ];

  // 2. 하단 "이런 분께 추천해요" 격자형 데이터
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* ================= 섹션 1: 메인 서비스 라인업 ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue font-extrabold text-[14px] md:text-[16px] tracking-wider uppercase bg-brand-blue/10 px-4 py-1.5 rounded-full"
          >
            Our Services
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 mb-3 tracking-tight break-keep">
            나란히 맞춤형 동행 서비스
          </h2>
          <p className="text-gray-500 font-medium text-sm md:text-base">
            원하시는 일정과 목적에 맞춰 가장 안전한 발걸음을 연결합니다.
          </p>
        </div>

        {/* 3열 카드 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-28">
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`p-6 md:p-8 rounded-[2.5rem] bg-white border ${service.bgColor} shadow-sm flex flex-col justify-between overflow-hidden group`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-white shadow-md border border-gray-100 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${service.tagColor}`}>
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed break-keep">
                  {service.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-gray-400 group-hover:text-brand-blue transition-colors">
                <span className="text-xs font-bold tracking-wider uppercase">서비스 신청하기</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>


        {/* ================= 섹션 2: 이런 분께 추천해요 ================= */}
        <hr className="border-gray-200/60 my-16" />

        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-pink font-extrabold text-[14px] md:text-[16px] tracking-wider uppercase bg-brand-pink/10 px-4 py-1.5 rounded-full"
          >
            Naranhi Care
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mt-4 mb-3 tracking-tight break-keep">
            이런 상황에, 나란히가 필요합니다
          </h2>
          <p className="text-gray-500 font-medium text-sm md:text-base">
            타사의 보편적인 기준을 넘어, 일상 속 세밀한 안전 공백까지 가족의 마음으로 채웁니다.
          </p>
        </div>

        {/* 픽토그램 스타일 3열 그리드 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (index % 3) * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-100/80 p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all flex flex-col gap-4 text-left"
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