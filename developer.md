# Developer's Guide

Welcome to the project! This guide will help you get started with the development of this advanced project management dashboard.

## Getting Started

This is a Next.js project. To get started, you will need to have Node.js and npm (or yarn) installed on your machine.

1.  **Clone the Repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Run the Development Server:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

## Project Structure

This project follows the standard Next.js App Router structure:

*   **/app:** Contains the core application logic and routing.
    *   **/app/layout.tsx:** The root layout of the application.
    *   **/app/page.tsx:** The main dashboard page.
    *   **/app/upload-dataset/page.tsx:** The page for uploading Excel files.
*   **/components:** Contains all the reusable React components.
    *   **/components/dashboard:** Components that are specific to the dashboard.
*   **/lib:** Contains helper functions and libraries.
    *   **/lib/data-analysis.ts:** The core data processing logic.
*   **/public:** Contains static assets like images and fonts.

## How to Contribute

We welcome contributions to this project! Here are a few guidelines to follow:

*   **Code Style:** Please follow the existing code style. We use Prettier for code formatting, and you can run it with `npm run format`.
*   **Commit Messages:** Please write clear and concise commit messages.
*   **Pull Requests:** When you are ready to submit your changes, please open a pull request with a detailed description of the changes you have made.

## Key Technologies

*   **Next.js:** A React framework for building server-rendered and statically generated web applications.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **XLSX:** A library for reading and writing Excel files in JavaScript.
