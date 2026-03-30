import React from 'react';

interface ResourceProps {
  resources: any[];
}

const ResourceCard: React.FC<ResourceProps> = ({ resources }) => {
  return (
    <div className="card">
      <div className="ch">
        <div className="ct">Resource availability</div>
        <div className="ca">Manage</div>
      </div>
      <div style={{ fontSize: '11px', color: 'var(--text2)', marginBottom: '9px' }}>
        Dynamic Resource Utilization
      </div>
      <div className="rg">
        {resources.slice(0, 6).map((r, idx) => {
           const pct = r.usagePercent || 50;
           let color = '#378ADD';
           if (pct >= 90) color = '#D85A30';
           else if (pct >= 70) color = '#EF9F27';
           else if (pct >= 40) color = '#639922';

           return (
            <div key={idx} className="ri">
              <div className="rt">
                <div className="rn">{r.name}</div>
                <div className="rp">{pct}%</div>
              </div>
              <div className="rb">
                <div className="rf" style={{ width: `${pct}%`, background: color }}></div>
              </div>
              {pct === 0 && <div className="ru">Unavailable</div>}
            </div>
           );
        })}
      </div>
      <div style={{ marginTop: '11px', paddingTop: '9px', borderTop: '0.5px solid var(--border)' }}>
        <div style={{ fontSize: '11px', color: 'var(--text2)', marginBottom: '7px' }}>Worker allocation (Mock)</div>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '36px' }}>
          <div style={{ flex: 1, background: '#378ADD', height: '80%', borderRadius: '3px 3px 0 0', position: 'relative' }}>
            <span style={{ position: 'absolute', bottom: '-13px', left: '50%', transform: 'translateX(-50%)', fontSize: '9px', color: 'var(--text2)', whiteSpace: 'nowrap' }}>Found.</span>
          </div>
          <div style={{ flex: 1, background: '#EF9F27', height: '95%', borderRadius: '3px 3px 0 0', position: 'relative' }}>
            <span style={{ position: 'absolute', bottom: '-13px', left: '50%', transform: 'translateX(-50%)', fontSize: '9px', color: 'var(--text2)', whiteSpace: 'nowrap' }}>Steel</span>
          </div>
          <div style={{ flex: 1, background: '#D85A30', height: '60%', borderRadius: '3px 3px 0 0', position: 'relative' }}>
            <span style={{ position: 'absolute', bottom: '-13px', left: '50%', transform: 'translateX(-50%)', fontSize: '9px', color: 'var(--text2)', whiteSpace: 'nowrap' }}>Conc.</span>
          </div>
          <div style={{ flex: 1, background: '#639922', height: '30%', borderRadius: '3px 3px 0 0', position: 'relative' }}>
            <span style={{ position: 'absolute', bottom: '-13px', left: '50%', transform: 'translateX(-50%)', fontSize: '9px', color: 'var(--text2)', whiteSpace: 'nowrap' }}>Deck</span>
          </div>
          <div style={{ flex: 1, background: 'var(--border)', height: '20%', borderRadius: '3px 3px 0 0', position: 'relative' }}>
            <span style={{ position: 'absolute', bottom: '-13px', left: '50%', transform: 'translateX(-50%)', fontSize: '9px', color: 'var(--text2)', whiteSpace: 'nowrap' }}>Other</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
