import { motion } from 'framer-motion';
import { Award, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white to-blue-50/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-8 border border-blue-100">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                부산·경남 전 지역 서비스 제공
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-[#1e3a8a] leading-[1.1] mb-8 tracking-tight">
                따뜻한 마음으로<br />
                <span className="text-blue-600">발걸음을 맞춥니다</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-medium mb-12 leading-relaxed">
                걱정스러운 외출이 설레는 일상이 되는 곳,<br className="hidden md:block" />
                나란히동행이 가족의 마음으로 함께합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://form.naver.com/response/Y8i5Z5_V1zG9L9l9X7_Y9A" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-[#1e3a8a] text-white rounded-2xl font-bold text-xl hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center group"
                >
                  서비스 신청하기
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6" />
              <span className="text-lg font-semibold text-gray-900">전문인 배상책임보험 가입</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">함께하는 서비스</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Award className="w-8 h-8 text-green-600" />}
              title="병원 동행"
              description="진료 접수부터 수납, 약 수령까지 전문 매니저가 가족을 대신해 곁을 지킵니다."
              bgColor="bg-green-50"
            />
            <ServiceCard 
              icon={<ShieldCheck className="w-8 h-8 text-blue-600" />}
              title="일상 동행"
              description="은행, 관공서 업무부터 산책, 장보기까지 혼자 가기 힘든 모든 길을 동행합니다."
              bgColor="bg-blue-50"
            />
            <ServiceCard 
              icon={<Heart className="w-8 h-8 text-pink-600" />}
              title="안심 서비스"
              description="부모님과 1인가구 모두가 안심할 수 있는 든든하고 따뜻한 동반자가 되어드립니다."
              bgColor="bg-pink-50"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, bgColor }: { icon: React.ReactNode, title: string, description: string, bgColor: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-900/5 transition-all"
    >
      <div className={`w-16 h-16 ${bgColor} rounded-2xl flex items-center justify-center mb-8`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-500 leading-relaxed text-lg">
        {description}
      </p>
    </motion.div>
  );
}