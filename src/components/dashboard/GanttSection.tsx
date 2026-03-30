'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

const GanttSection: React.FC<{ data: any[] }> = ({ data }) => {
  const ganttContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ganttContainer.current) {
      gantt.config.xml_date = "%Y-%m-%d";
      gantt.init(ganttContainer.current);
      if (data) {
        const formattedTasks = data.map((task, index) => {
          // Ensure dates are parsed and formatted as YYYY-MM-DD strings
          let startDate = task.start;
          let endDate = task.end;
          
          if (task.start) {
            const d = new Date(task.start);
            if (!isNaN(d.getTime())) startDate = d.toISOString().split('T')[0];
          }
          if (task.end) {
            const d = new Date(task.end);
            if (!isNaN(d.getTime())) endDate = d.toISOString().split('T')[0];
          }

          return {
            id: index + 1,
            text: task.name,
            start_date: startDate,
            end_date: endDate,
            progress: task.progress / 100,
          };
        });
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
