import React from 'react';

const UploadDatasetPage: React.FC = () => {
  return (
    <div className="card">
      <div className="ch">
        <div className="ct">Upload Dataset</div>
      </div>
      <div style={{textAlign: 'center', padding: '40px'}}>
        <div style={{fontSize: '14px', color: 'var(--text2)', marginBottom: '15px'}}>Select a CSV or Excel file to upload.</div>
        <div style={{
          border: '2px dashed var(--border)',
          borderRadius: '10px',
          padding: '40px 20px',
          background: 'var(--bg)',
          cursor: 'pointer'
        }}>
          <svg style={{width: '40px', height: '40px', color: 'var(--blue-mid)', marginBottom: '10px'}} viewBox="0 0 24 24" fill="none"><path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <div style={{fontSize: '16px', fontWeight: 500, color: 'var(--text)'}}>Drag & drop files here</div>
          <div style={{fontSize: '12px', color: 'var(--text2)', marginTop: '5px'}}>or click to browse</div>
          <input type="file" style={{display: 'none'}}/>
        </div>
        <button style={{
          background: 'var(--blue)',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '12px 20px',
          fontSize: '14px',
          fontWeight: 500,
          cursor: 'pointer',
          marginTop: '20px'
        }}>Upload File</button>
      </div>
    </div>
  );
};

export default UploadDatasetPage;
