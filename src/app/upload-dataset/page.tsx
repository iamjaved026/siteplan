'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import * as XLSX from 'xlsx';
import { processData } from '../../lib/data-analysis';
import { useRouter } from 'next/navigation';

export default function UploadDataset() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setError(null); // Clear error when a new file is selected
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    console.log('Form submitted.');
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        console.log('File read successfully.');
        if (event.target) {
          const data = event.target.result;
          const workbook = XLSX.read(data, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          if (!worksheet) {
            throw new Error('Could not find a valid sheet in the Excel file.');
          }
          const json = XLSX.utils.sheet_to_json(worksheet);
          console.log('Raw Excel data:', json);

          if (json.length === 0) {
            throw new Error('The Excel sheet is empty or could not be read correctly.');
          }

          // @ts-ignore
          const processed = processData(json);
          console.log('Processed data:', processed);

          localStorage.setItem('processedData', JSON.stringify(processed));
          console.log('Data stored in localStorage.');

          router.push('/');
        }
      } catch (error: any) {
        console.error('An error occurred during file processing:', error);
        setError(`Processing failed: ${error.message}`);
      }
    };

    reader.onerror = (error) => {
      console.error('Error reading file:', error);
      setError('An error occurred while reading the file.');
    };

    reader.readAsBinaryString(file);
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
      {error && (
        <div style={{ marginTop: '20px', color: 'red', padding: '10px', border: '1px solid red', borderRadius: '5px' }}>
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
}
