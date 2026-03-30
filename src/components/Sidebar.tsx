'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const pathname = usePathname();

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="s-logo">
            <div className="s-icon"><svg viewBox="0 0 14 14" fill="none"><rect x="1" y="7" width="3" height="6" rx="0.5" fill="#fff"/><rect x="5.5" y="4" width="3" height="9" rx="0.5" fill="#fff"/><rect x="10" y="1" width="3" height="12" rx="0.5" fill="#fff"/></svg></div>
            <span className="s-title">BuildTrack Pro</span>
        </div>
        <div className="s-label">Menu</div>
        <Link href="/" className={`nav ${pathname === '/' ? 'on' : ''}`}>
          <svg viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="5" height="5" rx="1" fill="currentColor" opacity=".9"/><rect x="8" y="1" width="5" height="5" rx="1" fill="currentColor" opacity=".5"/><rect x="1" y="8" width="5" height="5" rx="1" fill="currentColor" opacity=".5"/><rect x="8" y="8" width="5" height="5" rx="1" fill="currentColor" opacity=".5"/></svg>Dashboard
        </Link>
        <Link href="/projects" className={`nav ${pathname === '/projects' ? 'on' : ''}`}>
          <svg viewBox="0 0 14 14" fill="none"><path d="M7 2.5v6M9.5 5L7 2.5 4.5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.5 8.5v2a1 1 0 001 1h7a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>Projects
        </Link>
        <div className="s-sp"></div>
        <div className="s-user"><div className="av">JR</div><div className="ui"><span>James R.</span><small>Project Manager</small></div></div>
    </div>
  );
};

export default Sidebar;
