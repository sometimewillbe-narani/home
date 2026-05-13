import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 네비게이션 바 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className="text-gray-600 hover:text-blue-900 font-medium">나란히 소개</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-900 font-medium">서비스 안내</Link>
            <Link to="/guide" className="text-gray-600 hover:text-blue-900 font-medium">예약 가이드</Link>
            <Link to="/report" className="text-gray-600 hover:text-blue-900 font-medium">안심 리포트</Link>
          </div>

          <Link 
            to="/reserve"
            className="bg-[#1e3a8a] text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-800 transition-colors"
          >
            예약 신청
          </Link>
        </div>
      </nav>

      {/* 메인 컨텐츠 영역 */}
      <main className="flex-grow">
        {children}
      </main>

      {/* 푸터 영역: 요청하신 대로 정보를 재배치했습니다 */}
      <footer className="bg-gray-100 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* 1. 로고 및 슬로건 (왼쪽) */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Logo />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                가족의 마음으로 함께 걷는 동행 서비스, 나란히입니다.<br />
                어르신의 안전한 외출과 보호자의 안심을 약속드립니다.
              </p>
            </div>

            {/* 2. 서비스 지역 (가운데) */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">서비스 지역</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                부산, 울산, 양산,<br />
                마산, 창원, 포항 및 경남 전 지역
              </p>
            </div>

            {/* 3. 고객센터 및 사업자 정보 (오른쪽) */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">고객센터</h4>
              <div className="text-gray-600 text-sm space-y-1 mb-6">
                <p>대표전화: 051-991-0186</p>
                <p>직통: 010-2159-0456</p>
              </div>
              
              {/* 대표자 및 사업자번호 한 줄 나란히 배치 */}
              <div className="flex flex-wrap gap-x-3 text-xs text-gray-500 border-t border-gray-200 pt-4">
                <span>대표자: 황희주</span>
                <span className="text-gray-300">|</span>
                <span>사업자등록번호: 594-44-00678</span>
              </div>
            </div>
          </div>

          {/* 하단 저작권 표시 */}
          <div className="text-xs text-gray-400">
            © 2024 나란히(Naranhi). All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}