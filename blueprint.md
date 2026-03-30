# Project Blueprint

## Overview

This is an advanced project management dashboard that provides a comprehensive, real-time view of your project's status. It features a modern, intuitive interface with interactive components that allow you to track key performance indicators (KPIs), visualize your project timeline with a Gantt chart, and stay on top of your budget and resources. The entire application runs in the browser, ensuring that your data remains private and secure.

## How It Works

The application is built as a single-page application (SPA) using Next.js and React. Here is a step-by-step overview of the data flow:

1.  **Upload Your Data:** You start by visiting the "Upload Dataset" page, where you can select an Excel file (.xlsx or .xls) from your computer.
2.  **Client-Side Processing:** When you click "Upload and Analyze," the application reads the Excel file *directly in your browser*. The data is **never** sent to a server.
3.  **Data Analysis:** The application then processes the data, calculating KPIs, formatting it for the Gantt chart, and identifying any important alerts.
4.  **Local Storage:** The processed data is stored in your browser's `localStorage`. This is a small, private database in your browser that allows the data to persist even if you close the page or your browser.
5.  **Dashboard Rendering:** You are then redirected to the main dashboard page, which reads the data from `localStorage` and renders the various components.

## Excel File Requirements

For the application to correctly process your data, your Excel file should have a sheet that contains the following columns. The column names are flexible (e.g., "Task Name" and "Name" are both acceptable).

*   **Task ID:** A unique identifier for each task.
*   **Task Name:** The name of the task.
*   **Start Date:** The date the task is scheduled to begin.
*   **End Date:** The date the task is scheduled to end.
*   **Progress:** The percentage of the task that is complete.
*   **Status:** The current status of the task (e.g., "Not Started," "In Progress," "Completed").
*   **Spent:** The amount of money spent on the task.
*   **Budget:** The budgeted amount for the task.
*   **Resources:** A comma-separated list of resources assigned to the task.

## Implemented Features

*   **KPI Cards:** Displays critical metrics, including overall progress, budget spent, completed tasks, and days remaining.
*   **Gantt Chart:** An interactive timeline that visualizes task dependencies and project progress.
*   **Alerts:** Notifies you of important events, such as upcoming tasks or budget overruns.
*   **Task Lists:** Shows active and pending tasks in a clear, organized view.
*   **Resource Allocation:** Provides an overview of how resources are distributed across tasks.
*   **Dynamic Data Processing:** The dashboard is powered by a flexible data processing engine that can adapt to different Excel file structures.
*   **Client-Side Data Storage:** Uses the browser's `localStorage` to persist your data, so you don't have to re-upload your file every time you visit the page.
*   **Robust Error Handling:** Clear, on-screen error messages guide you if there's a problem with your file, ensuring you're never left in the dark.
*   **Modern Design:** A clean, visually appealing layout with a focus on readability and ease of use.
