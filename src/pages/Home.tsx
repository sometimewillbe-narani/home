import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full font-sans">
      {/* 히어로 섹션: 화사한 그라데이션과 메인 문구 */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white to-blue-50/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-black text-[#1e3a8a] leading-[1.2] mb-8 tracking-tight">
                따뜻한 마음으로<br />
                <span className="text-blue-600">발걸음을 맞춥니다</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-medium mb-12 leading-relaxed">
                부산·경남 전 지역 병원동행부터 일상 외출까지<br />
                나란히동행이 가족의 마음으로 함께합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 서비스 카드 섹션: 원래의 입체감 있는 디자인 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* 병원 동행 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-900/5 transition-all"
            >
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">병원 동행</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                진료 접수부터 수납, 약 수령까지 전문 매니저가 보호자를 대신해 곁을 지킵니다.
              </p>
            </motion.div>

            {/* 일상 동행 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-900/5 transition-all"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">일상 외출</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                은행, 관공서 방문부터 장보기, 산책까지 혼자 가기 힘든 모든 길을 동행합니다.
              </p>
            </motion.div>

            {/* 안심 서비스 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-900/5 transition-all"
            >
              <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-8">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">안심 서비스</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                부모님과 1인가구 모두가 안심할 수 있도록 정기적인 방문과 안부 확인을 제공합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}