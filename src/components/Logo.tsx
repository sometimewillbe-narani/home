import React from 'react';

export const Logo = () => {
  return (
    <div className="flex items-center h-16 md:h-24 lg:h-[100px]">
      <img
        src="/logo.png"
        alt="나란히"
        className="h-full w-auto object-contain"
      />
    </div>
  );
};