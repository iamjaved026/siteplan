import React from 'react';

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => {
  return (
    <div className="topbar">
      <div className="menu-btn" onClick={onMenuClick}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </div>
      <div className="tb-title">Metro Bridge Expansion</div>
      <div className="tb-badge">Phase 2</div>
      <div className="tb-sp"></div>
      <div className="srch"><svg width="12" height="12" viewBox="0 0 13 13" fill="none"><circle cx="5.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="1.2"/><path d="M9 9l2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg><input placeholder="Search tasks, resources..."/></div>
      <div className="ibtn"><svg width="14" height="14" viewBox="0 0 15 15" fill="none"><path d="M7.5 1C5 1 3 3 3 5.5c0 3.5-1.5 4.5-1.5 4.5h12S12 9 12 5.5C12 3 10 1 7.5 1z" stroke="currentColor" strokeWidth="1.2"/><path d="M6 11c0 .83.67 1.5 1.5 1.5S9 11.83 9 11" stroke="currentColor" strokeWidth="1.2"/></svg><div className="ndot"></div></div>
      <div className="ibtn"><svg width="14" height="14" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="5" r="3" stroke="currentColor" strokeWidth="1.2"/><path d="M2 13c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg></div>
    </div>
  );
};

export default Topbar;
