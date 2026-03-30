'use client';

import React from 'react';

const BudgetCard: React.FC<{ budget: { totalBudget: number; budgetSpent: number } }> = ({ budget }) => {
  const { totalBudget, budgetSpent } = budget;
  const percentage = (budgetSpent / totalBudget) * 100;

  return (
    <div className="bud-c">
      <div className="ch">
        <div className="ct">Budget</div>
      </div>
      <div className="bud-g">
        <div className="bud-p">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#eee"
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#D85A30"
              strokeWidth="10"
              strokeDasharray={`${percentage * 2.83} 283`}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="bud-pt">{percentage.toFixed(0)}%</div>
        </div>
        <div className="bud-d">
          <div>
            <div className="bud-l">Spent</div>
            <div className="bud-v">${budgetSpent.toLocaleString()}</div>
          </div>
          <div>
            <div className="bud-l">Total</div>
            <div className="bud-v">${totalBudget.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetCard;
