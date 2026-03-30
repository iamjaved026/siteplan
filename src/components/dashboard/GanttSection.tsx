import React from 'react';

const GanttSection: React.FC = () => {
  return (
    <div className="card">
      <div className="ch">
        <div className="ct">Gantt timeline — July 2025</div>
        <div className="leg">
          <div className="ld"><div className="ldd" style={{ background: '#EAF3DE', border: '1px solid #639922' }}></div>On-time</div>
          <div className="ld"><div className="ldd" style={{ background: '#FAEEDA', border: '1px solid #EF9F27' }}></div>At risk</div>
          <div className="ld"><div className="ldd" style={{ background: '#FAECE7', border: '1px solid #D85A30' }}></div>Delayed</div>
        </div>
      </div>
      <table className="gtbl">
        <thead><tr><th style={{ textAlign: 'left', paddingRight: '10px' }}>Task</th><th colSpan={4}>Wk 1</th><th colSpan={4}>Wk 2</th><th colSpan={4}>Wk 3</th><th colSpan={4}>Wk 4</th></tr></thead>
        <tbody>
          <tr><td><div className="tnm">Site prep<small>A. Kowalski · 8w</small></div></td><td colSpan={16}><div className="bw"><div className="gb gb-g" style={{ left: '0%', width: '25%' }}><div className="gp" style={{ width: '100%', background: '#639922' }}></div>100%</div><span className="pill pg" style={{ position: 'absolute', right: 0, top: '4px' }}>Done</span></div></td></tr>
          <tr><td><div className="tnm">Foundation<small>R. Patel · 14w</small></div></td><td colSpan={16}><div className="bw"><div className="gb gb-b" style={{ left: '20%', width: '44%' }}><div className="gp" style={{ width: '72%', background: '#378ADD' }}></div>72%</div><svg style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '24px', overflow: 'visible', pointerEvents: 'none' }} viewBox="0 0 300 24"><defs><marker id="da" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M1 1L7 4L1 7" fill="none" stroke="#888" strokeWidth="1.2" strokeLinecap="round"/></marker></defs><path d="M58 12 L74 12" fill="none" stroke="#888" strokeWidth="1" markerEnd="url(#da)"/></svg></div></td></tr>
          <tr><td><div className="tnm">Steel erection<small>M. Okafor · 22w</small></div></td><td colSpan={16}><div className="bw"><div className="gb gb-y" style={{ left: '40%', width: '40%' }}><div className="gp" style={{ width: '38%', background: '#EF9F27' }}></div>38%</div><span className="pill py" style={{ position: 'absolute', right: 0, top: '4px' }}>At risk</span></div></td></tr>
          <tr><td><div className="tnm">Concrete pour<small>T. Zhang · 10w</small></div></td><td colSpan={16}><div className="bw"><div className="gb gb-o" style={{ left: '55%', width: '35%' }}><div className="gp" style={{ width: '18%', background: '#D85A30' }}></div>18%</div><span className="pill po" style={{ position: 'absolute', right: 0, top: '4px' }}>Delayed</span></div></td></tr>
          <tr><td><div className="tnm">Deck surfacing<small>L. Ferreira · 8w</small></div></td><td colSpan={16}><div className="bw"><div className="gb gb-b" style={{ left: '72%', width: '28%' }}><div className="gp" style={{ width: '5%', background: '#378ADD' }}></div>5%</div></div></td></tr>
          <tr><td><div className="tnm">Railing & safety<small>K. Ibrahim · 6w</small></div></td><td colSpan={16}><div className="bw"><div className="gb gb-g" style={{ left: '85%', width: '15%' }}><div className="gp" style={{ width: '0%', background: '#639922' }}></div>0%</div></div></td></tr>
        </tbody>
      </table>
      <div className="tdl"><div style={{ width: '11px', height: '1.5px', background: '#D85A30' }}></div>Today — July 17</div>
    </div>
  );
};

export default GanttSection;
