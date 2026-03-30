'use client';

import { useState, ChangeEvent } from 'react';
import * as XLSX from 'xlsx';
import { useRouter } from 'next/navigation';
import { processData } from '../../lib/data-analysis';
import { useData } from '../../context/DataContext';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'upload' | 'create'>('upload');
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const router = useRouter();
  const { projects, activeProjectId, addProject, setActiveProject, removeProject } = useData();

  // Manual Form State
  const [formData, setFormData] = useState({
    name: '',
    budget: '',
    startDate: new Date().toISOString().split('T')[0],
    template: 'commercial'
  });

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.name.endsWith('.xlsx') || droppedFile.name.endsWith('.xls')) {
        setFile(droppedFile);
        setError(null);
      } else {
        setError('Please upload a valid Excel file (.xlsx or .xls).');
      }
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleUploadSubmit = () => {
    setError(null);
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        if (event.target) {
          const data = event.target.result;
          const workbook = XLSX.read(data, { type: 'binary', cellDates: true });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          if (!worksheet) {
            throw new Error('Could not find a valid sheet in the Excel file.');
          }
          const json = XLSX.utils.sheet_to_json(worksheet);

          if (json.length === 0) {
            throw new Error('The Excel sheet is empty or could not be read correctly.');
          }

          const processed = processData(json);
          const projectName = file.name.replace(/\.[^/.]+$/, ""); // strip extension
          
          addProject(projectName, processed);
          router.push('/');
        }
      } catch (err: any) {
        setError(`Processing failed: ${err.message}`);
      }
    };

    reader.onerror = () => {
      setError('An error occurred while reading the file.');
    };

    reader.readAsBinaryString(file);
  };

  const generateTemplateTasks = () => {
    const start = new Date(formData.startDate);
    const totalBudget = parseFloat(formData.budget) || 100000;
    
    const addDays = (d: Date, days: number) => {
      const result = new Date(d);
      result.setDate(result.getDate() + days);
      return result.toISOString().split('T')[0];
    };

    const s = start.toISOString().split('T')[0];

    // Build a baseline raw payload mimicking the standard Excel structure
    if (formData.template === 'residential') {
      return [
        { "ID": "R-01", "Name": "Land Clearing", "Start": s, "End": addDays(start, 5), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": totalBudget * 0.1, "Assignee": "Site Crew" },
        { "ID": "R-02", "Name": "Foundation Pour", "Start": addDays(start, 6), "End": addDays(start, 14), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": totalBudget * 0.2, "Assignee": "Concrete Team" },
        { "ID": "R-03", "Name": "Framing", "Start": addDays(start, 15), "End": addDays(start, 35), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": totalBudget * 0.4, "Assignee": "Carpenters" },
        { "ID": "R-04", "Name": "Roofing & Finish", "Start": addDays(start, 36), "End": addDays(start, 50), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": totalBudget * 0.3, "Assignee": "Contractors" }
      ];
    } else if (formData.template === 'infrastructure') {
      return [
        { "ID": "I-01", "Name": "Survey & Design Approval", "Start": s, "End": addDays(start, 20), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": totalBudget * 0.15, "Assignee": "Engineering" },
        { "ID": "I-02", "Name": "Heavy Earthworks", "Start": addDays(start, 21), "End": addDays(start, 45), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": totalBudget * 0.35, "Assignee": "Excavators" },
        { "ID": "I-03", "Name": "Structural Implementation", "Start": addDays(start, 46), "End": addDays(start, 80), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": totalBudget * 0.5, "Assignee": "Steel Workers" }
      ];
    } else {
      // commercial default
      return [
        { "ID": "C-01", "Name": "Excavation", "Start": s, "End": addDays(start, 10), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": totalBudget * 0.1, "Assignee": "Ex-Crew" },
        { "ID": "C-02", "Name": "Steel Core Erection", "Start": addDays(start, 11), "End": addDays(start, 40), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": totalBudget * 0.4, "Assignee": "Crane Operators" },
        { "ID": "C-03", "Name": "HVAC Rough-in", "Start": addDays(start, 35), "End": addDays(start, 55), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": totalBudget * 0.2, "Assignee": "Plumbing" },
        { "ID": "C-04", "Name": "Interior Fit-out", "Start": addDays(start, 50), "End": addDays(start, 90), "Progress": 0, "Status": "Not Started", "Spent": 0, "Budget": totalBudget * 0.3, "Assignee": "Interior Team" }
      ];
    }
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!formData.name.trim()) {
      setError('Project name is required.');
      return;
    }

    try {
      const rawTasks = generateTemplateTasks();
      const processed = processData(rawTasks); // feed simulated data to timeline processor
      addProject(formData.name.trim(), processed);
      router.push('/');
    } catch (err: any) {
      setError(`Failed to process template: ${err.message}`);
    }
  };

  const handleOpenProject = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveProject(id);
    router.push('/');
  };

  const handleDeleteProject = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    removeProject(id);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Existing Projects List */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="ch">
          <h1 className="ct" style={{ fontSize: '18px' }}>Your Projects</h1>
          <div className="ca">{projects.length} project(s)</div>
        </div>
        
        {projects.length === 0 ? (
           <p style={{ fontSize: '13px', color: 'var(--text2)', padding: '20px 0', textAlign: 'center' }}>No projects available. Start a new one below.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
            {projects.map((proj) => (
               <div key={proj.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 15px', border: '1px solid var(--border)', borderRadius: '6px', background: activeProjectId === proj.id ? 'var(--blue-light)' : 'transparent' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                   <span style={{ fontSize: '14px', fontWeight: 500, color: activeProjectId === proj.id ? 'var(--blue-dark)' : 'var(--text)' }}>{proj.name}</span>
                   <span style={{ fontSize: '11px', color: 'var(--text2)' }}>Created: {new Date(proj.timestamp).toLocaleDateString()}</span>
                 </div>
                 <div style={{ display: 'flex', gap: '10px' }}>
                   <button onClick={(e) => handleOpenProject(proj.id, e)} style={{ padding: '6px 14px', background: '#378ADD', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 500 }}>Open</button>
                   <button onClick={(e) => handleDeleteProject(proj.id, e)} style={{ padding: '6px 10px', background: 'transparent', color: 'var(--orange-dark)', border: '1px solid var(--orange-dark)', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 500 }}>Delete</button>
                 </div>
               </div>
            ))}
          </div>
        )}
      </div>

      {/* Creation Zone */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', marginBottom: '20px' }}>
          <button 
            onClick={() => { setActiveTab('upload'); setError(null); }}
            style={{ flex: 1, padding: '14px', background: 'none', border: 'none', borderBottom: activeTab === 'upload' ? '2px solid var(--blue-mid)' : '2px solid transparent', color: activeTab === 'upload' ? 'var(--blue-mid)' : 'var(--text2)', fontWeight: 500, cursor: 'pointer', fontSize: '14px', transition: 'all 0.2s' }}
          >
            Upload .xlsx Dataset
          </button>
          <button 
            onClick={() => { setActiveTab('create'); setError(null); }}
            style={{ flex: 1, padding: '14px', background: 'none', border: 'none', borderBottom: activeTab === 'create' ? '2px solid var(--blue-mid)' : '2px solid transparent', color: activeTab === 'create' ? 'var(--blue-mid)' : 'var(--text2)', fontWeight: 500, cursor: 'pointer', fontSize: '14px', transition: 'all 0.2s' }}
          >
            Create Manually
          </button>
        </div>
        
        {activeTab === 'upload' ? (
          <>
            <p style={{ fontSize: '12px', color: 'var(--text2)', marginBottom: '20px' }}>
              Drag and drop an Excel file containing project tasks to instantly compile the project. The file name acts as the project name.
            </p>
            
            <div 
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              style={{ 
                border: `2px dashed ${isDragging ? 'var(--blue-mid)' : 'var(--border)'}`, 
                backgroundColor: isDragging ? 'var(--blue-light)' : 'var(--surface2)',
                borderRadius: '10px',
                padding: '40px 20px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                marginBottom: '20px'
              }}
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              <svg style={{ width: '40px', height: '40px', color: isDragging ? 'var(--blue-mid)' : 'var(--text2)', margin: '0 auto 10px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <div style={{ fontSize: '14px', fontWeight: 500, color: isDragging ? 'var(--blue-dark)' : 'var(--text)' }}>
                {file ? file.name : 'Click or Drag & Drop Excel File Here'}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text2)', marginTop: '5px' }}>
                Supports .xls and .xlsx up to 10MB
              </div>
              <input 
                id="file-upload" 
                type="file" 
                onChange={handleFileChange} 
                accept=".xlsx, .xls" 
                style={{ display: 'none' }} 
              />
            </div>

            <button 
              onClick={handleUploadSubmit} 
              disabled={!file}
              style={{ padding: '12px 20px', borderRadius: '6px', border: 'none', backgroundColor: file ? 'var(--blue-mid)' : 'var(--border)', color: file ? '#fff' : 'var(--text2)', cursor: file ? 'pointer' : 'not-allowed', fontWeight: 500, transition: 'background-color 0.2s' }}
            >
              {file ? 'Import and Analyze' : 'Select a file to continue'}
            </button>
          </>
        ) : (
          <form onSubmit={handleCreateSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
             <p style={{ fontSize: '12px', color: 'var(--text2)', marginBottom: '4px' }}>
                Set up a blank project using an intelligent template. You will be able to manage these phases in the dashboard.
             </p>
             
             <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
               <label style={{ fontSize: '13px', fontWeight: 500 }}>Project Name *</label>
               <input 
                 type="text" 
                 required 
                 placeholder="e.g. City Central Mall"
                 value={formData.name} 
                 onChange={e => setFormData({...formData, name: e.target.value})}
                 style={{ padding: '9px 12px', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '13px', background: 'var(--surface)' }}
               />
             </div>

             <div style={{ display: 'flex', gap: '15px' }}>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                 <label style={{ fontSize: '13px', fontWeight: 500 }}>Target Start Date</label>
                 <input 
                   type="date" 
                   required
                   value={formData.startDate} 
                   onChange={e => setFormData({...formData, startDate: e.target.value})}
                   style={{ padding: '9px 12px', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '13px', background: 'var(--surface)' }}
                 />
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                 <label style={{ fontSize: '13px', fontWeight: 500 }}>Total Budget ($)</label>
                 <input 
                   type="number" 
                   required
                   placeholder="1500000"
                   min="0"
                   value={formData.budget} 
                   onChange={e => setFormData({...formData, budget: e.target.value})}
                   style={{ padding: '9px 12px', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '13px', background: 'var(--surface)' }}
                 />
               </div>
             </div>

             <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
               <label style={{ fontSize: '13px', fontWeight: 500 }}>Project Template Module</label>
               <select 
                 value={formData.template} 
                 onChange={e => setFormData({...formData, template: e.target.value})}
                 style={{ padding: '9px 12px', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '13px', background: 'var(--surface)' }}
               >
                 <option value="commercial">Commercial Building (Default)</option>
                 <option value="residential">Residential Development</option>
                 <option value="infrastructure">Heavy Infrastructure / Roadway</option>
               </select>
             </div>

             <button 
              type="submit"
              disabled={!formData.name}
              style={{ marginTop: '10px', padding: '12px 20px', borderRadius: '6px', border: 'none', backgroundColor: formData.name ? 'var(--blue-mid)' : 'var(--border)', color: formData.name ? '#fff' : 'var(--text2)', cursor: formData.name ? 'pointer' : 'not-allowed', fontWeight: 500, transition: 'background-color 0.2s' }}
            >
              Initialize Template Project
            </button>
          </form>
        )}

        {error && (
          <div style={{ marginTop: '20px', backgroundColor: 'var(--orange-light)', color: 'var(--orange-dark)', padding: '12px', borderRadius: '6px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg style={{ width: '14px', height: '14px', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            {error}
          </div>
        )}
      </div>
    </div>
  );
}