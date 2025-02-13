import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility for small screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-screen bg-primary p-4 flex justify-between items-center shadow-lg z-50">
      {/* Logo Section (Hide on small screens when menu is open) */}
      {!isMenuOpen && (
        <h1 className="text-white text-2xl font-bold">SLOTBOOKER</h1>
      )}

      {/* Hamburger Menu for small screens */}
      <div className="md:hidden flex items-center absolute right-4 top-4">
        {/* Hamburger Icon - Positioned on the left corner */}
        <div onClick={toggleMenu} className="text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

     {/* Dropdown Menu for small screens (only show when menu is open) */}
{isMenuOpen && (
  <div className="md:hidden absolute top-16 left-0 w-full bg-primary text-white p-4 space-y-4">
    <label
      onClick={() => navigate("/dashboard")}
      className="block text-white px-4 py-2 cursor-pointer hover:bg-primary-dark rounded"
    >
      Dashboard
    </label>
    <label
      onClick={() => navigate("/booked-appointments")}
      className="block text-white px-4 py-2 cursor-pointer hover:bg-primary-dark rounded"
    >
      Booked Appointments
    </label>
    <label
      onClick={() => navigate("/book-appointment")}
      className="block text-white px-4 py-2 cursor-pointer hover:bg-primary-dark rounded"
    >
      Book Appointment
    </label>
  </div>
)}


      {/* Button Section for medium and larger screens */}
      <div className="hidden md:flex space-x-4">
        <button
          onClick={() => navigate("/dashboard")}
          className="text-white px-4 py-2 hover:bg-primary-dark rounded"
        >
          Dashboard
        </button>
        <button
          onClick={() => navigate("/booked-appointments")}
          className="text-white px-4 py-2 hover:bg-primary-dark rounded"
        >
          Booked Appointments
        </button>
        <button
          onClick={() => navigate("/book-appointment")}
          className="text-white px-4 py-2 hover:bg-primary-dark rounded"
        >
          Book Appointment
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
