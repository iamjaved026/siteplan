import React from 'react';

const AnomalyDetectedPage: React.FC = () => {
  const anomalies = [
    { id: 'AN-023', date: '2024-07-28', severity: 'High', description: 'Unexpected spike in resource allocation for Task-A.' },
    { id: 'AN-024', date: '2024-07-27', severity: 'Medium', description: 'Budget overrun of 15% in Q3 projection.' },
    { id: 'AN-025', date: '2024-07-27', severity: 'Low', description: 'Minor delay in supplier delivery for concrete materials.' },
    { id: 'AN-026', date: '2024-07-26', severity: 'High', description: 'Critical safety alert triggered at Site-B crane operation.' },
  ];

  return (
    <div className="card">
      <div className="ch">
        <div className="ct">Anomaly Detected</div>
        <button style={{
          background: 'var(--blue)',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '8px 15px',
          fontSize: '12px',
          fontWeight: 500,
          cursor: 'pointer',
        }}>Run Detection</button>
      </div>
      <table className="gtbl" style={{marginTop: '20px'}}>
        <thead>
          <tr>
            <th style={{textAlign: 'left'}}>Anomaly ID</th>
            <th>Date</th>
            <th>Severity</th>
            <th style={{textAlign: 'left', width: '50%'}}>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {anomalies.map(anomaly => (
            <tr key={anomaly.id}>
              <td style={{textAlign: 'left'}}>{anomaly.id}</td>
              <td style={{textAlign: 'center'}}>{anomaly.date}</td>
              <td style={{textAlign: 'center'}}>
                <span className={`pill ${anomaly.severity === 'High' ? 'po' : anomaly.severity === 'Medium' ? 'py' : 'pg'}`}>
                  {anomaly.severity}
                </span>
              </td>
              <td style={{textAlign: 'left'}}>{anomaly.description}</td>
              <td style={{textAlign: 'center'}}><a href="#" className="ca">View Details</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnomalyDetectedPage;
