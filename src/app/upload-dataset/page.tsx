'use client';

import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { useData } from '../../context/DataContext';
import { useRouter } from 'next/navigation';

export default function UploadDataset() {
  const [file, setFile] = useState<File | null>(null);
  const { setData } = useData();
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const binaryStr = event.target?.result;
        if (binaryStr) {
          const workbook = XLSX.read(binaryStr, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          setData(jsonData);
          router.push('/');
        }
      };
      reader.readAsBinaryString(file);
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <div className="card">
      <div className="ch">
        <h1 className="ct">Upload Dataset</h1>
      </div>
      <p>Please upload your Excel file containing the project data. The application will analyze the data and update the dashboard with the latest information.</p>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <input type="file" onChange={handleFileChange} accept=".xlsx, .xls" style={{ display: 'block', marginBottom: '10px' }} />
        <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#378ADD', color: 'white', cursor: 'pointer' }}>
          Upload and Analyze
        </button>
      </form>
    </div>
  );
}
