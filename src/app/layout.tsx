'use client';

import './globals.css';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { useState } from 'react';

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
        <div className="dash">
          <Sidebar isOpen={isSidebarOpen} />
          <main className="main">
            <Topbar onMenuClick={toggleSidebar} />
            <div className="content">
              {children}
            </div>
          </main>
          {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
        </div>
      </body>
    </html>
  );
}
