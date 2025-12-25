import React, { useEffect, useRef, useState } from 'react';

interface Logo {
  node?: React.ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: Logo[];
  speed?: number;
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
}

export default function LogoLoop({
  logos,
  speed = 120,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  pauseOnHover = true,
  scaleOnHover = true,
  fadeOut = true,
  fadeOutColor = '#060010',
  ariaLabel = 'Partner logos',
}: LogoLoopProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollWidth = scrollElement.scrollWidth / 2;

    const animate = () => {
      if (!isPaused && scrollElement) {
        const increment = direction === 'left' ? speed / 60 : -speed / 60;
        scrollPosition += increment;

        if (direction === 'left' && scrollPosition >= scrollWidth) {
          scrollPosition = 0;
        } else if (direction === 'right' && scrollPosition <= -scrollWidth) {
          scrollPosition = 0;
        }

        scrollElement.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [speed, direction, isPaused]);

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false);
  };

  const renderLogo = (logo: Logo, index: number | string) => {
    const content = logo.node ? (
      <div
        className={`flex items-center justify-center transition-transform duration-300 ${
          scaleOnHover ? 'hover:scale-110' : ''
        }`}
        style={{ height: logoHeight, fontSize: logoHeight * 0.8 }}
      >
        {logo.node}
      </div>
    ) : (
      <img
        src={logo.src}
        alt={logo.alt || `Logo ${index}`}
        className={`object-contain transition-transform duration-300 ${
          scaleOnHover ? 'hover:scale-110' : ''
        }`}
        style={{ height: logoHeight }}
      />
    );

    return logo.href ? (
      <a
        key={index}
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
        style={{ marginRight: gap }}
        title={logo.title || logo.alt}
      >
        {content}
      </a>
    ) : (
      <div
        key={index}
        className="inline-flex items-center justify-center opacity-60"
        style={{ marginRight: gap }}
      >
        {content}
      </div>
    );
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: logoHeight + 40 }}
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {fadeOut && (
        <>
          <div
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}

      <div
        ref={scrollRef}
        className="flex items-center whitespace-nowrap"
        style={{
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        {logos.map((logo, index) => renderLogo(logo, index))}
        {logos.map((logo, index) => renderLogo(logo, `duplicate-${index}`))}
      </div>
    </div>
  );
}
