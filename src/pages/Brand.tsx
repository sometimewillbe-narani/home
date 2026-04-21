import { motion } from 'motion/react';
import { Target, ShieldCheck, Heart, ClipboardList } from 'lucide-react';

export default function Brand() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* 1. Hero / Vision Section - 더 미니멀하고 임팩트 있는 메시지 */}
      <section className="py-20 md:py-28 bg-gray-50/50 flex flex-col items-center border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
           >
              <div className="max-w-4xl mx-auto">
                <p className="text-brand-blue font-black text-[18px] md:text-[25px] leading-[2] break-keep">
                  <motion.span 
                    initial={{ backgroundSize: "0% 100%" }}
                    whileInView={{ backgroundSize: "100% 100%" }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="relative inline-block px-4 py-2"
                    style={{
                      backgroundImage: "linear-gradient(120deg, rgba(244, 114, 182, 0.2) 0%, rgba(244, 114, 182, 0.05) 100%)",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "0 0",
                      borderRadius: "1rem"
                    }}
                  >
                    멀리 있는 자녀의 미안함이 안심으로 바뀌는 시간
                  </motion.span>
                  
                  <br className="mt-6 md:mt-10 block" />
                  
                  <motion.span 
                    initial={{ backgroundSize: "0% 100%" }}
                    whileInView={{ backgroundSize: "100% 100%" }}
                    transition={{ duration: 1.2, delay: 1.2 }}
                    className="relative inline-block px-4 py-2"
                    style={{
                      backgroundImage: "linear-gradient(120deg, rgba(244, 114, 182, 0.2) 0%, rgba(244, 114, 182, 0.05) 100%)",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "0 0",
                      borderRadius: "1rem"
                    }}
                  >
                    혼자서는 버거웠던 병원 길이 든든한 일상이 되는 순간
                  </motion.span>
                </p>
              </div>
           </motion.div>
        </div>
      </section>

      {/* 2. Brand Story Section - 믹스된 내용 */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-[19px] md:text-[23px] font-extrabold leading-tight break-keep">
                <span className="text-brand-green">누군가의 따뜻한 손길이</span><br />
                <span className="text-brand-blue">가장 필요한 그 순간에.</span>
              </h3>
              
              <div className="space-y-6">
                <p className="text-brand-blue/80 text-[14px] md:text-[15px] font-bold leading-relaxed break-keep">
                  멀리 있어 닿지 못하는 자녀의 마음과<br/>
                  홀로 감당하기엔 무거웠던 누군가의 오늘 곁에,<br/>
                  <span className="text-brand-pink">나란히 서서 함께 걷겠습니다.</span>
                </p>
                
                <p className="text-brand-blue/70 text-[14px] md:text-[15px] leading-relaxed break-keep">
                  <strong className="text-brand-blue font-bold">'나란히'</strong>는 단순히 목적지까지 모셔다드리는 이동 보조 역할이 아닙니다. 보호자의 세심한 보살핌이 필요한 상황 속에서 홀로 어려움을 견뎌야 하는 분들을 위해 탄생한 '전문 케어 동행'입니다. 
                </p>
                <p className="text-brand-blue/70 text-[14px] md:text-[15px] leading-relaxed break-keep">
                  가장 든든한 대리인이 되어 낯선 병원이나 관공서로 향하는 길이 더 이상 외롭지 않도록, 저희는 당신이 마주하는 모든 일상의 문턱 앞에서 머뭇거림 없는 가장 든든한 지탱목이 될 것입니다.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-pink/5 rounded-3xl p-10 lg:p-14 border border-brand-pink/10 relative"
            >
              <span className="absolute top-8 left-8 text-6xl text-brand-pink/20 font-serif leading-none">"</span>
              <p className="relative z-10 text-[17px] md:text-[20px] font-bold text-brand-blue leading-relaxed pt-6 break-keep">
                혼자라면 막막한 숙제 같았던 외출이,<br />
                나란히와 함께라면 <span className="text-brand-pink">가벼운 산책</span>이 됩니다.<br />
                나란히와 함께라면 당신의 오늘은<br /><span className="text-brand-green">안심을 넘어, 웃음이 피어나는 따뜻한 시간</span>이 됩니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 md:py-28 bg-[#fdfdfd]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-[20px] md:text-[25px] font-extrabold text-brand-blue tracking-tight">나란히가 지키는 3가지 철학</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-lg shadow-brand-blue/5 border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-brand-pink/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-brand-pink" />
              </div>
              <h3 className="text-[19px] md:text-[23px] font-bold text-brand-pink mb-3">함께하는 든든한 발걸음</h3>
              <p className="text-brand-blue/70 text-[14px] md:text-[15px] leading-relaxed">
                나 홀로 감당해야 했던 외로운 외출은 이제 없습니다. 부모님부터 1인 가구까지, 곁에서 가장 편안한 보폭으로 당신의 속도에 맞춰 든든하게 걷겠습니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-lg shadow-brand-blue/5 border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-[19px] md:text-[23px] font-bold text-brand-green mb-3">일상의 문턱을 낮추는 케어</h3>
              <p className="text-brand-blue/70 text-[14px] md:text-[15px] leading-relaxed">
                긴장되는 병원 진료실부터 복잡한 관공서 업무까지, 훈련된 전문 매니저가 가족의 마음과 책임감으로 모든 일상의 문턱을 편안하게 낮춰드립니다.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-lg shadow-brand-blue/5 border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <ClipboardList className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="text-[19px] md:text-[23px] font-bold text-brand-blue mb-3">세밀하고 따뜻한 기록</h3>
              <p className="text-brand-blue/70 text-[14px] md:text-[15px] leading-relaxed">
                진료 내용과 더불어 오고 가며 나누었던 대화의 온도, 그날의 기분과 컨디션의 변화까지. 가족이 곁에 계셨던 것처럼 생생한 온기를 리포트로 전합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
