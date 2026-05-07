import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, ArrowRight, PhoneCall, Menu, FileEdit } from 'lucide-react';
import { Logo } from './Logo';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen font-sans bg-white text-brand-blue flex flex-col selection:bg-brand-pink/30 selection:text-brand-blue">
      {/* Header */}
      <header className={`${isHome ? 'absolute' : 'sticky bg-white/80 backdrop-blur-md border-b border-gray-100'} top-0 w-full z-50 flex justify-center py-2 md:py-4`}>
        <div className="w-full px-6 max-w-7xl flex items-center justify-between">
          <Link to="/" className="md:ml-2 transition-transform hover:scale-[1.02] bg-transparent">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-14 font-bold text-[18px] text-gray-700">
            <Link to="/brand" className={`hover:text-brand-blue transition-colors px-1 py-2 relative group whitespace-nowrap ${location.pathname === '/brand' ? 'text-brand-blue' : ''}`}>나란히 소개</Link>
            <Link to="/services" className={`hover:text-brand-green transition-colors px-1 py-2 relative group whitespace-nowrap ${location.pathname === '/services' ? 'text-brand-green' : ''}`}>서비스 안내</Link>
            <Link to="/guide" className={`hover:text-brand-blue transition-colors px-1 py-2 relative group whitespace-nowrap ${location.pathname === '/guide' ? 'text-brand-blue' : ''}`}>예약 가이드</Link>
            <Link to="/features" className={`hover:text-brand-green transition-colors px-1 py-2 relative group whitespace-nowrap ${location.pathname === '/features' ? 'text-brand-green' : ''}`}>안심 리포트</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-brand-pink/30 border border-brand-pink/20 text-brand-blue px-5 lg:px-8 py-2.5 lg:py-3.5 rounded-full font-extrabold text-[15px] lg:text-[18px] shadow-sm hover:bg-brand-pink/50 hover:shadow-brand-pink/20 hover:-translate-y-0.5 transition-all outline-none whitespace-nowrap"
            >
              서비스 신청하기
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-brand-blue hover:bg-gray-100 rounded-full transition-colors"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="absolute inset-0 bg-brand-blue/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <Logo />
                <button onClick={closeMobileMenu} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="w-6 h-6 text-brand-blue" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-8">
                <Link to="/brand" onClick={closeMobileMenu} className={`text-xl font-bold ${location.pathname === '/brand' ? 'text-brand-pink' : 'text-brand-blue'}`}>나란히 소개</Link>
                <Link to="/services" onClick={closeMobileMenu} className={`text-xl font-bold ${location.pathname === '/services' ? 'text-brand-green' : 'text-brand-blue'}`}>서비스 안내</Link>
                <Link to="/guide" onClick={closeMobileMenu} className={`text-xl font-bold ${location.pathname === '/guide' ? 'text-brand-pink' : 'text-brand-blue'}`}>예약 가이드</Link>
                <Link to="/features" onClick={closeMobileMenu} className={`text-xl font-bold ${location.pathname === '/features' ? 'text-brand-green' : 'text-brand-blue'}`}>안심 리포트</Link>
              </nav>

              <div className="mt-auto pt-8 border-t border-gray-100">
                <button 
                  onClick={() => {
                    closeMobileMenu();
                    setIsModalOpen(true);
                  }}
                  className="w-full bg-brand-pink text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-brand-pink/20"
                >
                  서비스 신청하기
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* Reservation Modal - Global */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-brand-blue/60 backdrop-blur-sm cursor-pointer"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 w-full max-w-lg relative z-10 shadow-2xl flex flex-col gap-4"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-2"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center mb-4 mt-2">
                <h3 className="text-2xl font-extrabold text-brand-blue mb-2">어떤 방법으로<br className="sm:hidden"/> 신청하시겠어요?</h3>
                <p className="text-brand-blue/60 font-medium">가장 편하신 방법을 선택해 주세요.</p>
              </div>

              <div className="flex flex-col gap-3">
                {/* 1. 네이버 폼 신청 주소 반영 완료 */}
                <a href="https://naver.me/GsBPdE7O" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-white border border-gray-100 p-4 rounded-2xl hover:border-brand-pink/40 hover:bg-brand-pink/5 transition-all group shadow-sm hover:shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-pink/10 flex items-center justify-center">
                      <FileEdit className="w-6 h-6 text-brand-pink" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-brand-blue text-[17px]">서비스 신청하기 (네이버 폼)</div>
                      <div className="text-brand-blue/50 text-sm font-medium mt-0.5">상세한 정보를 남겨주시면 연락드릴게요</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-brand-pink opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
                
                {/* 2. 카톡 상담 */}
                <a href="https://pf.kakao.com/_rdGEX" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-white border border-gray-100 p-4 rounded-2xl hover:border-[#FEE500]/70 hover:bg-[#FEE500]/10 transition-all group shadow-sm hover:shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FEE500]/30 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-[#391B1B]" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-brand-blue text-[17px]">카카오톡 채널 상담</div>
                      <div className="text-brand-blue/50 text-sm font-medium mt-0.5">편리하게 채팅으로 문의하세요</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#391B1B] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>

                {/* 3. 전화 상담 */}
                <div 
                  onClick={() => {
                    if (!showPhone) {
                      setShowPhone(true);
                    }
                  }}
                  className={`flex items-center justify-between bg-white border border-gray-100 p-4 rounded-2xl hover:border-brand-blue/40 hover:bg-brand-blue/5 transition-all group shadow-sm hover:shadow ${!showPhone ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <PhoneCall className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div className="text-left w-full overflow-hidden">
                      <AnimatePresence mode="wait">
                        {!showPhone ? (
                          <motion.div
                            key="title"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                          >
                            <div className="font-bold text-brand-blue text-[17px]">전화 상담/예약</div>
                            <div className="text-brand-blue/50 text-sm font-medium mt-0.5">클릭하여 전화번호 확인</div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="phone"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="flex flex-col gap-1.5"
                          >
                            <a 
                              href="tel:051-991-0186" 
                              onClick={(e) => e.stopPropagation()}
                              className="font-bold text-brand-pink text-[18px] tracking-tight hover:scale-105 transition-transform"
                            >
                              051-991-0186
                            </a>
                            <a 
                              href="tel:010-2159-0456" 
                              onClick={(e) => e.stopPropagation()}
                              className="font-bold text-brand-blue text-[18px] tracking-tight hover:scale-105 transition-transform"
                            >
                              010-2159-0456
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  {!showPhone && <ArrowRight className="w-5 h-5 text-brand-blue opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer 생략 (수정 없음) */}
    </div>
  );
}