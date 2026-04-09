'use client';

import Image from 'next/image';

interface VyntriseLogoProps {
  /** 'dark' = white text (on dark bg), 'light' = dark text (on white bg) */
  theme?: 'dark' | 'light';
  className?: string;
  height?: number;
}

export default function VyntriseLogo({
  theme = 'light',
  className = '',
  height = 32,
}: VyntriseLogoProps) {
  const textColor = theme === 'dark' ? 'text-white' : 'text-slate-900';
  // icon is square — same height as requested
  const iconSize = height;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/images/logo.png"
        alt=""
        width={iconSize}
        height={iconSize}
        className="object-contain shrink-0"
        priority
      />
      <span
        className={`font-bold tracking-tight leading-none ${textColor}`}
        style={{ fontSize: height * 0.62 }}
      >
        VyntRise
      </span>
    </div>
  );
}
