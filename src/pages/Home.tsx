import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full font-sans">
      {/* 히어로 섹션: 원래의 예쁜 디자인 */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-[#1e3a8a] leading-tight mb-8">
              나란히동행
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium mb-12">
              부산·경남 병원동행 및 어르신 일상동행 서비스
            </p>
          </motion.div>
        </div>
      </section>

      {/* 서비스 카드 섹션 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div whileHover={{ y: -10 }} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">병원 동행</h3>
            <p className="text-gray-500 leading-relaxed">진료 접수부터 수납, 약 수령까지 전문 매니저가 가족처럼 함께합니다.</p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">일상 외출</h3>
            <p className="text-gray-500 leading-relaxed">관공서 방문, 은행 업무, 나들이 등 혼자 가기 힘든 모든 길을 동행합니다.</p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1인가구 지원</h3>
            <p className="text-gray-500 leading-relaxed">혼자 사는 어르신과 1인가구의 든든하고 따뜻한 동반자가 되어드립니다.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}