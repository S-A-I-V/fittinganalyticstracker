// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Correct import in App.js
import Sidebar from './components/Sidebar';
import DataEntry from './components/DataEntry';
import DataTable from './components/DataTable';
import RedundantTracker from './components/RedundantTracker';
import './App.css';
import { useRef } from 'react';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<DataEntry />} />
            <Route path="/data-entry" element={<DataEntry />} />
            <Route path="/data-table" element={<DataTable />} />
            <Route path="/redundant-tracker" element={<RedundantTracker />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;