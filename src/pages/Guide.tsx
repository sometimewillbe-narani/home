import { useState } from 'react';
import { ClipboardList, CreditCard, Users, HeartHandshake, CalendarCheck, MessageCircle, PhoneCall, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Guide() {
  const [showPhone, setShowPhone] = useState(false);
  return (
    <div className="pt-24 pb-0 bg-white">
      {/* 1. 예약 방법 안내 (Reservation Methods) */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-[20px] md:text-[25px] font-extrabold text-brand-blue tracking-tight break-keep">
              가장 편하신 방법으로<br className="md:hidden" /> 예약해 주세요
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* 1. 네이버 예약 */}
            <motion.a 
              href="https://new.smartplace.naver.com/bizes/place/11853307"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center text-center gap-6 cursor-pointer group"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#03C75A]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#03C75A] transition-colors">
                <CalendarCheck className="w-10 h-10 text-[#03C75A] group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-[#03C75A] font-bold text-sm mb-1">01</div>
                <h3 className="text-[19px] md:text-[23px] font-bold text-brand-blue mb-1">네이버 예약</h3>
                <p className="text-brand-blue/60 text-[14px]">일정 달력에서 원하는 시간을 바로 선택하세요</p>
              </div>
            </motion.a>

            {/* 2. 카카오톡 예약 */}
            <motion.a 
              href="https://pf.kakao.com/_rdGEX"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center text-center gap-6 cursor-pointer group"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#FEE500]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FEE500] transition-colors text-[#391B1B]">
                <MessageCircle className="w-10 h-10 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <div className="text-[#391B1B]/60 font-bold text-sm mb-1">02</div>
                <h3 className="text-[19px] md:text-[23px] font-bold text-[#391B1B] mb-1">카카오톡 채널 예약</h3>
                <p className="text-[#391B1B]/70 text-[14px]">나란히 채널을 추가하고 간편하게 톡으로 문의하세요</p>
              </div>
            </motion.a>

            {/* 3. 전화 예약 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onClick={() => {
                if (!showPhone) {
                  setShowPhone(true);
                }
              }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center gap-6 cursor-default group"
            >
              <div className="w-20 h-20 rounded-2xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors">
                <PhoneCall className="w-10 h-10 text-brand-blue group-hover:text-white transition-colors" />
              </div>
              <div className="h-32 flex flex-col justify-center">
                <div className="text-brand-blue/60 font-bold text-sm mb-1">03</div>
                <AnimatePresence mode="wait">
                  {!showPhone ? (
                    <motion.div
                      key="title"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="cursor-pointer"
                    >
                      <h3 className="text-[19px] md:text-[23px] font-bold text-brand-blue mb-1">전화 예약</h3>
                      <p className="text-brand-blue/60 text-[14px]">클릭하여 전화번호 확인 및 연결</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="phone"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex flex-col items-center space-y-2"
                    >
                      <a href="tel:051-991-0186" className="text-2xl font-black text-brand-pink tracking-tight hover:scale-105 transition-transform">051-991-0186</a>
                      <a href="tel:010-2159-0456" className="text-2xl font-black text-brand-blue tracking-tight hover:scale-105 transition-transform">010-2159-0456</a>
                      <div className="px-3 py-1 bg-gray-50 text-gray-400 rounded-full text-[10px] font-bold mt-2">
                        번호를 클릭하면 바로 연결됩니다
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. 이용 절차 (Procedure) */}
      <section className="py-20 md:py-32 bg-brand-blue text-white overflow-hidden relative border-t border-brand-blue/10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
           <div className="text-center mb-20">
            <h2 className="text-[20px] md:text-[25px] font-extrabold tracking-tight mb-4">서비스 이용 절차</h2>
            <p className="text-white/70 text-[14px] md:text-[15px] font-medium">예약부터 귀가까지, 안심되는 4단계</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-6xl mx-auto relative">
            {/* Connecting dashed line behind steps on large screens */}
            <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-[2px] bg-brand-pink/30 border-dashed border-t-2 border-brand-pink/40 -z-10"></div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-[32px] bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-pink transition-colors duration-300">
                <ClipboardList className="w-10 h-10 text-brand-pink group-hover:text-white transition-colors" />
              </div>
              <div className="text-brand-pink font-bold text-[14px] mb-2 opacity-80">STEP 1</div>
              <h3 className="text-[19px] md:text-[23px] font-bold mb-3">서비스 신청</h3>
              <p className="text-white/60 text-[14px] font-medium">프리미엄 / 실속 코스 선택<br/>맞춤 예약 접수</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-[32px] bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-pink transition-colors duration-300">
                <CreditCard className="w-10 h-10 text-brand-pink group-hover:text-white transition-colors" />
              </div>
              <div className="text-brand-pink font-bold text-[14px] mb-2 opacity-80">STEP 2</div>
              <h3 className="text-[19px] md:text-[23px] font-bold mb-3">비용 안내 및 예약 확정</h3>
              <p className="text-white/60 text-[14px] font-medium">서비스별 상세 비용 안내<br/>결제 확인 후 예약 최종 확정</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-[32px] bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-pink transition-colors duration-300">
                <Users className="w-10 h-10 text-brand-pink group-hover:text-white transition-colors" />
              </div>
              <div className="text-brand-pink font-bold text-[14px] mb-2 opacity-80">STEP 3</div>
              <h3 className="text-[19px] md:text-[23px] font-bold mb-3">매니저 매칭</h3>
              <p className="text-white/60 text-[14px] font-medium">전문 교육을 이수한<br/>최적의 매니저 배정</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-[32px] bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-pink transition-colors duration-300">
                <HeartHandshake className="w-10 h-10 text-brand-pink group-hover:text-white transition-colors" />
              </div>
              <div className="text-brand-pink font-bold text-[14px] mb-2 opacity-80">STEP 4</div>
              <h3 className="text-[19px] md:text-[23px] font-bold mb-3">동행 및 보고</h3>
              <p className="text-white/60 text-[14px] font-medium">서비스 종료 후 즉시<br/>안심 리포트 발송</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
