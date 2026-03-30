const XLSX = require('xlsx');
const fs = require('fs');

const today = new Date();
const addDays = (days) => {
  const d = new Date(today);
  d.setDate(d.getDate() + days);
  return d;
};

const formatD = (d) => d.toISOString().split('T')[0];

const projects = [
  {
    fileName: "High_Rise_Commercial_Phase1.xlsx",
    sheetName: "Build Schedule",
    data: [
      { "ID": "HR-01", "Name": "Excavation & Shoring", "Start": formatD(addDays(-45)), "End": formatD(addDays(-15)), "Progress": 100, "Status": "Completed", "Spent": 1200000, "Budget": 1100000, "Assignee": "R. Patel, Excavator" },
      { "ID": "HR-02", "Name": "Foundation & Basement", "Start": formatD(addDays(-14)), "End": formatD(addDays(15)), "Progress": 55, "Status": "In Progress", "Spent": 850000, "Budget": 1500000, "Assignee": "T. Zhang, Mixer" },
      { "ID": "HR-03", "Name": "Steel Core Erection", "Start": formatD(addDays(-5)), "End": formatD(addDays(40)), "Progress": 8, "Status": "In Progress", "Spent": 150000, "Budget": 2800000, "Assignee": "M. Okafor, Crane #1" },
      { "ID": "HR-04", "Name": "Floor Slabs", "Start": formatD(addDays(16)), "End": formatD(addDays(60)), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": 900000, "Assignee": "A. Kowalski" },
      { "ID": "HR-05", "Name": "HVAC Rough-in", "Start": formatD(addDays(45)), "End": formatD(addDays(90)), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": 600000, "Assignee": "K. Ibrahim" }
    ]
  },
  {
    fileName: "Residential_Valley_Estate.xlsx",
    sheetName: "Valley Estate Dev",
    data: [
      { "Task ID": "RE-10", "Task Name": "Land Grading", "Start Date": formatD(addDays(-20)), "End Date": formatD(addDays(-2)), "Progress": 100, "Status": "Completed", "Spent": 80000, "Budget": 85000, "Resources": "Bulldozer #3" },
      { "Task ID": "RE-11", "Task Name": "Underground Utilities", "Start Date": formatD(addDays(-5)), "End Date": formatD(addDays(12)), "Progress": 40, "Status": "In Progress", "Spent": 95000, "Budget": 120000, "Resources": "J. Doe, Plumbers" },
      { "Task ID": "RE-12", "Task Name": "Pour Slab Lot 1-5", "Start Date": formatD(addDays(2)), "End Date": formatD(addDays(14)), "Progress": 10, "Status": "In Progress", "Spent": 15000, "Budget": 50000, "Resources": "T. Zhang, Concrete" },
      { "Task ID": "RE-13", "Task Name": "Framing Lot 1-5", "Start Date": formatD(addDays(15)), "End Date": formatD(addDays(30)), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": 180000, "Resources": "Carpentry Crew A" },
      { "Task ID": "RE-14", "Task Name": "Roofing Lot 1-5", "Start Date": formatD(addDays(31)), "End Date": formatD(addDays(40)), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": 90000, "Resources": "Roofing Crew B" }
    ]
  },
  {
    fileName: "Interstate_Highway_Repaving.xlsx",
    sheetName: "I-95 Repaving",
    data: [
      { "ID": "HW-A", "Name": "Milling Mile 1-3", "Start": formatD(addDays(-10)), "End": formatD(addDays(0)), "Progress": 100, "Status": "Completed", "Spent": 150000, "Budget": 140000, "Assignee": "Milling Machine 1" },
      { "ID": "HW-B", "Name": "Base Paving Mile 1-3", "Start": formatD(addDays(1)), "End": formatD(addDays(7)), "Progress": 15, "Status": "In Progress", "Spent": 45000, "Budget": 220000, "Assignee": "Paver 2" },
      { "ID": "HW-C", "Name": "Milling Mile 4-6", "Start": formatD(addDays(8)), "End": formatD(addDays(15)), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": 140000, "Assignee": "Milling Machine 1" },
      { "ID": "HW-D", "Name": "Surface Paving Mile 1-3", "Start": formatD(addDays(10)), "End": formatD(addDays(16)), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": 280000, "Assignee": "Paver 1" },
      { "ID": "HW-E", "Name": "Line Striping Mile 1-3", "Start": formatD(addDays(17)), "End": formatD(addDays(20)), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": 30000, "Assignee": "Striping Truck" }
    ]
  },
  {
    fileName: "Solar_Park_Installation.xlsx",
    sheetName: "Solar Array Alpha",
    data: [
      { "Task ID": "SP-1", "Task Name": "Site Fencing", "Start Date": formatD(addDays(-30)), "End Date": formatD(addDays(-20)), "Progress": 100, "Status": "Completed", "Spent": 25000, "Budget": 25000, "Resources": "Fence Co." },
      { "Task ID": "SP-2", "Task Name": "Mounting Structures", "Start Date": formatD(addDays(-15)), "End Date": formatD(addDays(5)), "Progress": 85, "Status": "In Progress", "Spent": 120000, "Budget": 150000, "Resources": "Steel Crew" },
      { "Task ID": "SP-3", "Task Name": "Panel Installation", "Start Date": formatD(addDays(-2)), "End Date": formatD(addDays(25)), "Progress": 8, "Status": "In Progress", "Spent": 350000, "Budget": 800000, "Resources": "Electrical Team 1" },
      { "Task ID": "SP-4", "Task Name": "Inverter Wiring", "Start Date": formatD(addDays(10)), "End Date": formatD(addDays(30)), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": 200000, "Resources": "Electrical Team 2" },
      { "Task ID": "SP-5", "Task Name": "Grid Connection", "Start Date": formatD(addDays(35)), "End Date": formatD(addDays(40)), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": 50000, "Resources": "Utility Co." }
    ]
  },
  {
    fileName: "Hospital_Wing_Renovation.xlsx",
    sheetName: "East Wing",
    data: [
      { "ID": "HW-01", "Name": "Demolition", "Start": formatD(addDays(-15)), "End": formatD(addDays(-5)), "Progress": 100, "Status": "Completed", "Spent": 35000, "Budget": 30000, "Assignee": "Demo Crew" },
      { "ID": "HW-02", "Name": "Stud Framing", "Start": formatD(addDays(-4)), "End": formatD(addDays(10)), "Progress": 60, "Status": "In Progress", "Spent": 15000, "Budget": 25000, "Assignee": "Carpenters" },
      { "ID": "HW-03", "Name": "O2 & Medical Gas Lines", "Start": formatD(addDays(2)), "End": formatD(addDays(15)), "Progress": 5, "Status": "In Progress", "Spent": 5000, "Budget": 80000, "Assignee": "Spec Plumbers" },
      { "ID": "HW-04", "Name": "Electrical & IT Wiring", "Start": formatD(addDays(5)), "End": formatD(addDays(20)), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": 60000, "Assignee": "IT & Electrical" },
      { "ID": "HW-05", "Name": "Drywall & Paint", "Start": formatD(addDays(21)), "End": formatD(addDays(35)), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": 40000, "Assignee": "Finishers" },
      { "ID": "HW-06", "Name": "Equipment Installation", "Start": formatD(addDays(36)), "End": formatD(addDays(45)), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": 450000, "Assignee": "Medical Techs" }
    ]
  }
];

projects.forEach(project => {
  const worksheet = XLSX.utils.json_to_sheet(project.data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, project.sheetName);
  XLSX.writeFile(workbook, project.fileName);
  console.log(`Created ${project.fileName}`);
});

console.log('All 5 sample templates generated successfully!');
