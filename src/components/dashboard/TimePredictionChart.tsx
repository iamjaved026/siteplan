import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface TimePredictionProps {
  prediction: {
    onTime: number;
    atRisk: number;
    delayed: number;
    total: number;
  }
}

const TimePredictionChart: React.FC<TimePredictionProps> = ({ prediction }) => {
  const data = {
    labels: ['On-time', 'At risk', 'Delayed'],
    datasets: [{
      data: [prediction.onTime || 1, prediction.atRisk || 0, prediction.delayed || 0],
      backgroundColor: ['#639922', '#EF9F27', '#D85A30'],
      borderColor: ['var(--surface)', 'var(--surface)', 'var(--surface)'],
      borderWidth: 3,
      hoverOffset: 4
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '62%',
    plugins: {
      legend: { display: false }
    }
  };

  const getPct = (val: number) => {
    if (prediction.total === 0) return 0;
    return Math.round((val / prediction.total) * 100);
  };

  return (
    <div className="card">
      <div className="ch">
        <div className="ct">Time prediction</div>
        <div className="ca">{prediction.total} tasks</div>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '150px' }}>
        <Doughnut data={data} options={options} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#639922', flexShrink: 0 }}></div>
            <span style={{ fontSize: '12px', color: 'var(--text)' }}>On-time</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: 500, color: '#3B6D11' }}>{prediction.onTime} tasks</span>
            <span style={{ fontSize: '11px', color: 'var(--text2)' }}>{getPct(prediction.onTime)}%</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#EF9F27', flexShrink: 0 }}></div>
            <span style={{ fontSize: '12px', color: 'var(--text)' }}>At risk</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: 500, color: '#633806' }}>{prediction.atRisk} tasks</span>
            <span style={{ fontSize: '11px', color: 'var(--text2)' }}>{getPct(prediction.atRisk)}%</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#D85A30', flexShrink: 0 }}></div>
            <span style={{ fontSize: '12px', color: 'var(--text)' }}>Delayed</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: 500, color: '#712B13' }}>{prediction.delayed} tasks</span>
            <span style={{ fontSize: '11px', color: 'var(--text2)' }}>{getPct(prediction.delayed)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimePredictionChart;
