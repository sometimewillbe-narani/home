import React from 'react';

export const Logo = () => {
  return (
    // 모바일(h-22)과 PC(md:h-28) 사이즈를 확실히 키웠습니다.
    <div className="flex items-center h-22 md:h-28 lg:h-[110px] transition-all duration-300">
      <img
        src="/logo.png"
        alt="나란히"
        className="h-full w-auto object-contain"
        style={{
          imageRendering: '-webkit-optimize-contrast',
          transform: 'translateZ(0) scale(1)',
          // 로고 이미지의 흰색 배경을 투명하게 만들어주는 설정입니다.
          mixBlendMode: 'multiply' 
        } as any}
      />
    </div>
  );
};