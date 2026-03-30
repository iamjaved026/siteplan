'use client';
import { useState } from 'react';
import './globals.css';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

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
          <div className="main">
            <Topbar onMenuClick={toggleSidebar} />
            <div className="content">{children}</div>
          </div>
          {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
        </div>
      </body>
    </html>
  );
}
