export const Logo = ({ monochrome = false }: { monochrome?: boolean }) => {
  return (
    <div className="flex items-center h-16 md:h-24 lg:h-[100px] transition-all duration-300">
      <img
        src="/logo.png"
        alt="부산·경남 병원 동행서비스 나란히"
        className="h-full w-auto object-contain [mix-blend-mode:multiply]"
        style={{
          imageRendering: '-webkit-optimize-contrast',
          transform: 'translateZ(0) scale(1)',
          WebkitBackfaceVisibility: 'hidden'
        } as any}
      />
    </div>
  );
};