export const Logo = ({ monochrome = false }: { monochrome?: boolean }) => (
  <div className="flex items-center h-16 md:h-24 lg:h-[100px] transition-all duration-300 pointer-events-none ml-6 md:ml-12">
    <img 
      src="/logo.png" 
      alt="나란히 로고" 
 className="h-full w-auto object-contain [mix-blend-mode:multiply]"
      style={{ 
        imageRendering: '-webkit-optimize-contrast',
        transform: 'translateZ(0) scale(1)',
        filter: 'contrast(1.15) brightness(1.05) drop-shadow(0 0 0.2px rgba(0,0,0,0.3))',
        WebkitBackfaceVisibility: 'hidden'
      }}
    />
  </div>
);
