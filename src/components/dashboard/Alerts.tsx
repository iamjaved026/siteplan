import React from 'react';

interface AlertProps {
  alerts: any[];
}

const Alerts: React.FC<AlertProps> = ({ alerts }) => {
  return (
    <div className="card">
      <div className="ch">
        <div className="ct">Alerts & conflicts</div>
        <div className="ca">View all</div>
      </div>
      <div className="alerts">
        {alerts.slice(0, 3).map((a, idx) => (
          <div key={idx} className={`al ${a.iconClass || 'abl'}`}>
            <svg viewBox="0 0 15 15" fill="none">
              {a.iconClass === 'ao' && (
                <>
                  <circle cx="7.5" cy="7.5" r="6.5" stroke="#D85A30" strokeWidth="1.2" />
                  <path d="M7.5 5v3.5M7.5 10.5v.5" stroke="#D85A30" strokeWidth="1.4" strokeLinecap="round" />
                </>
              )}
              {a.iconClass === 'ay' && (
                <>
                  <path d="M7.5 2L14 13H1L7.5 2z" stroke="#EF9F27" strokeWidth="1.2" strokeLinejoin="round" />
                  <path d="M7.5 7v3M7.5 12v.5" stroke="#EF9F27" strokeWidth="1.4" strokeLinecap="round" />
                </>
              )}
              {a.iconClass === 'abl' && (
                <>
                  <circle cx="7.5" cy="7.5" r="6.5" stroke="#378ADD" strokeWidth="1.2" />
                  <path d="M7.5 7v4M7.5 5v-.5" stroke="#378ADD" strokeWidth="1.4" strokeLinecap="round" />
                </>
              )}
            </svg>
            <div>
              <div className="at">{a.title}</div>
              <div className="as">{a.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;
