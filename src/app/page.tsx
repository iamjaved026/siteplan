'use client';

import { useData } from '../context/DataContext';
import KPICard from '../components/dashboard/KPICard';
import CustomGantt from '../components/dashboard/CustomGantt';
import Alerts from '../components/dashboard/Alerts';
import WeatherImpact from '../components/dashboard/WeatherImpact';
import TaskCards from '../components/dashboard/TaskCards';
import TimePredictionChart from '../components/dashboard/TimePredictionChart';
import ResourceCard from '../components/dashboard/ResourceCard';
import BudgetCard from '../components/dashboard/BudgetCard';
import Link from 'next/link';

export default function Home() {
  const { projects, activeProjectId } = useData();

  const activeProject = projects.find(p => p.id === activeProjectId);
  const processedData = activeProject ? activeProject.data : null;

  if (!processedData) {
    return (
      <div className="card" style={{ maxWidth: '600px', margin: '40px auto', textAlign: 'center' }}>
        <div className="ch" style={{ justifyContent: 'center' }}>
          <h1 className="ct" style={{ fontSize: '20px' }}>Welcome to BuildTrack Pro</h1>
        </div>
        <p style={{ margin: '20px 0', fontSize: '14px', color: 'var(--text2)', lineHeight: '1.6' }}>
          No project is currently active. Please select a project from the top navigation bar, or head to the Projects dashboard to upload a new dataset.
        </p>
        <Link href="/projects" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: 'var(--blue-mid)', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontWeight: 500 }}>
          Go to Projects
        </Link>
      </div>
    );
  }

  const { overallProgress, budget, ganttData, timePrediction, alerts, activeTasks, resourceAllocation } = processedData;

  return (
    <>
        <div className="kpi-row">
          <KPICard title="Overall progress" value={overallProgress.toString()} unit="%" change="+4% this week" changeType="up" progress={overallProgress} color="#378ADD" kpiClass="kb" />
          <KPICard title="Budget spent" value={budget.budgetSpent >= 1000000 ? `$${(budget.budgetSpent / 1000000).toFixed(1)}M` : `$${budget.budgetSpent.toLocaleString()}`} change={`$${(Math.abs(budget.totalBudget - budget.budgetSpent)).toLocaleString()} remaining`} changeType={budget.budgetSpent > budget.totalBudget ? 'down' : 'up'} progress={(budget.budgetSpent / (budget.totalBudget || 1)) * 100} color="#D85A30" kpiClass="ko" />
          <KPICard title="Tasks complete" value={(timePrediction.total - activeTasks.length).toString()} unit={`/${timePrediction.total}`} change={`${timePrediction.onTime} on track`} changeType="up" progress={((timePrediction.total - activeTasks.length) / (timePrediction.total || 1)) * 100} color="#639922" kpiClass="kg" />
          <KPICard title="Delayed Tasks" value={timePrediction.delayed.toString()} change={`${timePrediction.atRisk} currently at risk`} changeType="down" progress={(timePrediction.delayed / (timePrediction.total || 1)) * 100} color="#EF9F27" kpiClass="ky" />
        </div>

        <div className="r2">
            <CustomGantt data={ganttData} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                <Alerts alerts={alerts} />
                <WeatherImpact />
            </div>
        </div>

        <div className="r3">
            <TaskCards tasks={activeTasks} />
            <TimePredictionChart prediction={timePrediction} />
            <ResourceCard resources={resourceAllocation} />
            <BudgetCard budget={budget} />
        </div>
    </>
  );
}
