import React from 'react';

interface BudgetBreakdownItem {
  name: string;
  spent: number;
  planned: number;
  color: string;
}

interface BudgetProps {
  budget: {
    totalBudget: number;
    budgetSpent: number;
    breakout?: BudgetBreakdownItem[];
  };
}

const BudgetCard: React.FC<BudgetProps> = ({ budget }) => {
  const { totalBudget, budgetSpent, breakout = [] } = budget;

  const formatCurrency = (val: number) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
    return `$${val}`;
  };

  return (
    <div className="card">
      <div className="ch">
        <div className="ct">Budget vs actual</div>
        <div className="ca">Full report</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '11px' }}>
        <div>
          <div style={{ fontSize: '11px', color: 'var(--text2)' }}>Total budget</div>
          <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)' }}>{formatCurrency(totalBudget)}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '11px', color: 'var(--text2)' }}>Spent</div>
          <div style={{ fontSize: '15px', fontWeight: 500, color: '#D85A30' }}>{formatCurrency(budgetSpent)}</div>
        </div>
      </div>
      <div className="br2">
        {breakout.map((b, idx) => {
          const plannedPct = Math.min(100, Math.max(0, (b.planned / Math.max(b.planned, b.spent)) * 100));
          const spentPct = Math.min(100, (b.spent / b.planned) * 100);
          
          return (
            <div key={idx}>
              <div className="brl">
                <span className="brn">{b.name}</span>
                <span className="brvs">{formatCurrency(b.spent)} / {formatCurrency(b.planned)}</span>
              </div>
              <div className="bt2">
                <div className="bp2" style={{ left: `${plannedPct}%` }}></div>
                <div className="ba2" style={{ width: `${spentPct}%`, background: b.color, opacity: b.spent > b.planned ? 0.85 : 1 }}></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bl">
        <div className="bli"><div className="bls" style={{ background: '#378ADD' }}></div>Actual</div>
        <div className="bli"><div style={{ width: '10px', height: 0, borderTop: '2px dashed rgba(0,0,0,0.22)' }}></div>Planned</div>
      </div>
    </div>
  );
};

export default BudgetCard;
