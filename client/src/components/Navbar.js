import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">
            Hotel Reservations
          </Link>
          <div className="flex space-x-4">
            <Link 
              to="/" 
              className="px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Reservations
            </Link>
            <Link 
              to="/new" 
              className="px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              New Reservation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
