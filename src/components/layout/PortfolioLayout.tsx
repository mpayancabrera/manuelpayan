'use client';
import type {ReactNode} from 'react';
import {Sidebar} from '@/components/layout/Sidebar';
import type {ResumeFormData} from '@/lib/types';

interface PortfolioLayoutProps {
  resumeData: ResumeFormData;
  children: ReactNode;
}

export function PortfolioLayout({resumeData, children}: PortfolioLayoutProps) {
  return (
    // The main tag in RootLayout is flex-1 and flex-col. This PortfolioLayout should fill that.
    <div className="flex flex-col md:flex-row flex-1">
      <Sidebar resumeData={resumeData} />
      <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto bg-background">
        <div className="mx-auto max-w-5xl">{children}</div>
      </main>
    </div>
  );
}
