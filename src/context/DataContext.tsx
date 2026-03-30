'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';

export interface Project {
  id: string;
  name: string;
  data: any;
  timestamp: number;
}

interface DataContextType {
  projects: Project[];
  activeProjectId: string | null;
  addProject: (name: string, data: any) => void;
  setActiveProject: (id: string) => void;
  removeProject: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('buildtrack_projects');
    const storedActive = localStorage.getItem('buildtrack_active_id');
    
    // Auto-migrate legacy data format if they had it
    const legacyData = localStorage.getItem('processedData');
    if (stored) {
      setProjects(JSON.parse(stored));
    } else if (legacyData) {
      const parsedLegacy = JSON.parse(legacyData);
      if (parsedLegacy.timePrediction) {
        const id = Date.now().toString();
        const initialProj = [{ id, name: 'Imported Dataset', data: parsedLegacy, timestamp: Date.now() }];
        setProjects(initialProj);
        setActiveProjectId(id);
        localStorage.setItem('buildtrack_projects', JSON.stringify(initialProj));
        localStorage.setItem('buildtrack_active_id', id);
        localStorage.removeItem('processedData'); // clean up legacy
      }
    }

    if (storedActive) {
      setActiveProjectId(storedActive);
    }
    setIsLoaded(true);
  }, []);

  const saveProjects = (newProjects: Project[], newActiveId: string | null) => {
    setProjects(newProjects);
    setActiveProjectId(newActiveId);
    localStorage.setItem('buildtrack_projects', JSON.stringify(newProjects));
    if (newActiveId) {
      localStorage.setItem('buildtrack_active_id', newActiveId);
    } else {
      localStorage.removeItem('buildtrack_active_id');
    }
  };

  const addProject = (name: string, data: any) => {
    const newProj: Project = { 
      id: Date.now().toString() + Math.random().toString(36).substring(7),
      name,
      data,
      timestamp: Date.now()
    };
    const updated = [...projects, newProj];
    saveProjects(updated, newProj.id);
  };

  const setActiveProject = (id: string) => {
    saveProjects(projects, id);
  };

  const removeProject = (id: string) => {
    const updated = projects.filter(p => p.id !== id);
    const newActiveId = activeProjectId === id 
        ? (updated.length > 0 ? updated[0].id : null) 
        : activeProjectId;
    saveProjects(updated, newActiveId);
  };

  if (!isLoaded) return null; // Avoid hydration mismatch

  return (
    <DataContext.Provider value={{ projects, activeProjectId, addProject, setActiveProject, removeProject }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
