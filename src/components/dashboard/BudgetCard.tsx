import React from 'react';

const BudgetCard: React.FC = () => {
  return (
    <div className="card">
      <div className="ch"><div className="ct">Budget vs actual</div><div className="ca">Full report</div></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '11px' }}>
        <div><div style={{ fontSize: '11px', color: 'var(--text2)' }}>Total budget</div><div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)' }}>$5.4M</div></div>
        <div style={{ textAlign: 'right' }}><div style={{ fontSize: '11px', color: 'var(--text2)' }}>Spent</div><div style={{ fontSize: '15px', fontWeight: 500, color: '#D85A30' }}>$4.2M</div></div>
      </div>
      <div className="br2">
        <div><div className="brl"><span className="brn">Materials</span><span className="brvs">$1.8M / $1.6M</span></div><div className="bt2"><div className="bp2" style={{ left: '89%' }}></div><div className="ba2" style={{ width: '100%', background: '#D85A30', opacity: 0.85 }}></div></div></div>
        <div><div className="brl"><span className="brn">Labour</span><span className="brvs">$1.4M / $1.5M</span></div><div className="bt2"><div className="bp2" style={{ left: '93%' }}></div><div className="ba2" style={{ width: '87%', background: '#378ADD' }}></div></div></div>
        <div><div className="brl"><span className="brn">Equipment</span><span className="brvs">$680K / $700K</span></div><div className="bt2"><div className="bp2" style={{ left: '97%' }}></div><div className="ba2" style={{ width: '94%', background: '#EF9F27' }}></div></div></div>
        <div><div className="brl"><span className="brn">Subcontractors</span><span className="brvs">$320K / $400K</span></div><div className="bt2"><div className="bp2" style={{ left: '80%' }}></div><div className="ba2" style={{ width: '75%', background: '#639922' }}></div></div></div>
      </div>
      <div className="bl">
        <div className="bli"><div className="bls" style={{ background: '#378ADD' }}></div>Actual</div>
        <div className="bli"><div style={{ width: '10px', height: 0, borderTop: '2px dashed rgba(0,0,0,0.22)' }}></div>Planned</div>
      </div>
    </div>
  );
};

export default BudgetCard;
