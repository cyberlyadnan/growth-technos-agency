export const AnimatedDivider = () => {
  return (
    <div className="relative w-full z-20">
      <div className="relative flex items-center justify-center h-10 md:h-16">
        <div className="absolute inset-0 flex items-center">
          {/* Main gradient line - darker in light mode for better visibility */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary dark:via-primary/50 via-gray-700 dark:via-accent/50 to-transparent"></div>
        </div>
      </div>
      {/* Shining line effect - more visible in light mode */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent dark:via-white/50 animate-pulse"></div>
    </div>
  );
};

