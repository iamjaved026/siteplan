import React from 'react';

const WeatherImpact = () => {
  return (
    <div className="card">
      <div className="ch">
        <div className="ct">Weather impact</div>
        <div className="ca">7-day</div>
      </div>
      <div className="wr">
        <div className="wc">
          <div className="wi" style={{ background: '#FAEEDA' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="2.5" fill="#EF9F27" />
              <path d="M6 1v1M6 10v1M1 6h1M10 6h1M2.5 2.5l.7.7M8.8 8.8l.7.7M8.8 2.5l-.7.7M3.2 8.8l-.7.7" stroke="#EF9F27" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
          <div className="wv">38°C</div>
          <div className="wl">Today</div>
          <div className="wim" style={{ color: '#854F0B' }}>Heat delay</div>
        </div>
        <div className="wc">
          <div className="wi" style={{ background: '#E6F1FB' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8.5 5A3 3 0 005.5 2 3 3 0 002 5H2a2.5 2.5 0 002.5 2.5h4.5a1.5 1.5 0 000-3H8.5z" stroke="#378ADD" strokeWidth="1" />
              <path d="M4.5 9v1.5M6.5 8.5v2M8.5 9v1.5" stroke="#378ADD" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
          <div className="wv">Heavy</div>
          <div className="wl">Thu–Fri</div>
          <div className="wim" style={{ color: '#712B13' }}>Concrete hold</div>
        </div>
        <div className="wc">
          <div className="wi" style={{ background: '#EAF3DE' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="2" fill="#639922" />
              <path d="M7.5 5A2.5 2.5 0 005.5 2.5 2.5 2.5 0 003 5H3a2 2 0 002 2h4a1.2 1.2 0 000-2.4H7.5z" stroke="#639922" strokeWidth="1" />
            </svg>
          </div>
          <div className="wv">28°C</div>
          <div className="wl">Weekend</div>
          <div className="wim" style={{ color: '#3B6D11' }}>Clear to work</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherImpact;
