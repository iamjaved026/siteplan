import React, { useState, useRef, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { useRouter } from 'next/navigation';

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => {
  const { projects, activeProjectId, setActiveProject } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeProject = projects.find((p) => p.id === activeProjectId);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (id: string) => {
    setActiveProject(id);
    setIsOpen(false);
    router.push('/');
  };

  const handleNew = () => {
    setIsOpen(false);
    router.push('/projects');
  };

  return (
    <div className="topbar">
      <div className="menu-btn" onClick={onMenuClick}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </div>
      
      <div style={{ position: 'relative' }} ref={dropdownRef}>
        <div 
           className="tb-title" 
           onClick={() => setIsOpen(!isOpen)} 
           style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', padding: '4px 8px', borderRadius: '4px', background: isOpen ? 'var(--surface2)' : 'transparent', transition: 'background 0.2s' }}
        >
          {activeProject ? activeProject.name : 'Select a Project'}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none' }}>
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        {isOpen && (
          <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: '8px', width: '220px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '6px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 100, overflow: 'hidden' }}>
            {projects.length === 0 ? (
              <div style={{ padding: '12px', fontSize: '12px', color: 'var(--text2)', textAlign: 'center' }}>No projects found.</div>
            ) : (
              <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {projects.map(p => (
                  <div 
                    key={p.id}
                    onClick={() => handleSelect(p.id)}
                    style={{ padding: '10px 12px', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--surface2)', backgroundColor: p.id === activeProjectId ? 'var(--blue-light)' : 'transparent', color: p.id === activeProjectId ? 'var(--blue-dark)' : 'var(--text)' }}
                    onMouseOver={(e) => { if(p.id !== activeProjectId) e.currentTarget.style.backgroundColor = 'var(--surface2)' }}
                    onMouseOut={(e) => { if(p.id !== activeProjectId) e.currentTarget.style.backgroundColor = 'transparent' }}
                  >
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</span>
                    {p.id === activeProjectId && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                  </div>
                ))}
              </div>
            )}
            <div 
              onClick={handleNew}
              style={{ padding: '10px 12px', fontSize: '12px', fontWeight: 500, color: 'var(--blue-mid)', cursor: 'pointer', borderTop: '1px solid var(--border)', background: 'var(--surface)' }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--surface2)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--surface)'}
            >
              + Upload New Project
            </div>
          </div>
        )}
      </div>

      <div className="tb-sp"></div>
    </div>
  );
};

export default Topbar;
