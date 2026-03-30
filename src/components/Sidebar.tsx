import React from 'react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="s-logo">
        <div className="s-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="7" width="3" height="6" rx="0.5" fill="#fff"/><rect x="5.5" y="4" width="3" height="9" rx="0.5" fill="#fff"/><rect x="10" y="1" width="3" height="12" rx="0.5" fill="#fff"/></svg></div>
        <span className="s-title">BuildTrack Pro</span>
      </div>
      <div className="s-label">Menu</div>
      <div className="nav on"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="5" height="5" rx="1" fill="currentColor" opacity=".9"/><rect x="8" y="1" width="5" height="5" rx="1" fill="currentColor" opacity=".5"/><rect x="1" y="8" width="5" height="5" rx="1" fill="currentColor" opacity=".5"/><rect x="8" y="8" width="5" height="5" rx="1" fill="currentColor" opacity=".5"/></svg>Dashboard</div>
      <div className="nav"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 4h12M1 8h12M1 12h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>Tasks</div>
      <div className="nav"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="4.5" cy="4.5" r="3" stroke="currentColor" strokeWidth="1.2"/><circle cx="9.5" cy="9.5" r="3" stroke="currentColor" strokeWidth="1.2"/><path d="M6.5 4.5h5M2.5 9.5H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>Resources</div>
      <div className="nav"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12V5l5-3 5 3v7M5 12V9h4v3" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>Reports</div>
      <div className="nav"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="7" cy="7" r="1.8" stroke="currentColor" strokeWidth="1.2"/><path d="M7 1.5v2M7 10.5v2M1.5 7h2M10.5 7h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>Settings</div>
      <div className="s-sp"></div>
      <div className="s-user"><div className="av">JR</div><div className="ui"><span>James R.</span><small>Project Manager</small></div></div>
    </div>
  );
};

export default Sidebar;
