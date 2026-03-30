'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

const GanttSection: React.FC<{ data: any[] }> = ({ data }) => {
  const ganttContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ganttContainer.current) {
      gantt.init(ganttContainer.current);
      if (data) {
        const formattedTasks = data.map((task, index) => ({
          id: index + 1,
          text: task.name,
          start_date: task.start,
          end_date: task.end,
          progress: task.progress / 100,
        }));
        gantt.parse({ data: formattedTasks });
      }
    }

    return () => {
      gantt.clearAll();
    };
  }, [data]);

  return (
    <div className="card">
      <div className="ch">
        <div className="ct">Gantt timeline</div>
      </div>
      <div ref={ganttContainer} style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default GanttSection;
