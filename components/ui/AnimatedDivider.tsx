export const AnimatedDivider = () => {
  return (
    <div className="relative w-full z-20">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 via-accent/50 to-transparent"></div>
        </div>
      </div>
      {/* Shining line effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
    </div>
  );
};

