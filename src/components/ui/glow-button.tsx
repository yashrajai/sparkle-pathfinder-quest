import React from 'react';
import { cn } from '@/lib/utils';

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export const GlowButton: React.FC<GlowButtonProps> = ({ 
  children, 
  href, 
  className,
  onClick 
}) => {
  const content = (
    <div 
      className={cn(
        "relative p-[3px] rounded-[0.9em] transition-all duration-400 group/glow",
        "before:content-[''] before:absolute before:inset-0 before:m-auto before:rounded-[0.9em] before:-z-10",
        "before:transition-[filter] before:duration-400 before:filter before:blur-0",
        "hover:before:bg-gradient-to-r hover:before:from-[#03a9f4] hover:before:to-[#f441a5] hover:before:blur-[1.2em]",
        "active:before:blur-[0.2em]"
      )}
      style={{
        background: 'linear-gradient(90deg, #03a9f4, #f441a5)',
      }}
    >
      <button 
        className={cn(
          "px-6 py-3 rounded-[0.5em] border-none bg-black text-white cursor-pointer font-semibold",
          "shadow-[2px_2px_3px_#000000b4] transition-all duration-300",
          "flex items-center gap-2",
          className
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};

export default GlowButton;
