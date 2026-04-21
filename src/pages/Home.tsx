import { motion } from 'motion/react';
import { Star, Award, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center overflow-hidden bg-white pt-24 lg:pt-32">
      {/* Premium Mesh Gradient Background - Higher Intensity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-white/20 to-brand-blue/15"></div>
        <div className="absolute top-[10%] left-[15%] w-[85%] h-[85%] bg-[radial-gradient(circle,rgba(9,23,142,0.18)_0%,transparent_60%)] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[75%] h-[75%] bg-[radial-gradient(circle,rgba(22,81,58,0.15)_0%,transparent_60%)]"></div>
        <div className="absolute top-[15%] right-[-20%] w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(255,133,192,0.25)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-[0.06] mix-blend-multiply"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-32 lg:gap-56 items-center z-10 py-12 md:py-24">
        
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start justify-center text-left"
        >
          <div className="space-y-4 md:space-y-6">
            {/* Sub-header Label Layout */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-2 sm:mb-4"
            >
              <span className="bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-lg font-bold text-sm sm:text-base tracking-tight uppercase border border-brand-blue/10">
                가족의 마음으로
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-brand-pink via-brand-pink/50 to-transparent"></div>
            </motion.div>
            
            <h1 className="text-[28px] md:text-[45px] font-extrabold leading-[1.2] tracking-tight drop-shadow-sm break-keep pb-8">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-brand-blue inline-block mr-4"
              >
                당신의 보폭에
              </motion.span>
              <div className="inline-flex items-center">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-brand-green relative inline-block mr-4"
                >
                  나란히
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-pink/50 -z-10 rounded-full"></span>
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-brand-blue"
                >
                  맞춥니다!
                </motion.span>
              </div>
            </h1>
            
            <div className="pt-2 w-full flex flex-col items-start text-left">
                <p className="text-[16px] md:text-[19px] text-gray-600 font-medium leading-relaxed break-keep py-1">
                  부산, 경남 지역 전문 <span className="text-brand-blue font-black underline decoration-brand-pink/30 underline-offset-4">병원, 일상, 행정 동행 서비스</span>
                </p>

                {/* Info Cards - Staggered Layout (2 on top, 1 on bottom) */}
                <div className="mt-10 flex flex-col space-y-4 items-start w-full">
                  <div className="flex flex-row items-center gap-3 sm:gap-4 flex-nowrap">
                    {/* Item 1: Satisfaction */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="bg-white/95 backdrop-blur-xl px-4 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-lg border border-brand-pink/20 flex items-center space-x-3 sm:space-x-4 flex-shrink-0"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-pink/10 flex flex-shrink-0 items-center justify-center shadow-inner">
                        <Star className="w-5 h-5 sm:w-6 sm:h-6 text-brand-pink fill-brand-pink/20" />
                      </div>
                      <div className="text-left whitespace-nowrap">
                        <p className="text-[9px] sm:text-[10px] text-brand-pink font-extrabold mb-0.5 tracking-widest uppercase leading-none">고객 만족도</p>
                        <p className="text-[14px] sm:text-[17px] font-black text-brand-blue leading-none mt-1">4.9 / 5.0</p>
                      </div>
                    </motion.div>
                    
                    {/* Item 2: Certified Manager */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="bg-white/95 backdrop-blur-xl px-4 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-lg border border-brand-green/20 flex items-center space-x-3 sm:space-x-4 flex-shrink-0"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-green/10 flex flex-shrink-0 items-center justify-center shadow-inner">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-brand-green" />
                      </div>
                      <div className="text-left whitespace-nowrap">
                        <p className="text-[9px] sm:text-[10px] text-gray-500 font-bold mb-0.5 tracking-tight uppercase leading-none">전문 동행 서비스</p>
                        <p className="text-[14px] sm:text-[17px] font-black text-gray-800 leading-none mt-1">자격 이수 매니저</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Item 3: Insurance - Positioned below and shifted right (reduced for no overlap) */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02, x: 15 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="ml-8 md:ml-32 bg-white/95 backdrop-blur-xl px-10 py-3 sm:px-12 sm:py-4 rounded-2xl shadow-lg border border-brand-blue/20 flex items-center space-x-4 flex-shrink-0"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex flex-shrink-0 items-center justify-center shadow-inner">
                      <ShieldCheck className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div className="text-left whitespace-nowrap">
                      <p className="text-[10px] text-brand-blue/60 font-bold mb-0.5 tracking-tight uppercase leading-none">안심 보장 시스템</p>
                      <p className="text-[15px] sm:text-[17px] font-black text-brand-blue leading-none mt-1">전문인력 배상책임보험 가입</p>
                    </div>
                  </motion.div>
                </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Modern Floating Layout */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            y: [0, -15, 0] 
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.2 },
            x: { duration: 0.8, delay: 0.2 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative w-full max-w-sm sm:max-w-md mx-auto md:max-w-sm lg:max-w-md md:ml-auto md:mr-4 lg:mr-8 mt-10 md:mt-0"
          style={{ perspective: "2000px" }}
        >
          {/* Background Glow - More atmospheric */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-blue/30 via-brand-green/20 to-brand-pink/10 blur-[80px] -z-10 rounded-full opacity-60"></div>

          {/* Main Image Card with 3D Tilt */}
          <motion.div 
            whileHover={{ rotateY: -12, rotateX: 6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative z-10 w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white border-[8px] border-white/80 shadow-[0_50px_100px_-20px_rgba(8,112,184,0.3),0_30px_60px_-12px_rgba(0,0,0,0.15)] backdrop-blur-sm"
            style={{ 
              transformStyle: "preserve-3d",
              rotateY: -6,
              rotateX: 3
            }}
          >
            <img 
              src="/background.jpg" 
              alt="나란히 동행 서비스" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700"
            />
            {/* Glossy Overlay for glass effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none"></div>
            {/* Bottom Gradient for depth */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
