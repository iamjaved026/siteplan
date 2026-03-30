import React from 'react';

const Alerts: React.FC = () => {
  return (
    <div className="card">
      <div className="ch"><div className="ct">Alerts & conflicts</div><div className="ca">View all</div></div>
      <div className="alerts">
        <div className="al ao"><svg width="14" height="14" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="7.5" r="6.5" stroke="#D85A30" strokeWidth="1.2"/><path d="M7.5 5v3.5M7.5 10.5v.5" stroke="#D85A30" strokeWidth="1.4" strokeLinecap="round"/></svg><div><div className="at">Concrete pour delayed 3 days</div><div className="as">Crane #2 unavailable — reschedule</div></div></div>
        <div className="al ay"><svg width="14" height="14" viewBox="0 0 15 15" fill="none"><path d="M7.5 2L14 13H1L7.5 2z" stroke="#EF9F27" strokeWidth="1.2" strokeLinejoin="round"/><path d="M7.5 7v3M7.5 12v.5" stroke="#EF9F27" strokeWidth="1.4" strokeLinecap="round"/></svg><div><div className="at">Steel delivery 2-day lag</div><div className="as">NovaCast Steel — rerouting</div></div></div>
        <div className="al abl"><svg width="14" height="14" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="7.5" r="6.5" stroke="#378ADD" strokeWidth="1.2"/><path d="M7.5 7v4M7.5 5v-.5" stroke="#378ADD" strokeWidth="1.4" strokeLinecap="round"/></svg><div><div className="at">Inspection due Friday</div><div className="as">Structural sign-off — Inspector D.W.</div></div></div>
      </div>
    </div>
  );
};

export default Alerts;
