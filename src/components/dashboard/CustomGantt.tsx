import React from 'react';

interface CustomGanttProps {
  data: any[];
}

const CustomGantt: React.FC<CustomGanttProps> = ({ data }) => {
  // Take top 6 tasks for the view or all
  const displayTasks = data.slice(0, 6);
  
  return (
    <div className="card">
      <div className="ch">
        <div className="ct">Gantt timeline — Project Schedule</div>
        <div className="leg">
          <div className="ld"><div className="ldd" style={{ background: '#EAF3DE', border: '1px solid #639922' }}></div>On-time</div>
          <div className="ld"><div className="ldd" style={{ background: '#FAEEDA', border: '1px solid #EF9F27' }}></div>At risk</div>
          <div className="ld"><div className="ldd" style={{ background: '#FAECE7', border: '1px solid #D85A30' }}></div>Delayed</div>
        </div>
      </div>
      <table className="gtbl">
        <thead>
          <tr>
            <th style={{ textAlign: 'left', paddingRight: '10px' }}>Task</th>
            <th colSpan={4}>Wk 1</th>
            <th colSpan={4}>Wk 2</th>
            <th colSpan={4}>Wk 3</th>
            <th colSpan={4}>Wk 4</th>
          </tr>
        </thead>
        <tbody>
          {displayTasks.map((t, idx) => {
            // Distribute visually over 4 weeks (100%) for mock simulation if dynamic dates exceed
            // Actual math would map start/end to a 4-week window. Since data lengths vary, we do a simplistic mapped visual spread.
            const startPct = Math.min(80, Math.max(0, (idx * 15))); 
            const widthPct = Math.max(10, Math.min(100 - startPct, t.durationDays * 2 > 60 ? 40 : t.durationDays * 2));
            
            const isDone = t.progress >= 100;
            const progressWidth = t.progress;
            
            let bgClass = 'gb-b';
            let fillClass = '#378ADD';
            
            if (isDone) {
              bgClass = 'gb-g';
              fillClass = '#639922';
            } else if (t.pillClass === 'po') {
               bgClass = 'gb-o'; fillClass = '#D85A30';
            } else if (t.pillClass === 'py') {
               bgClass = 'gb-y'; fillClass = '#EF9F27';
            } else if (t.pillClass === 'pg') {
               bgClass = 'gb-g'; fillClass = '#639922';
            }

            return (
              <tr key={idx}>
                <td>
                  <div className="tnm">
                    {t.name}
                    <small>{t.assignee} · {t.durationDays}d</small>
                  </div>
                </td>
                <td colSpan={16}>
                  <div className="bw">
                    <div className={`gb ${bgClass}`} style={{ left: `${startPct}%`, width: `${widthPct}%` }}>
                      <div className="gp" style={{ width: `${progressWidth}%`, background: fillClass }}></div>
                      {Math.round(t.progress)}%
                    </div>
                    {isDone && <span className="pill pg" style={{ position: 'absolute', right: 0, top: '4px' }}>Done</span>}
                    {!isDone && t.statusStr !== 'On-time' && (
                       <span className={`pill ${t.pillClass}`} style={{ position: 'absolute', right: 0, top: '4px' }}>{t.statusStr}</span>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="tdl">
        <div style={{ width: '11px', height: '1.5px', background: '#D85A30' }}></div>
        Today timeline
      </div>
    </div>
  );
};

export default CustomGantt;
