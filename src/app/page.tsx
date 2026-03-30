'use client';

import { useEffect, useState } from 'react';
import { processData } from '../lib/data-analysis';
import KPICard from '../components/dashboard/KPICard';
import GanttSection from '../components/dashboard/GanttSection';
import Alerts from '../components/dashboard/Alerts';
import TaskCards from '../components/dashboard/TaskCards';
import ResourceCard from '../components/dashboard/ResourceCard';
import BudgetCard from '../components/dashboard/BudgetCard';

export default function Home() {
  const [processedData, setProcessedData] = useState<any>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('processedData');
    if (storedData) {
      setProcessedData(JSON.parse(storedData));
    }
  }, []);

  if (!processedData) {
    return (
      <div className="card">
        <div className="ch">
          <h1 className="ct">Welcome to Your Dashboard</h1>
        </div>
        <p>Please upload a dataset from the 'Upload Dataset' page to get started. Once you upload an Excel file, the dashboard will populate with the latest project data.</p>
      </div>
    );
  }

  const { overallProgress, budget, ganttData, alerts, activeTasks, resourceAllocation } = processedData;

  return (
    <>
        <div className="kpi-row">
          <KPICard title="Overall progress" value={overallProgress.toString()} unit="%" change="+4% this week" changeType="up" progress={overallProgress} color="#378ADD" kpiClass="kb" />
          <KPICard title="Budget spent" value={budget.budgetSpent.toLocaleString()} change={`$${(budget.totalBudget - budget.budgetSpent).toLocaleString()} remaining`} changeType={budget.budgetSpent > budget.totalBudget ? 'down' : 'up'} progress={(budget.budgetSpent / budget.totalBudget) * 100} color="#D85A30" kpiClass="ko" />
        </div>

        <div className="r2">
            <GanttSection data={ganttData} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                <Alerts alerts={alerts} />
            </div>
        </div>

        <div className="r3">
            <TaskCards tasks={activeTasks} />
            <ResourceCard resources={resourceAllocation} />
            <BudgetCard budget={budget} />
        </div>
    </>
  );
}
