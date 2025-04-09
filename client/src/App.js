import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservationList from './components/ReservationList';
import ReservationForm from './components/ReservationForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<ReservationList />} />
            <Route path="/new" element={<ReservationForm />} />
            <Route path="/edit/:id" element={<ReservationForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
