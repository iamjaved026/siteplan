import React from 'react';

const ResourceCard: React.FC = () => {
  return (
    <div className="card">
      <div className="ch"><div className="ct">Resource availability</div><div className="ca">Manage</div></div>
      <div style={{ fontSize: '11px', color: 'var(--text2)', marginBottom: '9px' }}>Workers: 48 of 60 deployed</div>
      <div className="rg">
        <div className="ri"><div className="rt"><div className="rn">Crane #1</div><div className="rp">90%</div></div><div className="rb"><div className="rf" style={{ width: '90%', background: '#D85A30' }}></div></div></div>
        <div className="ri"><div className="rt"><div className="rn">Crane #2</div><div className="rp">0%</div></div><div className="rb"><div className="rf" style={{ width: '2%', background: '#D85A30' }}></div></div><div className="ru">Unavailable</div></div>
        <div className="ri"><div className="rt"><div className="rn">Excavator</div><div className="rp">55%</div></div><div className="rb"><div className="rf" style={{ width: '55%', background: '#639922' }}></div></div></div>
        <div className="ri"><div className="rt"><div className="rn">Pump truck</div><div className="rp">70%</div></div><div className="rb"><div className="rf" style={{ width: '70%', background: '#EF9F27' }}></div></div></div>
        <div className="ri"><div className="rt"><div className="rn">Welders</div><div className="rp">80%</div></div><div className="rb"><div className="rf" style={{ width: '80%', background: '#EF9F27' }}></div></div></div>
        <div className="ri"><div className="rt"><div className="rn">Surveyors</div><div className="rp">40%</div></div><div className="rb"><div className="rf" style={{ width: '40%', background: '#378ADD' }}></div></div></div>
      </div>
      <div style={{ marginTop: '11px', paddingTop: '9px', borderTop: '0.5px solid var(--border)' }}>
        <div style={{ fontSize: '11px', color: 'var(--text2)', marginBottom: '7px' }}>Worker allocation</div>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '36px' }}>
          <div style={{ flex: 1, background: '#378ADD', height: '80%', borderRadius: '3px 3px 0 0', position: 'relative' }}><span style={{ position: 'absolute', bottom: '-13px', left: '50%', transform: 'translateX(-50%)', fontSize: '9px', color: 'var(--text2)', whiteSpace: 'nowrap' }}>Found.</span></div>
          <div style={{ flex: 1, background: '#EF9F27', height: '95%', borderRadius: '3px 3px 0 0', position: 'relative' }}><span style={{ position: 'absolute', bottom: '-13px', left: '50%', transform: 'translateX(-50%)', fontSize: '9px', color: 'var(--text2)', whiteSpace: 'nowrap' }}>Steel</span></div>
          <div style={{ flex: 1, background: '#D85A30', height: '60%', borderRadius: '3px 3px 0 0', position: 'relative' }}><span style={{ position: 'absolute', bottom: '-13px', left: '50%', transform: 'translateX(-50%)', fontSize: '9px', color: 'var(--text2)', whiteSpace: 'nowrap' }}>Conc.</span></div>
          <div style={{ flex: 1, background: '#639922', height: '30%', borderRadius: '3px 3px 0 0', position: 'relative' }}><span style={{ position: 'absolute', bottom: '-13px', left: '50%', transform: 'translateX(-50%)', fontSize: '9px', color: 'var(--text2)', whiteSpace: 'nowrap' }}>Deck</span></div>
          <div style={{ flex: 1, background: 'var(--border)', height: '20%', borderRadius: '3px 3px 0 0', position: 'relative' }}><span style={{ position: 'absolute', bottom: '-13px', left: '50%', transform: 'translateX(-50%)', fontSize: '9px', color: 'var(--text2)', whiteSpace: 'nowrap' }}>Other</span></div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
