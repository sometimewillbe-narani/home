import React from 'react';

export const Logo = () => {
  return (
    <div className="flex items-center h-20 md:h-28 lg:h-[110px] transition-all duration-300">
      <img
        src="/logo.png"
        alt="나란히"
        className="h-full w-auto object-contain bg-transparent"
        style={{
          imageRendering: '-webkit-optimize-contrast',
          transform: 'translateZ(0) scale(1)'
        } as any}
      />
    </div>
  );
};