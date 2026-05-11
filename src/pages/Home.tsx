import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      {/* 화사한 히어로 섹션 */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#f8faff] to-[#eff6ff]">
        <div className="max-w-7xl mx-auto px-6 text-center">
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

      {/* 서비스 카드 (원래 디자인 느낌) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-50/50">
            <Award className="w-12 h-12 text-green-500 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">병원 동행</h3>
            <p className="text-gray-500 leading-relaxed">진료 접수부터 수납, 약 수령까지 전문 매니저가 가족처럼 함께합니다.</p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-50/50">
            <ShieldCheck className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">일상 외출</h3>
            <p className="text-gray-500 leading-relaxed">관공서 방문, 은행 업무, 나들이 등 혼자 가기 힘든 모든 길을 동행합니다.</p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-50/50">
            <Heart className="w-12 h-12 text-pink-500 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1인가구 지원</h3>
            <p className="text-gray-500 leading-relaxed">혼자 사는 어르신과 1인가구의 든든하고 따뜻한 동반자가 되어드립니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
}