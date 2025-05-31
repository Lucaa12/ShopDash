import React from 'react';
import { DashboardLayout } from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';

function App() {
  // For demo purposes, we'll show the landing page
  // In a real app, this would be handled by routing
  return (
    <Landing />
  );
}

export default App;