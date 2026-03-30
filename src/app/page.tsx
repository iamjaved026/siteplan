import KPICard from '../components/dashboard/KPICard';
import GanttSection from '../components/dashboard/GanttSection';
import Alerts from '../components/dashboard/Alerts';
import TimePredictionCard from '../components/dashboard/TimePredictionCard';
import TaskCards from '../components/dashboard/TaskCards';
import ResourceCard from '../components/dashboard/ResourceCard';
import BudgetCard from '../components/dashboard/BudgetCard';
import WeatherCard from '../components/dashboard/WeatherCard';

export default function Home() {
  return (
    <>
        <div className="kpi-row">
            <KPICard title="Overall progress" value="67" unit="%" change="+4% this week" changeType="up" progress={67} color="#378ADD" />
            <KPICard title="Budget spent" value="$4.2M" change="+$210K over plan" changeType="down" progress={78} color="#D85A30" />
            <KPICard title="Tasks complete" value="18" unit="/27" change="3 ahead of schedule" changeType="up" progress={66} color="#639922" />
            <KPICard title="Days remaining" value="42" change="ETA: Aug 14, 2025" changeType="down" progress={55} color="#EF9F27" />
        </div>

        <div className="r2">
            <GanttSection />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                <Alerts />
                <WeatherCard />
            </div>
        </div>

        <div className="r3">
            <TaskCards />
            <TimePredictionCard />
            <ResourceCard />
            <BudgetCard />
        </div>
    </>
  );
}
