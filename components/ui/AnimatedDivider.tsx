export const AnimatedDivider = () => {
  return (
    <div className="relative w-full z-20">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          {/* Main gradient line - darker in light mode, lighter in dark mode */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/80 via-gray-500/80 to-transparent dark:via-primary/50 dark:via-accent/50"></div>
        </div>
      </div>
      {/* Shining line effect - visible in both modes */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent dark:via-white/50 animate-pulse"></div>
    </div>
  );
};

