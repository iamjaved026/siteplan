'use client';
import { useState } from 'react';
import './globals.css';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { DataProvider } from '../context/DataContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
      <body>
        <DataProvider>
          <div className="dash">
            <Sidebar isOpen={isSidebarOpen} />
            <main className="main">
              <Topbar onMenuClick={toggleSidebar} />
              <div className="content">{children}</div>
            </main>
            {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
          </div>
        </DataProvider>
      </body>
    </html>
  );
}
