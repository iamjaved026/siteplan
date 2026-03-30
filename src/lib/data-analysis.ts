const columnMapping: { [key: string]: string[] } = {
  taskId: ['Task ID', 'ID'],
  taskName: ['Task Name', 'Name'],
  startDate: ['Start Date', 'Start'],
  endDate: ['End Date', 'End'],
  progress: ['Progress', 'Completion'],
  status: ['Status', 'State'],
  spent: ['Spent', 'Cost'],
  budget: ['Budget'],
  resources: ['Resources', 'Assignee'],
};

const getColumn = (task: any, key: string) => {
  const possibleColumns = columnMapping[key];
  for (const col of possibleColumns) {
    if (task[col] !== undefined) {
      return task[col];
    }
  }
  return undefined;
};

export const processData = (data: any[]) => {
  console.log('Processing data inside processData function:', data);
  // Overall Progress
  const completedTasks = data.filter(
    (task) => getColumn(task, 'status') === 'Completed'
  ).length;
  const totalTasks = data.length;
  const overallProgress = Math.round((completedTasks / totalTasks) * 100);

  // Budget Spent
  const budgetSpent = data.reduce((acc, task) => acc + (getColumn(task, 'spent') || 0), 0);
  const totalBudget = data.reduce((acc, task) => acc + (getColumn(task, 'budget') || 0), 0);

  // Enhanced Gantt and Active Tasks with Status
  const ganttData: any[] = [];
  const activeTasks: any[] = [];
  let onTimeCount = 0;
  let atRiskCount = 0;
  let delayedCount = 0;

  const todayStr = new Date().toISOString().split('T')[0];

  data.forEach((task) => {
    const sDate = task['Start Date'] || task.Start || task.startDate;
    const eDate = task['End Date'] || task.End || task.endDate;
    
    // Parse to ensure correct math
    const start = new Date(sDate).getTime();
    const end = new Date(eDate).getTime();
    const current = new Date().getTime();

    const taskName = getColumn(task, 'taskName');
    const progressStr = getColumn(task, 'progress') || 0;
    const progress = typeof progressStr === 'number' ? progressStr : parseFloat(progressStr as string);
    const resourcesStr = getColumn(task, 'resources') || '';

    let taskStatus = 'On-time';
    let pillClass = 'pg';

    if (!isNaN(start) && !isNaN(end)) {
      const totalDuration = end - start;
      const elapsed = current - start;
      const expectedProgress = Math.max(0, Math.min(100, (elapsed / totalDuration) * 100));

      if (elapsed > 0 && progress < 100) {
        if (expectedProgress - progress > 20) {
          taskStatus = 'Delayed';
          pillClass = 'po';
          delayedCount++;
        } else if (expectedProgress - progress > 5) {
          taskStatus = 'At risk';
          pillClass = 'py';
          atRiskCount++;
        } else {
          onTimeCount++;
        }
      } else {
        onTimeCount++;
      }
    } else {
      onTimeCount++;
    }

    const taskObj = {
      id: getColumn(task, 'taskId'),
      name: taskName,
      start: sDate,
      end: eDate,
      progress: progress,
      statusStr: taskStatus,
      pillClass: pillClass,
      assignee: resourcesStr.split(',')[0] || 'Unassigned',
      durationDays: !isNaN(start) && !isNaN(end) ? Math.ceil((end - start) / (1000 * 3600 * 24)) : 0
    };

    ganttData.push(taskObj);

    if (getColumn(task, 'status') !== 'Completed' && progress < 100) {
      activeTasks.push(taskObj);
    }
  });

  const timePrediction = {
    onTime: onTimeCount,
    atRisk: atRiskCount,
    delayed: delayedCount,
    total: ganttData.length
  };

  // Alerts
  const today = new Date();
  const upcomingTasks = data.filter((task) => {
    const startDate = new Date(getColumn(task, 'startDate'));
    // @ts-expect-error
    const diffDays = Math.ceil((startDate - today) / (1000 * 3600 * 24));
    return diffDays > 0 && diffDays <= 7;
  });

  const alerts = upcomingTasks.map((task) => ({
    type: 'upcoming',
    id: getColumn(task, 'taskId'),
    title: `Task "${getColumn(task, 'taskName')}" starts soon`,
    desc: 'Starts within 7 days',
    iconClass: 'abl',
  }));

  if (budgetSpent > totalBudget) {
    alerts.push({ type: 'budget', id: 'budget', title: 'Project is over budget', desc: 'Costs exceed plan', iconClass: 'ao' });
  }

  // Inject a mock delay alert if we have delayed tasks to match UI style
  if (delayedCount > 0) {
    alerts.unshift({ type: 'delay', id: 'delay-1', title: `${delayedCount} task(s) critically delayed`, desc: 'Resource rerouting suggested', iconClass: 'ao' });
  }

  // Resource Allocation
  const resources: { [key: string]: number } = {};
  data.forEach((task) => {
    const resourceString = getColumn(task, 'resources');
    if (resourceString) {
      resourceString.split(',').forEach((resource: string) => {
        const name = resource.trim();
        if (resources[name]) {
          resources[name]++;
        } else {
          resources[name] = 1;
        }
      });
    }
  });

  const resourceAllocation = Object.keys(resources).map((name) => ({
    name,
    tasks: resources[name],
    usagePercent: Math.min(100, resources[name] * 20) // Mock utilization %
  }));

  // Budget Breakout Mocking for UI
  const budgetBreakout = [
    { name: 'Materials', spent: budgetSpent * 0.4, planned: totalBudget * 0.35, color: '#D85A30' },
    { name: 'Labour', spent: budgetSpent * 0.3, planned: totalBudget * 0.35, color: '#378ADD' },
    { name: 'Equipment', spent: budgetSpent * 0.2, planned: totalBudget * 0.2, color: '#EF9F27' },
    { name: 'Subcontractors', spent: budgetSpent * 0.1, planned: totalBudget * 0.1, color: '#639922' }
  ];

  const result = {
    overallProgress,
    budget: { totalBudget, budgetSpent, breakout: budgetBreakout },
    ganttData,
    timePrediction,
    alerts,
    activeTasks,
    resourceAllocation,
  };
  console.log('Finished processing data:', result);
  return result;
};
