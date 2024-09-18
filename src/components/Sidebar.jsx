// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { useRef } from 'react';

const Sidebar = () => (
  <div className="sidebar">
    <h2>Fitting Options</h2>
    <ul>
      <li><Link to="/data-entry">Data Entry</Link></li>
      <li><Link to="/data-table">Data Table View</Link></li>
      <li><Link to="/redundant-tracker">Redundant Tracker</Link></li>
    </ul>
  </div>
);

export default Sidebar;