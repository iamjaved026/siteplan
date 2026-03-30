import React from 'react';

interface KPICardProps {
  title: string;
  value: string;
  unit?: string;
  change: string;
  changeType: 'up' | 'down';
  progress: number;
  color: string;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, unit, change, changeType, progress, color }) => {
  const colorClass = () =>{
    switch(color) {
      case '#378ADD': return 'kb';
      case '#D85A30': return 'ko';
      case '#639922': return 'kg';
      case '#EF9F27': return 'ky';
    }
  }
  return (
    <div className={`kpi ${colorClass()}`}>
        <div className="kl">{title}</div>
        <div className="kv">{value}{unit && <span>{unit}</span>}</div>
        <div className={`ks ${changeType}`}>{change}</div>
        <div className="kb2">
            <div className="kbf" style={{ width: `${progress}%`, background: color }}></div>
        </div>
    </div>
  );
};

export default KPICard;
