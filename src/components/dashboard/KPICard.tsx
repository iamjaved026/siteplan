import React from 'react';

interface KPICardProps {
  title: string;
  value: string;
  unit?: string;
  change: string;
  changeType: 'up' | 'down';
  progress: number;
  color: string;
  kpiClass: string;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, unit, change, changeType, progress, color, kpiClass }) => {
  return (
    <div className={`kpi ${kpiClass}`}>
        <div className="kl">{title}</div>
        <div className="kv">{value}{unit && <span>{unit}</span>}</div>
        <div className={`ks ${changeType === 'up' ? 'up' : 'dn'}`}>{change}</div>
        <div className="kb2">
            <div className="kbf" style={{ width: `${progress}%`, background: color }}></div>
        </div>
    </div>
  );
};

export default KPICard;
