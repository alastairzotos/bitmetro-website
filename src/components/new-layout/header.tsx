import React, { useRef, forwardRef } from "react";

// Helper to generate hexagon points for SVG
function getHexagonPoints(cx: number, cy: number, r: number) {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = Math.PI / 3 * i;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    points.push(`${x},${y}`);
  }
  return points.join(' ');
}
import { Navigation } from "@/components/new-layout/navigation";
import { GridBoxes } from "@/components/new-layout/grid-boxes";
import { ContentBoxes } from "@/components/new-layout/content-boxes";
import { HeaderProps } from "@/components/new-layout/header-props";

export const Header: React.FC<HeaderProps> = (props) => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <header>
      <div className="relative w-full md:aspect-square lg:aspect-[2/1]">
        {/* Animated SVG Waves Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Neon glow filter for waves */}
          <svg style={{width:0,height:0,position:'absolute'}}>
            <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </svg>
          {/* First animated wave layer */}
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, top: 0 }}>
            <defs>
              <linearGradient id="waveGradient1" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.07" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.07" />
              </linearGradient>
            </defs>
            <path fill="url(#waveGradient1)" filter="url(#neon-glow)">
              <animate attributeName="d" dur="16s" repeatCount="indefinite"
                values="M0,160L80,149.3C160,139,320,117,480,128C640,139,800,181,960,186.7C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
                M0,192L80,186.7C160,181,320,171,480,154.7C640,139,800,117,960,122.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
                M0,224L80,218.7C160,213,320,203,480,186.7C640,171,800,149,960,154.7C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
                M0,160L80,149.3C160,139,320,117,480,128C640,139,800,181,960,186.7C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              />
            </path>
          </svg>
          {/* Second animated wave layer */}
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, top: 0 }}>
            <defs>
              <linearGradient id="waveGradient2" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.09" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.09" />
              </linearGradient>
            </defs>
            <path fill="url(#waveGradient2)" filter="url(#neon-glow)">
              <animate attributeName="d" dur="24s" repeatCount="indefinite"
                values="M0,224L80,218.7C160,213,320,203,480,186.7C640,171,800,149,960,154.7C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
                M0,160L80,149.3C160,139,320,117,480,128C640,139,800,181,960,186.7C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
                M0,192L80,186.7C160,181,320,171,480,154.7C640,139,800,117,960,122.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
                M0,224L80,218.7C160,213,320,203,480,186.7C640,171,800,149,960,154.7C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              />
            </path>
          </svg>
        </div>
        <GridBoxes />
        <div className="h-full absolute inset-0 accent-gradient opacity-5 rounded-b-2xl pointer-events-none z-0" />
        <ContentBoxes ref={headerRef} {...props} />
        <Navigation headerRef={headerRef} />
      </div>
    </header>
  )
}

export default Header;
