import React from 'react';

export const Logo = () => {
  return (
    <div className="flex items-center h-22 md:h-28 lg:h-[110px] transition-all duration-300">
      <img
        src="/logo-new.png"
        alt="나란히"
        className="h-full w-auto object-contain"
        style={{
          imageRendering: '-webkit-optimize-contrast',
          transform: 'translateZ(0) scale(1)',
          mixBlendMode: 'multiply' // 이 줄과 바로 윗줄 끝의 쉼표가 핵심입니다!
        } as any}
      />
    </div>
  );
};