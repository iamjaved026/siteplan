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

  // Gantt Chart Data
  const ganttData = data.map((task) => ({
    id: getColumn(task, 'taskId'),
    name: getColumn(task, 'taskName'),
    start: getColumn(task, 'startDate'),
    end: getColumn(task, 'endDate'),
    progress: getColumn(task, 'progress'),
  }));

  // Alerts
  const today = new Date();
  const upcomingTasks = data.filter((task) => {
    const startDate = new Date(getColumn(task, 'startDate'));
    // @ts-ignore
    const diffDays = Math.ceil((startDate - today) / (1000 * 3600 * 24));
    return diffDays > 0 && diffDays <= 7;
  });

  const alerts = upcomingTasks.map((task) => ({
    id: getColumn(task, 'taskId'),
    message: `Task "${getColumn(task, 'taskName')}" is starting soon.`,
  }));

  if (budgetSpent > totalBudget) {
    alerts.push({ id: 'budget', message: 'Project is over budget.' });
  }

  // Active Tasks
  const activeTasks = data.filter(
    (task) => getColumn(task, 'status') === 'In Progress' || getColumn(task, 'status') === 'Not Started'
  );

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
  }));

  const result = {
    overallProgress,
    budget: { totalBudget, budgetSpent },
    ganttData,
    alerts,
    activeTasks,
    resourceAllocation,
  };
  console.log('Finished processing data:', result);
  return result;
};
