'use client';

import React from 'react';

const Alerts: React.FC<{ alerts: { id: string | number; message: string }[] }> = ({ alerts }) => {
  return (
    <div className="acard">
      <div className="ch">
        <div className="ct">Alerts</div>
      </div>
      <div className="al">
        {alerts.map((alert) => (
          <div className="al-i" key={alert.id}>
            <div className="al-t">{alert.message}</div>
          </div>
        ))}
        {alerts.length === 0 && <p>No alerts to display.</p>}
      </div>
    </div>
  );
};

export default Alerts;
