import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart, Users, MapPin, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 히어로 섹션 */}
      <section className="relative pt-24 pb-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
              부산·경남 No.1 동행 서비스
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8">
              나란히동행
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
              가족의 마음으로 병원 진료부터 일상 외출까지<br/>
              모든 걸음을 든든하게 함께합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 서비스 카드 섹션 */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Award className="w-8 h-8 text-blue-600" />, title: "병원 동행", desc: "진료 접수, 수납, 약 수령 및 전문적인 진료 내용 전달까지 완벽하게 지원합니다." },
              { icon: <Users className="w-8 h-8 text-green-600" />, title: "일상 동행", desc: "은행, 관공서 방문부터 어르신 나들이까지 혼자 하기 힘든 일상을 함께합니다." },
              { icon: <Heart className="w-8 h-8 text-pink-600" />, title: "1인 가구 케어", desc: "도움이 필요한 1인 가구를 위해 따뜻하고 세심한 맞춤형 서비스를 제공합니다." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 안내 섹션 */}
      <section className="py-20 bg-slate-900 text-white rounded-[3rem] mx-6 mb-20">
        <div className="container mx-auto px-10 text-center">
          <h2 className="text-3xl font-bold mb-8">도움이 필요하신가요?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>부산·경남 전 지역 가능</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>전화문의: 나란히동행 고객센터</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}