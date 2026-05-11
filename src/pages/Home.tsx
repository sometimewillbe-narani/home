import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full font-sans">
      {/* 히어로 섹션: 깔끔한 문구로 복구 */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white to-blue-50">
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
              따뜻한 마음으로 발걸음을 맞춥니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* 서비스 섹션: 카테고리 형태가 아닌 원래의 깔끔한 카드 디자인 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 shadow-sm">
            <Award className="w-12 h-12 text-green-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">병원 동행</h3>
            <p className="text-gray-600 leading-relaxed">진료의 시작부터 끝까지<br/>가족처럼 곁을 지킵니다.</p>
          </div>
          <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 shadow-sm">
            <ShieldCheck className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">일상 동행</h3>
            <p className="text-gray-600 leading-relaxed">어려운 은행·관공서 업무나<br/>가벼운 나들이도 함께합니다.</p>
          </div>
          <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 shadow-sm">
            <Heart className="w-12 h-12 text-pink-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">안심 서비스</h3>
            <p className="text-gray-600 leading-relaxed">부모님과 1인가구 모두가<br/>안심할 수 있는 든든한 동반자.</p>
          </div>
        </div>
      </section>
    </div>
  );
}