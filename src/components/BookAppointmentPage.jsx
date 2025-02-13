import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./Nav"; 

const BookAppointmentPage = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: "",
    contact: "",
    date: "",
    time: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Booking Details:", userDetails);
    navigate("/"); // Redirect to home after booking
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-8">
      <NavBar /> 
      
      <h1 className="text-4xl font-bold mb-8">Book Appointment</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={userDetails.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg placeholder-black text-black"
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={userDetails.contact}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg placeholder-black text-black"
          required
        />
        <input
          type="date"
          name="date"
          value={userDetails.date}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg placeholder-black text-black"
          required
        />
        <input
          type="time"
          name="time"
          value={userDetails.time}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg placeholder-black text-black"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg bg-accent text-white"

        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointmentPage;
