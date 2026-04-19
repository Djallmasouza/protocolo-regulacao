import { motion } from 'motion/react';

export const HumanSilhouette = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
      {/* Topographic Glowy Background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="overflow-visible">
          <defs>
            <radialGradient id="radial-glow" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--color-background)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100" height="100" fill="url(#radial-glow)" />
          
          {/* Decorative Topo Lines */}
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={i}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, repeatType: "reverse" }}
              d={`M ${10 + i * 5} 0 Q ${50 + (i % 2 === 0 ? 20 : -20)} 50 ${10 + i * 5} 100`}
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="0.5"
            />
          ))}
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={`r-${i}`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 3, delay: i * 0.5 + 1, repeat: Infinity, repeatType: "reverse" }}
              d={`M ${90 - i * 5} 0 Q ${50 + (i % 2 === 0 ? -20 : 20)} 50 ${90 - i * 5} 100`}
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      {/* Silhouette SVG */}
      <svg
        viewBox="0 0 200 310"
        className="h-full w-auto drop-shadow-[0_0_30px_rgba(223,183,255,0.2)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="body-gradient" x1="100" y1="10" x2="100" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--color-primary)" stopOpacity="0.4" />
            <stop offset="1" stopColor="var(--color-primary-container)" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow-filter">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Improved Human Body Path */}
        <motion.path
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          d="M100 10C86.2 10 75 21.2 75 35C75 48.8 86.2 60 100 60C113.8 60 125 48.8 125 35C125 21.2 113.8 10 100 10ZM160 85C160 76.7 153.3 70 145 70H55C46.7 70 40 76.7 40 85V140C40 145.5 44.5 150 50 150H65V280C65 291 74 300 85 300H115C126 300 135 291 135 280V150H150C155.5 150 160 145.5 160 140V85Z"
          fill="url(#body-gradient)"
          stroke="var(--color-primary)"
          strokeWidth="1"
          strokeOpacity="0.3"
        />

        {/* Soul / Energy Line */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
          d="M100 35 V280"
          stroke="var(--color-tertiary)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          filter="url(#glow-filter)"
        />
      </svg>
    </div>
  );
};
