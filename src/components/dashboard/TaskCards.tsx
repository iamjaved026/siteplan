import React from 'react';

interface TaskProps {
  tasks: any[];
}

const TaskCards: React.FC<TaskProps> = ({ tasks }) => {
  return (
    <div className="card">
      <div className="ch">
        <div className="ct">Active tasks</div>
        <div className="ca">+ Add</div>
      </div>
      <div className="tl">
        {tasks.slice(0, 4).map((t, idx) => {
          let fillClass = '#378ADD';
          let pillColorClass = 'pg';
          
          if (t.pillClass === 'po') { fillClass = '#D85A30'; pillColorClass = 'po'; }
          else if (t.pillClass === 'py') { fillClass = '#EF9F27'; pillColorClass = 'py'; }

          // Try to split the assignee/resource string to show chips
          const resources = (t.assignee || '').split(' ');
          
          return (
            <div key={idx} className="tc2">
              <div className="tct">
                <div className="tcn">{t.name}</div>
                <span className={`pill ${pillColorClass}`}>{t.statusStr}</span>
              </div>
              <div className="tcm">{t.durationDays} days · {t.start} · {t.assignee}</div>
              <div className="pb2">
                <div className="pbf" style={{ width: `${Math.round(t.progress)}%`, background: fillClass }}></div>
              </div>
              <div className="tc-ft">
                {resources.slice(0, 2).map((r: string, i: number) => (
                  <span key={i} className="chip">{r}</span>
                ))}
                <span style={{ fontSize: '10px', color: 'var(--text2)', marginLeft: 'auto' }}>
                  {Math.round(t.progress)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskCards;
