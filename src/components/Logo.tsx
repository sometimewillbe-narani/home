import React from 'react';

export const Logo = () => {
  return (
    <div className="flex items-center h-28 md:h-36 lg:h-[130px] transition-all duration-300">
      <img
        src="/logo.png"
        alt="나란히"
        className="h-full w-auto object-contain"
        style={{
          imageRendering: '-webkit-optimize-contrast',
          transform: 'translateZ(0) scale(1)',
          mixBlendMode: 'multiply'
        } as any}
      />
    </div>
  );
};