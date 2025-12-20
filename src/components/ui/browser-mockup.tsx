'use client';

import React from 'react';
import Image from 'next/image';

interface BrowserMockupProps {
  imageUrl: string;
  imageAlt: string;
  url?: string;
  className?: string;
  dataAiHint?: string;
}

export function BrowserMockup({imageUrl, imageAlt, url, className = '', dataAiHint}: BrowserMockupProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Browser Window */}
      <div className="relative bg-background border border-border/50 rounded-lg shadow-2xl overflow-hidden">
        {/* Browser Header */}
        <div className="bg-muted border-b border-border/50 px-4 py-3 flex items-center gap-2">
          {/* Traffic Lights */}
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>

          {/* Address Bar */}
          <div className="flex-1 ml-3">
            <div className="bg-background/50 border border-border/30 rounded-md px-3 py-1.5 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              {url && <span className="text-xs text-muted-foreground truncate">{url}</span>}
            </div>
          </div>

          {/* Browser Controls */}
          <div className="flex items-center gap-2 ml-2">
            <div className="w-6 h-6 rounded bg-muted-foreground/10"></div>
          </div>
        </div>

        {/* Browser Content */}
        <div className="relative w-full aspect-[16/10] bg-muted">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover object-top"
            data-ai-hint={dataAiHint}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
        </div>
      </div>

      {/* Shadow/Glow Effect */}
      <div className="absolute inset-0 -z-10 blur-2xl opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/50 via-primary/30 to-accent/50"></div>
      </div>
    </div>
  );
}
