export const AnimatedDivider = () => {
  return (
    <div className="relative w-full z-20">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 via-accent/50 to-transparent"></div>
        </div>
        <div className="relative bg-background px-6">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary via-accent to-secondary animate-pulse"></div>
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary/50 blur-md animate-pulse"></div>
        </div>
      </div>
      {/* Shining line effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
    </div>
  );
};

