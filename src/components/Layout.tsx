import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * Layout 컴포넌트: 모든 페이지의 공통 틀을 담당합니다.
 * 하단 푸터에 대표자 정보와 사업자 번호를 나란히 배치했습니다.
 */
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* 메인 콘텐츠 영역: 각 페이지(Home 등)가 이 자리에 나타납니다. */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* 푸터 영역 */}
      <footer className="bg-[#f9fafb] py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
            
            {/* 1. 브랜드 섹션 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/logo.jpg" alt="나란히 로고" className="h-9 w-auto" />
                <span className="font-bold text-xl text-[#1e3a8a]">나란히동행</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                가족의 마음으로 함께 걷는 동행 서비스, 나란히입니다.<br />
                어르신의 안전한 외출과 보호자의 안심을 약속드립니다.
              </p>
            </div>

            {/* 2. 서비스 지역 섹션 */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-base">서비스 지역</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                부산, 울산, 양산,<br />
                마산, 창원, 포항 및 경남 전 지역
              </p>
            </div>

            {/* 3. 고객센터 및 사업자 정보 섹션 */}
            <div className="flex flex-col">
              <h4 className="font-bold text-gray-900 mb-4 text-base">고객센터</h4>
              <div className="text-gray-600 text-sm mb-6 space-y-1">
                <p className="font-medium text-gray-800">대표전화: 051-991-0186</p>
                <p>직통문의: 010-2159-0456</p>
              </div>
              
              {/* 대표자, 사업자번호 나란히 배치 */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-x-3 text-[11px] text-gray-400">
                  <span>대표자: 황희주</span>
                  <span className="w-px h-2 bg-gray-300"></span>
                  <span>사업자등록번호: 594-44-00678</span>
                </div>
              </div>
            </div>

          </div>

          {/* 하단 카피라이트 */}
          <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
            <p className="text-[11px] text-gray-400">
              © 2024 나란히(Naranhi). All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}