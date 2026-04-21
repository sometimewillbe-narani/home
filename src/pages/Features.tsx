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
  CalendarCheck
} from 'lucide-react';

export default function Features() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* 1. Header Section */}
      <section className="pt-16 pb-8 md:pt-24 md:pb-12 bg-gradient-to-b from-brand-pink/5 to-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[22px] md:text-[25px] font-extrabold text-brand-blue tracking-tight mb-6 leading-tight break-keep">
              가족의 눈과 귀가 되는<br />
              <span className="text-brand-pink">'나란히 안심 리포트'</span>
            </h1>
            <div className="inline-block relative">
              <span className="absolute -top-4 -left-6 text-4xl text-brand-pink/30 font-serif">"</span>
              <p className="text-[17px] md:text-[19px] font-bold text-brand-blue/80 relative z-10 break-keep leading-relaxed px-4">
                보호자님이 직접 곁에 계신 것처럼,<br className="md:hidden" /> 정확한 정보와 세밀한 진심을 기록합니다.
              </p>
              <span className="absolute -bottom-6 -right-6 text-4xl text-brand-pink/30 font-serif">"</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Hospital Report Section */}
      <section className="pt-8 pb-20 md:pt-12 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue font-bold rounded-full text-sm mb-4">특화 섹션</span>
            <h2 className="text-[20px] md:text-[25px] font-extrabold text-brand-blue tracking-tight mb-4">
              병원 동행 안심 리포트 : <span className="text-brand-green">의료 전문 케어</span>
            </h2>
            <p className="text-[14px] md:text-[15px] text-brand-blue/70 font-medium">
              복잡한 병원 진료, 자녀분이 직접 다녀오신 것처럼 명확하게 정리해 드립니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
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
                <h3 className="text-[19px] md:text-[23px] font-bold text-brand-blue">전문적인 진료 기록 및 관찰</h3>
              </div>
              
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <ClipboardList className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-[14px] md:text-[15px] text-brand-blue mb-1">진료 핵심 요약</strong>
                    <p className="text-brand-blue/70 text-[14px] md:text-[15px]">의사 선생님의 핵심 전달 사항과 진료 전반에 관한 사항을 알기 쉽게 정리합니다.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <HeartHandshake className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-[14px] md:text-[15px] text-brand-blue mb-1">진료실 안 대변인</strong>
                    <p className="text-brand-blue/70 text-[14px] md:text-[15px]">환자가 미처 말씀하지 못한 평소의 불편함이나 증상을 매니저가 대신 의사에게 전달하고 그 결과를 기록합니다.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Pill className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-[14px] md:text-[15px] text-brand-blue mb-1">복약 및 다음 일정 가이드</strong>
                    <p className="text-brand-blue/70 text-[14px] md:text-[15px]">새로 처방된 약의 용법, 다음 진료 예약 및 검사 전 주의사항(금식 등)을 안내하여 다음 진료를 대비합니다.</p>
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
                  <h3 className="text-[19px] md:text-[23px] font-bold text-brand-blue">보험 및 행정 서류 완벽 지원</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckSquare className="w-6 h-6 text-brand-pink flex-shrink-0 mt-1" />
                    <div className="w-full">
                      <strong className="block text-[14px] md:text-[15px] text-brand-blue mb-2">보험 청구 서류 완비</strong>
                      <p className="text-brand-blue/70 mb-3 text-[14px] md:text-[15px]">실손보험 청구용 맞춤 서류를 꼼꼼히 챙겨드립니다.</p>
                      
                      <div className="bg-white rounded-xl p-3 shadow-sm border border-brand-blue/5 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-pink flex-shrink-0" />
                          <span className="font-bold text-brand-blue/90 text-sm">진단서 및 소견서</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-pink flex-shrink-0" />
                          <span className="font-bold text-brand-blue/90 text-sm">진료비 세부 내역서 & 영수증</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Pill className="w-6 h-6 text-brand-pink flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-[14px] md:text-[15px] text-brand-blue mb-1">원스톱 행정 대행</strong>
                      <p className="text-brand-blue/70 text-[14px] md:text-[15px]">진료비 결제부터 약국 처방까지 전 과정을 대신 처리해 드립니다.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Camera className="w-6 h-6 text-brand-pink flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-[14px] md:text-[15px] text-brand-blue mb-1">실시간 사진 증빙</strong>
                      <p className="text-brand-blue/70 text-[14px] md:text-[15px]">모든 서류와 영수증은 사진으로 선명하게 바로 전송해 드립니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Daily Report Section */}
      <section className="py-20 md:py-32 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-[20px] md:text-[25px] font-extrabold text-brand-blue tracking-tight mb-6 leading-tight">
              일반 동행 안심 리포트 :<br />
              <span className="text-brand-pink">꼼꼼한 일상 기록</span>
            </h2>
            <p className="text-[14px] md:text-[15px] text-brand-blue/80 font-medium mb-12">
              산책, 은행, 관공서 방문 등 일상적인 동행도 '나란히'는 소홀히 하지 않습니다. 짧은 시간의 동행이라도 가족이 안심할 수 있도록 상세히 보고합니다.
            </p>

            <div className="space-y-8">
               <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                    <MapPin className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <strong className="block text-[17px] text-brand-blue mb-2">활동 요약</strong>
                    <p className="text-brand-blue/70 text-[14px] md:text-[15px] leading-relaxed">이동 경로와 주요 활동 내용을 상세히 전달합니다.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                    <Smile className="w-6 h-6 text-brand-pink" />
                  </div>
                  <div>
                    <strong className="block text-[17px] text-brand-blue mb-2">정서 및 컨디션 보고</strong>
                    <p className="text-brand-blue/70 text-[14px] md:text-[15px] leading-relaxed">어르신의 오늘 기분, 목소리 톤, 나누었던 주요 대화 내용을 기록하여 마음 컨디션까지 공유합니다.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                    <ShieldCheck className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <strong className="block text-[17px] text-brand-blue mb-2">안전 이상 유무</strong>
                    <p className="text-brand-blue/70 text-[14px] md:text-[15px] leading-relaxed">이동 중 보행 상태나 특별한 신체적 불편함은 없으셨는지 꼼꼼히 체크하여 알려드립니다.</p>
                  </div>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="bg-white w-full max-w-sm rounded-[32px] shadow-2xl p-6 border border-gray-100 relative">
              <div className="absolute -top-4 -right-4 bg-brand-pink text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg transform rotate-6">
                실제로 확인하는 내용!
              </div>
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-4">
                <div className="w-10 h-10 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green font-bold">N</div>
                <div>
                  <h4 className="font-bold text-gray-900">나란히 매니저</h4>
                  <span className="text-xs text-gray-500">오후 2:30</span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-4 text-sm text-gray-700 leading-relaxed space-y-3">
                <p>보호자님, 오늘 아버님 모시고 행정복지센터 방문 및 주거래 은행 업무 무사히 마치고 귀가하셨습니다 😊</p>
                <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                  <span className="text-xs font-bold text-brand-pink block mb-1">📝 업무 처리 및 특이사항</span>
                  <p>주민등록등본 발급을 마치고, 은행 창구에서 통장 비밀번호 변경 및 이체 한도 설정 업무를 순조롭게 도와드렸습니다. 대기 시간이 길었지만, 푹신한 소파에서 편히 쉬시도록 안내해 드렸습니다.</p>
                </div>
                <p>모든 업무를 마친 후 근처 식당에서 따뜻한 식사도 맛있게 드셨습니다! 발급된 등본 서류와 식당 영수증은 하단에 사진으로 첨부해 두었습니다.</p>
              </div>
              
              <div className="mt-4 flex gap-2">
                <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden relative">
                   <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=150&q=80" alt="관공서 은행 서류" className="w-full h-full object-cover" />
                </div>
                <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden border border-gray-300 flex flex-col items-center justify-center text-gray-400">
                    <FileCheck className="w-6 h-6 mb-1 opacity-50" />
                    <span className="text-xs font-medium">발급서류</span>
                </div>
                <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden border border-gray-300 flex flex-col items-center justify-center text-gray-400">
                    <Camera className="w-6 h-6 mb-1 opacity-50" />
                    <span className="text-xs font-medium">영수증</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Promises Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-[20px] md:text-[25px] font-extrabold text-brand-blue tracking-tight">나란히의 약속</h2>
            <div className="w-20 h-1 bg-brand-pink mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-24 h-24 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors group-hover:scale-105 duration-300">
                <Eye className="w-10 h-10 text-brand-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-[19px] md:text-[23px] font-bold text-gray-900 mb-4">투명성</h3>
              <p className="text-gray-600 leading-relaxed text-[14px] md:text-[15px] px-4">
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
              <div className="w-24 h-24 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-pink transition-colors group-hover:scale-105 duration-300">
                <CheckCircle2 className="w-10 h-10 text-brand-pink group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-[19px] md:text-[23px] font-bold text-gray-900 mb-4">정확성</h3>
              <p className="text-gray-600 leading-relaxed text-[14px] md:text-[15px] px-4">
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
              <div className="w-24 h-24 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors group-hover:scale-105 duration-300">
                <HeartHandshake className="w-10 h-10 text-brand-green group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-[19px] md:text-[23px] font-bold text-gray-900 mb-4">책임감</h3>
              <p className="text-gray-600 leading-relaxed text-[14px] md:text-[15px] px-4">
                동행이 끝난 후에도 가족의 궁금함이 남지 않도록 세세한 부분까지 담아냅니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
