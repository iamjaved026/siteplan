import React from 'react';

const TaskCards: React.FC = () => {
  return (
    <div className="card">
      <div className="ch"><div className="ct">Active tasks</div><div className="ca">+ Add</div></div>
      <div className="tl">
        <div className="tc2">
          <div className="tct"><div className="tcn">Foundation work</div><span className="pill pg">On track</span></div>
          <div className="tcm">14 days · Jul 24 · R. Patel</div><div className="pb2"><div className="pbf" style={{ width: '72%', background: '#378ADD' }}></div></div>
          <div className="tc-ft"><span className="chip">Excavator</span><span className="chip">Mixer</span><span style={{ fontSize: '10px', color: 'var(--text2)', marginLeft: 'auto' }}>72%</span></div>
        </div>
        <div className="tc2">
          <div className="tct"><div className="tcn">Steel erection</div><span className="pill py">At risk</span></div>
          <div className="tcm">21 days · Aug 3 · M. Okafor</div><div className="pb2"><div className="pbf" style={{ width: '38%', background: '#EF9F27' }}></div></div>
          <div className="tc-ft"><span className="chip">Crane #1</span><span className="chip">Welders</span><span style={{ fontSize: '10px', color: 'var(--text2)', marginLeft: 'auto' }}>38%</span></div>
        </div>
        <div className="tc2">
          <div className="tct"><div className="tcn">Concrete pour</div><span className="pill po">Delayed</span></div>
          <div className="tcm">10 days · Aug 8 · T. Zhang</div><div className="pb2"><div className="pbf" style={{ width: '18%', background: '#D85A30' }}></div></div>
          <div className="tc-ft"><span className="chip">Pump truck</span><span className="chip">Formwork</span><span style={{ fontSize: '10px', color: 'var(--text2)', marginLeft: 'auto' }}>18%</span></div>
        </div>
      </div>
    </div>
  );
};

export default TaskCards;
