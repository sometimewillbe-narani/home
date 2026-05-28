import { motion } from 'motion/react';
import { 
  Star, 
  Award, 
  ShieldCheck, 
  Accessibility, 
  Activity, 
  HeartHandshake, 
  Syringe, 
  Home as HomeIcon, 
  Eye, 
  Stethoscope, 
  UserCheck, 
  CalendarCheck 
} from 'lucide-react';

// ========================================================
// [섹션 3] 이런 분께 추천해요 카드 컴포넌트
// ========================================================
function RecommendationSection() {
  const items = [
    {
      icon: <Accessibility className="w-6 h-6 text-brand-blue" />,
      title: "거동이 불편하신 어르신",
      desc: "휠체어 이동, 대중교통 이용 및 병원 내 이동이 혼자서는 힘드신 분"
    },
    {
      icon: <Activity className="w-6 h-6 text-brand-blue" />,
      title: "항암 · 방사선 치료 환자",
      desc: "체력 소모가 커서 병원 오고 가는 길에 안전한 밀착 동행이 필요하신 분"
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-brand-blue" />,
      title: "정기 혈액 투석 환자",
      desc: "주기적인 병원 방문이 필요하지만, 매번 보호자가 동행하기 어려운 분"
    },
    {
      icon: <Syringe className="w-6 h-6 text-brand-pink" />,
      title: "수면 내시경 · 마취 치료",
      desc: "검사 후 보호자 동반 귀가가 필수적이거나 의식이 혼미할 수 있는 분"
    },
    {
      icon: <HomeIcon className="w-6 h-6 text-brand-pink" />,
      title: "입원 · 퇴원 절차가 필요한 분",
      desc: "각종 원무 행정 처리, 약 수령, 짐 이동까지 도움이 필요하신 분"
    },
    {
      icon: <Eye className="w-6 h-6 text-brand-pink" />,
      title: "안과 진료 및 시술 환자",
      desc: "산동 검사, 백내장 시술 등으로 일시적으로 시야 확보가 어려우신 분"
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-brand-green" />,
      title: "종합 건강검진 대상자",
      desc: "넓은 병원 안에서 검사 항목별 대기와 이동을 헤매지 않고 마치고 싶으신 분"
    },
    {
      icon: <UserCheck className="w-6 h-6 text-brand-green" />,
      title: "1인 가구 및 직장인 가족",
      desc: "일 때문에 부모님 병원에 동행하지 못해 실시간 안심 리포트가 필요하신 분"
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-brand-green" />,
      title: "정기 검진 및 일반 진료",
      desc: "교수님 진료 브리핑을 정확히 기록해 보호자에게 전달받고 싶으신 분"
    }
  ];

  return (
    <div className="w-full px-6 max-w-7xl mx-auto py-20 md:py-28">
      <div className="text-center mb-12 md:mb-16">
        <span className="text-brand-pink font-extrabold text-[14px] md:text-[16px] tracking-wider uppercase bg-brand-pink/10 px-4 py-1.5 rounded-full">
          Naranhi Care
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mt-4 mb-3 leading-tight">
          이런 상황에, 나란히가 함께 걸어갑니다
        </h2>
        <p className="text-gray-500 font-medium text-sm md:text-base">
          보호자의 빈자리가 느껴지지 않도록 가족의 마음으로 동행합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white border border-gray-100 p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all flex flex-col gap-4 text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100/50">
              {item.icon}
            </div>
            <div>
              <h3 className="font-extrabold text-brand-blue text-[18px] md:text-[19px] mb-1.5">
                {item.title}
              </h3>
              <p className="text-gray-500 text-[13px] md:text-[14px] font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ========================================================
// 메인 원페이지 홈 컴포넌트
// ========================================================
export default function Home() {
  return (
    <div className="w-full flex flex-col overflow-x-hidden bg-white">
      
      {/* --------------------------------------------------------
          [섹션 1] 메인 히어로 영역 (희주님의 기존 오리지널 코드 수용)
         -------------------------------------------------------- */}
      <section id="hero" className="relative w-full min-h-[100vh] flex items-center overflow-hidden bg-white pt-24 lg:pt-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-white/20 to-brand-blue/15"></div>
          <div className="absolute top-[10%] left-[15%] w-[85%] h-[85%] bg-[radial-gradient(circle,rgba(9,23,142,0.18)_0%,transparent_60%)] animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[75%] h-[75%] bg-[radial-gradient(circle,rgba(22,81,58,0.15)_0%,transparent_60%)]"></div>
          <div className="absolute top-[15%] right-[-20%] w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(255,133,192,0.25)_0%,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-[0.06] mix-blend-multiply"></div>
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-32 lg:gap-56 items-center z-10 py-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start justify-center text-left"
          >
            <div className="space-y-4 md:space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-2 sm:mb-4"
              >
                <span className="bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-lg font-bold text-sm sm:text-base tracking-tight uppercase border border-brand-blue/10">
                  가족의 마음으로
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-brand-pink via-brand-pink/50 to-transparent"></div>
              </motion.div>
              
              <h1 className="text-[28px] md:text-[45px] font-extrabold leading-[1.2] tracking-tight drop-shadow-sm break-keep pb-8">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-brand-blue inline-block mr-4"
                >
                  당신의 보폭에
                </motion.span>
                <div className="inline-flex items-center">
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-brand-green relative inline-block mr-4"
                  >
                    나란히
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-pink/50 -z-10 rounded-full"></span>
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-brand-blue"
                  >
                    맞춥니다!
                  </motion.span>
                </div>
              </h1>
              
              <div className="pt-2 w-full flex flex-col items-start text-left">
                <p className="text-[16px] md:text-[19px] text-gray-600 font-medium leading-relaxed break-keep py-1">
                  부산, 경남 지역 전문 <span className="text-brand-blue font-black underline decoration-brand-pink/30 underline-offset-4">병원, 일상, 행정 동행 서비스</span>
                </p>

                <div className="mt-10 flex flex-col space-y-4 items-start w-full">
                  <div className="flex flex-row items-center gap-3 sm:gap-4 flex-nowrap">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="bg-white/95 backdrop-blur-xl px-4 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-lg border border-brand-pink/20 flex items-center space-x-3 sm:space-x-4 flex-shrink-0"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-pink/10 flex flex-shrink-0 items-center justify-center shadow-inner">
                        <Star className="w-5 h-5 sm:w-6 sm:h-6 text-brand-pink fill-brand-pink/20" />
                      </div>
                      <div className="text-left whitespace-nowrap">
                        <p className="text-[9px] sm:text-[10px] text-brand-pink font-extrabold mb-0.5 tracking-widest uppercase leading-none">고객 만족도</p>
                        <p className="text-[14px] sm:text-[17px] font-black text-brand-blue leading-none mt-1">4.9 / 5.0</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="bg-white/95 backdrop-blur-xl px-4 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-lg border border-brand-green/20 flex items-center space-x-3 sm:space-x-4 flex-shrink-0"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-green/10 flex flex-shrink-0 items-center justify-center shadow-inner">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-brand-green" />
                      </div>
                      <div className="text-left whitespace-nowrap">
                        <p className="text-[9px] sm:text-[10px] text-gray-500 font-bold mb-0.5 tracking-tight uppercase leading-none">전문 동행 서비스</p>
                        <p className="text-[14px] sm:text-[17px] font-black text-gray-800 leading-none mt-1">자격 이수 매니저</p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02, x: 15 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="ml-8 md:ml-32 bg-white/95 backdrop-blur-xl px-10 py-3 sm:px-12 sm:py-4 rounded-2xl shadow-lg border border-brand-blue/20 flex items-center space-x-4 flex-shrink-0"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex flex-shrink-0 items-center justify-center shadow-inner">
                      <ShieldCheck className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div className="text-left whitespace-nowrap">
                      <p className="text-[10px] text-brand-blue/60 font-bold mb-0.5 tracking-tight uppercase leading-none">안심 보장 시스템</p>
                      <p className="text-[15px] sm:text-[17px] font-black text-brand-blue leading-none mt-1">전문인 배상책임보험 가입</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [0, -15, 0] 
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.2 },
              x: { duration: 0.8, delay: 0.2 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative w-full max-w-sm sm:max-w-md mx-auto md:max-w-sm lg:max-w-md md:ml-auto md:mr-4 lg:mr-8 mt-10 md:mt-0"
            style={{ perspective: "2000px" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-blue/30 via-brand-green/20 to-brand-pink/10 blur-[80px] -z-10 rounded-full opacity-60"></div>

            <motion.div 
              whileHover={{ rotateY: -12, rotateX: 6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative z-10 w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white border-[8px] border-white/80 shadow-[0_50px_100px_-20px_rgba(8,112,184,0.3),0_30px_60px_-12px_rgba(0,0,0,0.15)] backdrop-blur-sm"
              style={{ 
                transformStyle: "preserve-3d",
                rotateY: -6,
                rotateX: 3
              }}
            >
              <img 
                src="/background.jpg" 
                alt="나란히 동행 서비스" 
                className="w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none"></div>
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --------------------------------------------------------
          [섹션 2] 나란히 소개 영역
         -------------------------------------------------------- */}
      <section id="brand" className="w-full py-20 md:py-28 border-t border-gray-100 bg-white flex justify-center">
        <div className="w-full px-6 max-w-5xl text-center">
          <span className="text-brand-blue font-extrabold text-[14px] uppercase bg-brand-blue/10 px-4 py-1.5 rounded-full">About Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mt-4 mb-6">가족의 마음에 보폭을 맞추는 동반자</h2>
          <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed max-w-3xl mx-auto break-keep">
            나란히는 단순히 목적지까지 같이 가는 이동 대행이 아닙니다. 내 부모님을 모시는 자녀의 미안하고 애틋한 마음을 온전히 이어받아, 병원 접수부터 진료실 동행, 수납 및 약 수령, 안전한 귀가까지 전 과정을 내 가족처럼 밀착하여 돕는 프리미엄 동행 케어 서비스입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-brand-blue text-lg mb-2">정확한 진료 내용 기록</h3>
              <p className="text-sm text-gray-500 leading-relaxed">의사 선생님의 전문적인 진료 소견과 다음 예약 일정을 놓치지 않고 꼼꼼히 기록하여 전달합니다.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-brand-blue text-lg mb-2">철저한 안전 관리</h3>
              <p className="text-sm text-gray-500 leading-relaxed">휠체어 조작, 낙상 예방 교육을 이수한 전문 매니저가 전 일정을 완전하게 밀착 수호합니다.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-brand-blue text-lg mb-2">보호자의 자유시간 보장</h3>
              <p className="text-sm text-gray-500 leading-relaxed">직장 생활이나 급한 일정 중에도 안심하고 개인 용무를 보실 수 있도록 신뢰를 선물합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
          [섹션 3] 추천 대상 영역
         -------------------------------------------------------- */}
      <section id="recommend" className="w-full border-t border-gray-100 bg-gray-50/60">
        <RecommendationSection />
      </section>

      {/* --------------------------------------------------------
          [섹션 4] 서비스 안내 영역
         -------------------------------------------------------- */}
      <section id="services" className="w-full py-20 md:py-28 border-t border-gray-100 bg-white flex justify-center">
        <div className="w-full px-6 max-w-5xl text-center">
          <span className="text-brand-green font-extrabold text-[14px] uppercase bg-brand-green/10 px-4 py-1.5 rounded-full">Service Guide</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mt-4 mb-12">예약부터 동행까지 간편한 프로세스</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-brand-blue text-lg mb-2">1. 상담 및 예약</h3>
              <p className="text-sm text-gray-500 leading-relaxed">온라인 양식이나 전화를 통해 원하시는 일정과 어르신의 상태를 조율합니다.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-brand-blue text-lg mb-2">2. 맞춤형 매칭 및 동행</h3>
              <p className="text-sm text-gray-500 leading-relaxed">자격증을 보유한 전문 매니저가 약속 장소에서 만나 병원 일정을 완벽히 밀착 수행합니다.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-brand-blue text-lg mb-2">3. 귀가 및 리포트 발송</h3>
              <p className="text-sm text-gray-500 leading-relaxed">안전하게 댁으로 모셔다드린 후, 의사 소견이 포함된 안심 리포트를 전달합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
          [섹션 5] 안심 리포트 영역
         -------------------------------------------------------- */}
      <section id="features" className="w-full py-20 md:py-28 border-t border-gray-100 bg-brand-blue/[0.02] flex justify-center">
        <div className="w-full px-6 max-w-5xl text-center">
          <span className="text-brand-blue font-extrabold text-[14px] uppercase bg-brand-blue/10 px-4 py-1.5 rounded-full">Real-time Report</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mt-4 mb-6">진료실 안의 상황까지 투명하게</h2>
          <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed max-w-2xl mx-auto break-keep">
            자녀분이 직장에 있거나 멀리 계시더라도 걱정하지 않으시도록, 매니저가 부모님을 만난 순간부터 병원 접수, 진료 결과, 귀가 완료까지 카카오톡으로 실시간 상황 보고를 상세하게 전해드립니다.
          </p>
        </div>
      </section>

    </div>
  );
}