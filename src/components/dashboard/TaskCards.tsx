'use client';

import React from 'react';

const TaskCards: React.FC<{ tasks: any[] }> = ({ tasks }) => {
  return (
    <div className="tcard-c">
      <div className="ch">
        <div className="ct">Task status</div>
      </div>
      <div className="tcard-g">
        {tasks.map((task) => (
          <div className="tcard" key={task['Task ID']}>
            <div>
              <div className="tcard-t">{task['Task Name']}</div>
              <div className="tcard-s">Due: {new Date(task['End Date']).toLocaleDateString()}</div>
            </div>
            <div
              className={`tcard-st ${task.Status === 'In Progress' ? 'in-progress' : 'not-started'}`}>
              {task.Status}
            </div>
          </div>
        ))}
        {tasks.length === 0 && <p>No active tasks.</p>}
      </div>
    </div>
  );
};

export default TaskCards;
