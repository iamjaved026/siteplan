'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TimePredictionCard: React.FC = () => {
  const data = {
    labels: ['On-time', 'At risk', 'Delayed'],
    datasets: [{
      data: [15, 7, 5],
      backgroundColor: ['#639922', '#EF9F27', '#D85A30'],
      borderColor: ['#EAF3DE', '#FAEEDA', '#FAECE7'],
      borderWidth: 3,
      hoverOffset: 4
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '62%',
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function(c: any) {
            const total = c.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const pct = Math.round(c.parsed / total * 100);
            return c.label + ': ' + c.parsed + ' tasks (' + pct + '%)';
          }
        }
      }
    }
  };

  return (
    <div className="card">
      <div className="ch"><div className="ct">Time prediction</div><div className="ca">27 tasks</div></div>
      <div style={{ position: 'relative', width: '100%', height: '150px' }}><Doughnut data={data} options={options} /></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}><div style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#639922', flexShrink: 0 }}></div><span style={{ fontSize: '12px', color: 'var(--text)' }}>On-time</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ fontSize: '12px', fontWeight: 500, color: '#3B6D11' }}>15 tasks</span><span style={{ fontSize: '11px', color: 'var(--text2)' }}>56%</span></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}><div style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#EF9F27', flexShrink: 0 }}></div><span style={{ fontSize: '12px', color: 'var(--text)' }}>At risk</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ fontSize: '12px', fontWeight: 500, color: '#633806' }}>7 tasks</span><span style={{ fontSize: '11px', color: 'var(--text2)' }}>26%</span></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}><div style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#D85A30', flexShrink: 0 }}></div><span style={{ fontSize: '12px', color: 'var(--text)' }}>Delayed</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ fontSize: '12px', fontWeight: 500, color: '#712B13' }}>5 tasks</span><span style={{ fontSize: '11px', color: 'var(--text2)' }}>18%</span></div>
        </div>
      </div>
    </div>
  );
};

export default TimePredictionCard;
