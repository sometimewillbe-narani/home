import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Stethoscope, 
  ClipboardList, 
  CheckSquare, 
  Camera, 
  MapPin, 
  Smile, 
  ShieldCheck, 
  Eye, 
  CheckCircle2, 
  HeartHandshake,
  FileCheck,
  Pill,
  CalendarCheck,
  Quote,
  ChevronLeft,
  ChevronRight,
  MessageCircle
} from 'lucide-react';

export default function Features() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselCards = [
    {
      tag1: "지방 거주 자녀",
      tag2: "대학병원 동행",
      title: "부산 계신 아버님 대학병원 동행, 자식보다 낫네요!",
      content: "타지에 있어서 늘 죄송한 마음이었는데, 매니저님이 보내주신 리포트 보고 울컥했습니다. 진료 대기하시는 동안 아버지가 손주 사진 보여주시면서 자랑하셨다는 이야기, 요즘 무릎이 아프셔서 평소보다 걸음이 조금 느려지셨다는 디테일한 부분까지 다 적혀있더라고요.",
      color: "brand-blue"
    },
    {
      tag1: "직장인 보호자",
      tag2: "전 일정 밀착 케어",
      title: "연차 못 내서 발만 동동 굴렀는데... 완벽한 안심리포트까지!",
      content: "일하느라 같이 못 가서 내내 마음이 불편했는데, 리포트를 보는 순간 마음이 싹 놓였습니다. 몇 시 몇 분에 자택 출발하셨는지, 병원 대기시간 동안 어르신이 자녀 자랑을 하셔서 같이 웃으며 이야기 나누신 것, 수납이랑 약국 처방전 봉투를 어머니 가방 몇 번째 칸에 넣으셨는지까지 전 일정이 타임라인으로 적혀있더라고요.",
      color: "brand-pink"
    },
    {
      tag1: "정기 재활/검진",
      tag2: "일상 컨디션 체크",
      title: "매주 가야 하는 병원길, 친딸처럼 다정한 매니저님 덕분에 안심입니다.",
      content: "처방전이나 진료 내용 정리해 주신 건 기본이고, '오늘 어르신 기분이 좋아 보이셨고, 병원 로비 걸으실 때 오른발을 조금 덜 더듬거리셨다'는 내용까지 적혀있어서 깜짝 놀랐어요. 제가 옆에 있었어도 놓쳤을 세심한 변화까지 짚어주셔서 진짜 가족이 동행해 준 기분이었습니다.",
      color: "brand-green"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselCards.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselCards.length) % carouselCards.length);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-[#fafafa]">
      {/* 1. Header Section */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[26px] md:text-[34px] font-black text-brand-blue tracking-tight mb-6 leading-tight break-keep">
              가족의 눈과 귀가 되는<br />
              <span className="text-brand-pink">'나란히 안심 리포트'</span>
            </h1>
            <div className="inline-block relative">
              <span className="absolute -top-4 -left-6 text-4xl text-brand-pink/30 font-serif">"</span>
              <p className="text-[15px] md:text-[17px] font-semibold text-brand-blue/80 relative z-10 break-keep leading-relaxed px-4 mt-2">
                보호자님이 직접 곁에 계신 것처럼,<br className="md:hidden" /> 정확한 정보와 세밀한 진심을 기록합니다.
              </p>
              <span className="absolute -bottom-6 -right-6 text-4xl text-brand-pink/30 font-serif">"</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Carousel / Card News Section */}
      <section className="py-20 md:py-32 overflow-hidden border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12 text-center">
            <span className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green font-bold rounded-full text-[13px] md:text-[14px] mb-4">나란히 안심리포트 리얼 후기</span>
            <h2 className="text-[24px] md:text-[32px] font-black text-gray-900 tracking-tight">
              실제 보호자가 옆에 있었던 듯한 든든함
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-white">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselCards.map((card, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-8 md:p-14 relative">
                    <Quote className={`absolute top-10 right-10 w-24 h-24 md:w-40 md:h-40 opacity-5 rotate-12 ${
                      card.color === 'brand-blue' ? 'text-brand-blue' :
                      card.color === 'brand-pink' ? 'text-brand-pink' :
                      'text-brand-green'
                    }`} />
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1.5 bg-gray-100 text-gray-700 font-bold text-[12px] md:text-[14px] rounded-md">[{card.tag1}]</span>
                      <span 
                        className={`px-3 py-1.5 font-bold text-[12px] md:text-[14px] rounded-md ${
                          card.color === 'brand-blue' ? 'bg-brand-blue/10 text-brand-blue' :
                          card.color === 'brand-pink' ? 'bg-brand-pink/10 text-brand-pink' :
                          'bg-brand-green/10 text-brand-green'
                        }`}
                      >
                        [{card.tag2}]
                      </span>
                    </div>
                    
                    <h3 className="text-[20px] md:text-[24px] font-black text-gray-900 leading-tight mb-8 break-keep relative z-10">
                      "{card.title}"
                    </h3>
                    
                    <div 
                      className={`rounded-2xl p-6 md:p-8 relative z-10 ${
                        card.color === 'brand-blue' ? 'bg-brand-blue/5 border border-brand-blue/10' :
                        card.color === 'brand-pink' ? 'bg-brand-pink/5 border border-brand-pink/10' :
                        'bg-brand-green/5 border border-brand-green/10'
                      }`}
                    >
                      <p className="text-gray-700 font-medium leading-relaxed text-[15px] md:text-[16px] break-keep">
                        {card.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-brand-blue hover:scale-110 transition-all z-20 focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-brand-blue hover:scale-110 transition-all z-20 focus:outline-none"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {carouselCards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-brand-blue' : 'w-2.5 bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Real Report Mockup & Live Chat (Arranged Horizontally Side by Side) */}
      <section className="py-20 md:py-32 bg-brand-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Main Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-brand-pink font-bold rounded-full text-[12px] md:text-[14px] mb-4">
              실제 제공 리포트 & 실시간 소통
            </span>
            <h2 className="text-[24px] md:text-[32px] font-black text-white tracking-tight break-keep">
              나란히 안심 리포트 & 진행 상황 실시간 보고
            </h2>
            <p className="text-white/80 font-medium text-[15px] md:text-[17px] mt-4 break-keep">
              동행 완료 후에는 전문적인 서면 안심 리포트를, 동행 중에는 메신저로 실시간 상황을 투명하게 전송해 드립니다.
            </p>
          </div>

          {/* Two Columns Side-by-Side */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Left: Stacked Report Mockup Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between"
            >
              <div className="text-left mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 bg-brand-pink/20 text-brand-pink font-bold rounded-md text-[12px]">
                    동행 완료 후 전송
                  </span>
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-2">나란히 안심 리포트</h3>
                <p className="text-white/70 font-medium text-[14px] md:text-[15px] break-keep">
                  진료 결과, 의사 전달사항, 복약 안내부터 어르신의 세밀한 감정 변화까지 꼼꼼하게 기록합니다.
                </p>
              </div>

              {/* Stacked Report Container */}
              <div className="relative pt-8 pb-4 w-full max-w-[360px] mx-auto h-[620px] flex items-center justify-center">
                {/* Layer 3 (Bottom/Back) */}
                <div className="absolute top-0 left-8 right-0 bottom-24 bg-white rounded-xl shadow-lg p-5 border border-gray-200 rotate-[8deg] opacity-70 origin-bottom-right pointer-events-none">
                  <div className="border-b-2 border-brand-blue pb-3 mb-4 flex justify-between items-end">
                    <h4 className="text-lg font-bold text-brand-blue">[나란히 동행] 안심 리포트</h4>
                  </div>
                  <div className="space-y-4 text-gray-400 blur-[1px]">
                    <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                  </div>
                </div>

                {/* Layer 2 (Middle) - Doctor's Opinion */}
                <div className="absolute top-4 -left-2 right-8 bottom-16 bg-white rounded-xl shadow-xl p-5 border border-gray-200 -rotate-[5deg] opacity-95 pointer-events-none">
                  <h5 className="flex items-center gap-2 font-bold text-brand-blue mb-3 text-[14px]">
                    <div className="w-1.5 h-1.5 rotate-45 bg-brand-green"></div>
                    진료 결과 및 의사 소견
                  </h5>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 space-y-2 text-gray-700 text-[11.5px] font-medium leading-[1.6] break-keep">
                    <p>
                      <strong className="text-brand-blue block mb-0.5">• PET-CT 검사 결과 분석:</strong>
                      지난번 촬영하신 PET-CT 결과 병변은 깨끗하게 제거되었으며 타 장기로의 전이는 전혀 없음을 확인했습니다.
                    </p>
                    <p>
                      <strong className="text-brand-blue block mb-0.5">• 혈액 검사 및 영양 상태:</strong>
                      백혈구 및 호중구 수치가 안정적으로 회복되었습니다. 단백질 위주 식단을 권장하셨습니다.
                    </p>
                    <p>
                      <strong className="text-brand-blue block mb-0.5">• 잔여 항암 일정:</strong>
                      잔여 차수 일정은 계획대로 차질 없이 모두 완주해야 함을 주치의께서 재차 강조하셨습니다.
                    </p>
                  </div>
                </div>

                {/* Layer 1 (Top/Front) - Message to Guardian */}
                <div className="absolute top-[130px] left-6 -right-2 bottom-0 z-10 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-5 border border-gray-100 flex flex-col text-gray-900">
                  <div className="border-b-2 border-brand-blue pb-2 mb-3 flex justify-between items-end">
                    <span className="text-base font-bold text-brand-blue">[나란히 동행] 안심 리포트</span>
                    <img src="/logo.jpg" alt="로고" className="h-4 object-contain mix-blend-multiply" />
                  </div>
                  
                  <div className="flex justify-between items-center bg-gray-50 p-2 rounded text-[11px] border border-gray-100 mb-3 text-gray-600">
                    <span>이용자: <strong className="text-gray-900">최영재</strong></span>
                    <span>담당 매니저: <strong className="text-gray-900">김미라</strong></span>
                  </div>

                  <div className="flex flex-col flex-grow relative overflow-hidden">
                    <h5 className="flex items-center gap-1.5 font-bold text-brand-blue mb-2 text-[13px] flex-shrink-0">
                      <div className="w-1.5 h-1.5 rotate-45 bg-brand-green"></div>
                      보호자님께 드리는 메시지
                    </h5>
                    <div className="relative flex-grow bg-brand-pink/5 rounded-xl border border-brand-pink/20 shadow-inner overflow-hidden">
                      <div className="absolute inset-0 p-3.5 text-gray-800 text-[11.5px] font-medium leading-[1.65] break-keep overflow-y-auto no-scrollbar pb-6">
                        보호자님, 오늘 병원길도 아버님과 안전하게 잘 다녀왔습니다.<br/><br/>
                        요즘 항암 치료 과정에서 기력이 많이 떨어지셔서 오늘은 휠체어로 이동을 도와드렸습니다. 병원에서 대기하시는 동안 어르신께서 "치료가 잘 되고 있는 건지..." 하시며 불안한 마음을 살짝 내비치셨어요.<br/><br/>
                        하지만 진료실에서 주치의 선생님이 "종양은 사라졌고 pet ct 상 전이도 없다. 잘하고 계신다"고 확답을 주시자, 어르신 표정이 순간 환하게 밝아지셨습니다! 나오는 길에 메스껍던 속이 가라앉는 느낌이시라며 오늘은 식사 잘 하실 수 있겠다고도 하셨어요.<br/><br/>
                        댁에 모셔다 드릴 때에는 엘리베이터 앞에서 저에게 한참을 손 흔들어 주셨어요. 다음 항암 일정 때까지 식사 잘 하시고 기운 차리셔서 반갑게 다시 뵙겠습니다!
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#fdfafb] to-transparent pointer-events-none rounded-b-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Live Chat Mockup Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between"
            >
              <div className="text-left mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 bg-green-500/20 text-green-400 font-bold rounded-md text-[12px]">
                    동행 중 실시간 공유
                  </span>
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-2">진행 상황 실시간 보고</h3>
                <p className="text-white/70 font-medium text-[14px] md:text-[15px] break-keep">
                  집 출발부터 병원 접수, 대기, 진료, 귀가까지 단계별로 보호자님께 안심 메시지를 전송합니다.
                </p>
              </div>

              {/* Kakao UI Phone Mockup */}
              <div className="w-full max-w-[360px] mx-auto bg-[#b2c7d9] rounded-[36px] overflow-hidden shadow-2xl border-[6px] border-gray-900 relative h-[620px] flex flex-col">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-gray-900 rounded-b-2xl z-20"></div>
                
                {/* Mock Header */}
                <div className="bg-[#a9bdce] px-5 pt-8 pb-3.5 flex items-center gap-3 relative z-10">
                  <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                    <img src="/logo.jpg" alt="나란히" className="w-7 h-7 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-base leading-tight">나란히 정나리 매니저</h4>
                    <span className="text-gray-600 text-[11px] flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> 동행 진행 중
                    </span>
                  </div>
                </div>
                
                <div className="p-4 flex flex-col gap-3.5 flex-grow overflow-y-auto no-scrollbar pb-8 relative">
                  {/* Previous User Message */}
                  <div className="flex items-end justify-end gap-1 opacity-70">
                    <span className="text-[10px] text-gray-500 mb-1">오전 9:30</span>
                    <div className="bg-[#FEE500] p-2.5 rounded-2xl rounded-tr-sm shadow-sm max-w-[75%] text-gray-900 text-[13px] leading-relaxed break-keep">
                      네 매니저님! 오늘도 우리 엄마 잘 부탁드릴게요. 조심히 다녀오세요~
                    </div>
                  </div>

                  {/* Manager Message 1 */}
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src="/logo.jpg" alt="나란히" className="w-5 h-5 object-contain" />
                    </div>
                    <div className="flex flex-col gap-1 max-w-[75%]">
                      <span className="text-gray-700 text-[11px] font-medium ml-1">매니저</span>
                      <div className="bg-white p-2.5 rounded-2xl rounded-tl-sm shadow-sm text-gray-800 text-[13px] leading-relaxed break-keep">
                        보호자님, 어머님 모시고 정형외과 도착해서 방금 엑스레이 찍고 진료 대기 중입니다 😊
                      </div>
                      <span className="text-[10px] text-gray-500 ml-1">오전 10:15</span>
                    </div>
                  </div>

                  {/* User Reply 1 */}
                  <div className="flex items-end justify-end gap-1">
                    <span className="text-[10px] text-gray-500 mb-1">오전 10:18</span>
                    <div className="bg-[#FEE500] p-2.5 rounded-2xl rounded-tr-sm shadow-sm max-w-[75%] text-gray-900 text-[13px] leading-relaxed break-keep">
                      네 매니저님 감사합니다 ㅠㅠ 엄마가 팔 많이 불편해하시진 않나요?
                    </div>
                  </div>

                  {/* Manager Message 2 */}
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src="/logo.jpg" alt="나란히" className="w-5 h-5 object-contain" />
                    </div>
                    <div className="flex flex-col gap-1 max-w-[75%]">
                      <span className="text-gray-700 text-[11px] font-medium ml-1">매니저</span>
                      <div className="bg-white p-2.5 rounded-2xl rounded-tl-sm shadow-sm text-gray-800 text-[13px] leading-relaxed break-keep">
                        아무래도 계속 고정시켜두다 보니 답답해하시네요 ㅠㅠ 방금 진료 마쳤는데, 아직 뼈가 완전하게 붙지는 않아서 시간이 조금 더 필요하다고 하십니다.
                      </div>
                    </div>
                  </div>

                  {/* Manager Message 3 */}
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 flex-shrink-0"></div>
                    <div className="flex flex-col gap-1 max-w-[75%]">
                      <div className="bg-white p-2.5 rounded-2xl shadow-sm text-gray-800 text-[13px] leading-relaxed break-keep">
                        이제 암슬링으로 바꿔서 계속 착용하고 계셔야 한다고 하네요! 변경된 주의사항과 다음 일정은 마치고 리포트에 자세히 적어드릴게요!
                      </div>
                      <span className="text-[10px] text-gray-500 ml-1">오전 11:45</span>
                    </div>
                  </div>

                  {/* User Reply 2 */}
                  <div className="flex items-end justify-end gap-1">
                    <span className="text-[10px] text-gray-500 mb-1">오전 11:47</span>
                    <div className="bg-[#FEE500] p-2.5 rounded-2xl rounded-tr-sm shadow-sm max-w-[75%] text-gray-900 text-[13px] leading-relaxed break-keep">
                      네네 암슬링으로 바꿔야 하는군요! 전화로 직접 설명해주셔서 너무 안심됐어요. 고생 많으셨습니다!!
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>

          {/* Privacy Note */}
          <div className="mt-12 bg-white/10 p-5 rounded-2xl border border-white/10 flex items-center justify-center gap-3 text-center">
            <FileCheck className="w-5 h-5 text-brand-pink flex-shrink-0" />
            <p className="text-xs md:text-sm text-white/90">
              * 나란히의 모든 안심 리포트는 <strong className="text-brand-pink">개인정보보호법을 철저히 준수</strong>하며, 사전 동의를 받은 보호자 및 지정된 가족에게만 1:1로 안전하게 전송됩니다.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Hospital Report Section (Photo 2 Layout: Side-by-Side Cards) */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue font-bold rounded-full text-[13px] md:text-[14px] mb-4">특화 섹션</span>
            <h2 className="text-[24px] md:text-[32px] font-black text-brand-blue tracking-tight mb-4">
              병원 동행 안심 리포트 : <span className="text-brand-green">의료 전문 케어</span>
            </h2>
            <p className="text-[15px] md:text-[17px] font-semibold text-brand-blue/70">
              복잡한 병원 진료, 자녀분이 직접 다녀오신 것처럼 명확하게 정리해 드립니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Medical Record */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-brand-blue/5 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
                <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center">
                  <Stethoscope className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-black text-brand-blue">전문적인 진료 기록 및 관찰</h3>
              </div>
              
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <ClipboardList className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[16px] md:text-[18px] font-bold text-brand-blue mb-1.5">진료 핵심 요약</strong>
                    <p className="text-brand-blue/70 text-[14px] md:text-[15px] font-medium leading-relaxed">의사 선생님의 핵심 전달 사항과 진료 전반에 관한 사항을 알기 쉽게 정리합니다.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <HeartHandshake className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[16px] md:text-[18px] font-bold text-brand-blue mb-1.5">진료실 안 대변인</strong>
                    <p className="text-brand-blue/70 text-[14px] md:text-[15px] font-medium leading-relaxed">환자가 미처 말씀하지 못한 평소의 불편함이나 증상을 매니저가 대신 의사에게 전달하고 그 결과를 기록합니다.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Pill className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[16px] md:text-[18px] font-bold text-brand-blue mb-1.5">복약 및 다음 일정 가이드</strong>
                    <p className="text-brand-blue/70 text-[14px] md:text-[15px] font-medium leading-relaxed">새로 처방된 약의 용법, 다음 진료 예약 및 검사 전 주의사항(금식 등)을 안내하여 다음 진료를 대비합니다.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Right: Admin & Insurance */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-blue/5 rounded-3xl p-8 md:p-10 border border-brand-blue/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-brand-blue/10">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <FileCheck className="w-8 h-8 text-brand-blue" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-black text-brand-blue">보험 및 행정 서류 완벽 지원</h3>
                </div>

                <div className="space-y-7">
                  <div className="flex gap-4">
                    <CheckSquare className="w-6 h-6 text-brand-pink flex-shrink-0 mt-0.5" />
                    <div className="w-full">
                      <strong className="block text-[16px] md:text-[18px] font-bold text-brand-blue mb-1.5">보험 청구 서류 완비</strong>
                      <p className="text-brand-blue/70 mb-4 text-[14px] md:text-[15px] font-medium">실손보험 청구용 맞춤 서류를 꼼꼼히 챙겨드립니다.</p>
                      
                      <div className="bg-white rounded-xl p-3.5 shadow-sm border border-brand-blue/5 flex flex-col gap-2.5">
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-pink flex-shrink-0" />
                          <span className="font-bold text-brand-blue/90 text-[13px] md:text-[14px]">진단서 및 소견서</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-pink flex-shrink-0" />
                          <span className="font-bold text-brand-blue/90 text-[13px] md:text-[14px]">진료비 세부 내역서 & 영수증</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Pill className="w-6 h-6 text-brand-pink flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[16px] md:text-[18px] font-bold text-brand-blue mb-1.5">원스톱 행정 대행</strong>
                      <p className="text-brand-blue/70 text-[14px] md:text-[15px] font-medium">진료비 결제부터 약국 처방까지 전 과정을 대신 처리해 드립니다.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Camera className="w-6 h-6 text-brand-pink flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[16px] md:text-[18px] font-bold text-brand-blue mb-1.5">실시간 사진 증빙</strong>
                      <p className="text-brand-blue/70 text-[14px] md:text-[15px] font-medium">모든 서류와 영수증은 사진으로 선명하게 바로 전송해 드립니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Daily Report Section (Photo 1 Layout: Left Text, Right Mockup Card) */}
      <section className="py-20 md:py-32 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Descriptions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[24px] md:text-[32px] font-black text-brand-blue tracking-tight mb-5 leading-tight">
              일반 동행 안심 리포트 :<br />
              <span className="text-brand-pink">꼼꼼한 일상 기록</span>
            </h2>
            <p className="text-[15px] md:text-[17px] text-brand-blue/80 font-semibold mb-10 leading-relaxed break-keep">
              산책, 은행, 관공서 방문 등 일상적인 동행도 '나란히'는 소홀히 하지 않습니다. 짧은 시간의 동행이라도 가족이 안심할 수 있도록 상세히 보고합니다.
            </p>

            <div className="space-y-8">
               <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                    <MapPin className="w-5 h-5 text-gray-700" />
                  </div>
                  <div className="pt-0.5">
                    <strong className="block text-[16px] md:text-[18px] font-bold text-brand-blue mb-1.5">활동 요약</strong>
                    <p className="text-brand-blue/70 text-[14px] md:text-[15px] font-medium leading-relaxed break-keep">이동 경로와 주요 활동 내용을 상세히 전달합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-pink-100">
                    <Smile className="w-5 h-5 text-brand-pink" />
                  </div>
                  <div className="pt-0.5">
                    <strong className="block text-[16px] md:text-[18px] font-bold text-brand-blue mb-1.5">정서 및 컨디션 보고</strong>
                    <p className="text-brand-blue/70 text-[14px] md:text-[15px] font-medium leading-relaxed break-keep">어르신의 오늘 기분, 목소리 톤, 나누었던 주요 대화 내용을 기록하여 마음 컨디션까지 공유합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                    <ShieldCheck className="w-5 h-5 text-gray-700" />
                  </div>
                  <div className="pt-0.5">
                    <strong className="block text-[16px] md:text-[18px] font-bold text-brand-blue mb-1.5">안전 이상 유무</strong>
                    <p className="text-brand-blue/70 text-[14px] md:text-[15px] font-medium leading-relaxed break-keep">이동 중 보행 상태나 특별한 신체적 불편함은 없으셨는지 꼼꼼히 체크하여 알려드립니다.</p>
                  </div>
                </div>
            </div>
          </motion.div>

          {/* Right Column: General Report Mockup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            {/* Stacked Report Container (Matched to A4 style) */}
            <div className="relative pt-8 pb-4 w-full max-w-[380px] mx-auto h-[620px] flex items-center justify-center mt-4">
              <div className="absolute -top-2 right-4 bg-brand-pink text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-full shadow-lg z-30">
                실제로 확인하는 내용!
              </div>

              {/* Layer 3 (Bottom/Back) */}
              <div className="absolute top-0 left-8 right-0 bottom-24 bg-white rounded-xl shadow-lg p-5 border border-gray-200 rotate-[8deg] opacity-70 origin-bottom-right pointer-events-none">
                <div className="border-b-2 border-brand-pink pb-3 mb-4 flex justify-between items-end">
                  <h4 className="text-lg font-bold text-brand-pink">[나란히 동행] 일상 안심리포트</h4>
                </div>
                <div className="space-y-4 text-gray-400 blur-[1px]">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                  <div className="h-3 bg-gray-100 rounded w-full"></div>
                  <div className="h-3 bg-gray-100 rounded w-full"></div>
                </div>
              </div>

              {/* Layer 2 (Middle) - Activity Results */}
              <div className="absolute top-4 -left-2 right-8 bottom-16 bg-white rounded-xl shadow-xl p-5 border border-gray-200 -rotate-[5deg] opacity-95 pointer-events-none">
                <h5 className="flex items-center gap-2 font-bold text-brand-pink mb-3 text-[14px]">
                  <div className="w-1.5 h-1.5 rotate-45 bg-brand-blue"></div>
                  주요 활동 및 행정 업무
                </h5>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 space-y-2 text-gray-700 text-[11.5px] font-medium leading-[1.6] break-keep">
                  <p>
                    <strong className="text-brand-pink block mb-0.5">• 행정복지센터 방문:</strong>
                    인감 도장 분실 신고, 재등록 및 재발급을 완료했습니다. 대기 인원이 많아 약 20분 소요되었습니다.
                  </p>
                  <p>
                    <strong className="text-brand-pink block mb-0.5">• 주거래 은행 업무:</strong>
                    밀린 통장 정리와 예금 가입을 안전하게 도와드렸습니다.
                  </p>
                  <p>
                    <strong className="text-brand-pink block mb-0.5">• 서류 및 영수증 보관:</strong>
                    발급된 서류 원본과 점심 식사 영수증은 어르신 가방 안쪽 지퍼칸에 분실되지 않도록 꼼꼼히 챙겨 넣었습니다.
                  </p>
                </div>
              </div>

              {/* Layer 1 (Top/Front) - Message to Guardian */}
              <div className="absolute top-[130px] left-6 -right-2 bottom-0 z-20 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-5 border border-gray-100 flex flex-col text-gray-900">
                <div className="border-b-2 border-brand-pink pb-2 mb-3 flex justify-between items-end">
                  <span className="text-base font-bold text-brand-pink">[나란히 동행] 일상 안심리포트</span>
                  <img src="/logo.jpg" alt="로고" className="h-4 object-contain mix-blend-multiply" />
                </div>
                
                <div className="flex justify-between items-center bg-gray-50 p-2 rounded text-[11px] border border-gray-100 mb-3 text-gray-600">
                  <span>이용자: <strong className="text-gray-900">김종태</strong></span>
                  <span>담당 매니저: <strong className="text-gray-900">최지은</strong></span>
                </div>

                <div className="flex flex-col flex-grow relative overflow-hidden">
                  <h5 className="flex items-center gap-1.5 font-bold text-brand-pink mb-2 text-[13px] flex-shrink-0">
                    <div className="w-1.5 h-1.5 rotate-45 bg-brand-blue"></div>
                    보호자님께 드리는 메시지
                  </h5>
                  <div className="relative flex-grow bg-brand-blue/5 rounded-xl border border-brand-blue/10 shadow-inner overflow-hidden">
                    <div className="absolute inset-0 p-3.5 text-gray-800 text-[11.5px] font-medium leading-[1.65] break-keep overflow-y-auto no-scrollbar pb-6">
                      보호자님, 오늘 아버님 모시고 관공서와 은행 업무 무사히 마치고 댁에 잘 모셔다 드렸습니다.<br/><br/>
                      <strong>[이동 및 안전]</strong><br/>
                      최근 무릎이 조금 불편하시다고 하셔서, 편한 운동화를 신으시도록 챙겨드리고 계단 대신 엘리베이터로만 이동했습니다. 보행 속도를 어르신께 맞추어 천천히 이동했고, 대기 시간이 길어질 때는 은행 소파에 편히 앉아 계시도록 안내해 드렸습니다.<br/><br/>
                      <strong>[컨디션 및 정서]</strong><br/>
                      행정복지센터에 방문해서 인감 도장 분실 신고, 재등록 및 재발급을 하시고 은행으로 이동하여 밀린 통장 정리와 예금가입을 마치시니 홀가분해 하시네요. 식사하고 들어가신다고 하셔서 근처식당에서 설렁탕 한 그릇을 든든하게 다 비우셨습니다. 식사 중에는 주말에 손주와 영화관 갔던 이야기를 하시며 기분이 무척 좋아보이셨습니다.<br/><br/>
                      요청하신 행정 업무는 모두 차질 없이 처리되었으며, 발급 서류와 영수증은 가방에 잘 챙겨드렸으니 귀가 후 확인 부탁드립니다. 오늘도 나란히를 믿고 맡겨주셔서 감사합니다!
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#f8fbff] to-transparent pointer-events-none rounded-b-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 6. Promises Section */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-[24px] md:text-[32px] font-black text-brand-blue tracking-tight">나란히의 약속</h2>
            <div className="w-20 h-1 bg-brand-pink mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors group-hover:scale-105 duration-300">
                <Eye className="w-8 h-8 md:w-10 md:h-10 text-brand-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-bold text-gray-900 mb-3">투명성</h3>
              <p className="text-gray-600 font-medium leading-relaxed text-[14px] md:text-[15px] px-2">
                모든 동행 과정은 사진과 함께 기록되어 실시간으로 확인하실 수 있습니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-pink transition-colors group-hover:scale-105 duration-300">
                <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-brand-pink group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-bold text-gray-900 mb-3">정확성</h3>
              <p className="text-gray-600 font-medium leading-relaxed text-[14px] md:text-[15px] px-2">
                특히 병원 동행 리포트는 의료적 오해 없이 명확한 용어로 전달합니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors group-hover:scale-105 duration-300">
                <HeartHandshake className="w-8 h-8 md:w-10 md:h-10 text-brand-green group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-bold text-gray-900 mb-3">책임감</h3>
              <p className="text-gray-600 font-medium leading-relaxed text-[14px] md:text-[15px] px-2">
                동행이 끝난 후에도 가족의 궁금함이 남지 않도록 세세한 부분까지 담아냅니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
