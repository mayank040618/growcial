import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isHiding, setIsHiding] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Fast start, smooth progression
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Slightly random increment for organic luxury feel
        const diff = Math.floor(Math.random() * 12) + 3;
        return Math.min(prev + diff, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout1 = setTimeout(() => {
        setIsHiding(true);
      }, 400); // Hold at 100% briefly

      const timeout2 = setTimeout(() => {
        setIsDone(true);
        if (onComplete) onComplete();
      }, 1100); // Time for slide-up reveal curtain animation

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    }
  }, [progress, onComplete]);

  if (isDone) return null;

  return (
    <div className={`preloader-overlay ${isHiding ? 'preloader-exit' : ''}`}>
      {/* Background glow orbs */}
      <div className="preloader-glow glow-1"></div>
      <div className="preloader-glow glow-2"></div>

      <div className="preloader-content">
        {/* Brand logo title with shimmer effect */}
        <div className="preloader-brand">
          <span className="preloader-logo-text">
            <span className="text-gradient">Grow</span>cial
          </span>
          <span className="preloader-dot"></span>
        </div>

        {/* Tagline */}
        <p className="preloader-tagline">ENGINEERING VIRAL MOMENTUM</p>

        {/* Progress bar container */}
        <div className="preloader-bar-container">
          <div 
            className="preloader-bar-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Numeric percentage counter */}
        <div className="preloader-percentage">
          {progress < 10 ? `0${progress}` : progress}
          <span className="percent-symbol">%</span>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="preloader-footer">
        <span>© GROWCIAL MEDIA AGENCY</span>
        <span>INITIALIZING SYSTEM</span>
      </div>
    </div>
  );
};

export default Preloader;
