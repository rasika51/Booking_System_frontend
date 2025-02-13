import React, { useState } from "react";
import NavBar from "./Nav"; // Import the NavBar component

const BookedAppointments = () => {
  const [appointments, setAppointments] = useState([
    { date: "2025-02-14", time: "10:00 AM", name: "John Doe", contact: "123-456-7890" },
    { date: "2025-02-14", time: "11:00 AM", name: "Jane Smith", contact: "987-654-3210" },
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [updatedAppointment, setUpdatedAppointment] = useState({
    date: "",
    time: "",
    name: "",
    contact: "",
  });

  // Handle appointment cancel
  const handleCancel = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
  };

  // Handle appointment update
  const handleUpdateClick = (index) => {
    setEditingIndex(index);
    setUpdatedAppointment(appointments[index]);
  };

  const handleUpdateSubmit = () => {
    const updatedAppointments = [...appointments];
    updatedAppointments[editingIndex] = updatedAppointment;
    setAppointments(updatedAppointments);
    setEditingIndex(null); // Reset the editing state
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedAppointment({ ...updatedAppointment, [name]: value });
  };

  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center py-8  mx-4 sm:mx-8 lg:mx-16">
      <NavBar /> {/* Include the NavBar */}
      
      <h1 className="text-4xl font-bold -mt-20 sm:mb-6 md:mb-12">Booked Appointments</h1>

      {/* Conditionally render the appointments or update form */}
      {editingIndex === null ? (
        <div className="w-full max-w-md bg-gray-100 p-4 mt-8 md:mt-4 rounded-lg placeholder-black text-black">
          {appointments.length === 0 ? (
            <p>You have no booked appointments.</p>
          ) : (
            appointments.map((appointment, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{appointment.date} - {appointment.time}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdateClick(index)}
                    className="bg-accent text-white bg-green-500 px-4 py-2 rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleCancel(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        // Update form
        <div className="mt-8 w-full max-w-md bg-gray-200 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-black">Update Appointment</h2>
          <div>
            <label className="block mb-2 text-black">Date:</label>
            <input
              type="date"
              name="date"
              value={updatedAppointment.date}
              onChange={handleChange}
              className="border p-2 rounded mb-4 w-full placeholder-black text-black"
            />
            <label className="block mb-2 text-black">Time:</label>
            <input
              type="time"
              name="time"
              value={updatedAppointment.time}
              onChange={handleChange}
              className="placeholder-black text-black border p-2 rounded mb-4 w-full"
            />
            <label className="block mb-2 text-black">Name:</label>
            <input
              type="text"
              name="name"
              value={updatedAppointment.name}
              onChange={handleChange}
              className="border p-2 rounded mb-4 w-full placeholder-black text-black"
            />
            <label className="block mb-2 text-black">Contact:</label>
            <input
              type="text"
              name="contact"
              value={updatedAppointment.contact}
              onChange={handleChange}
              className="border p-2 rounded mb-4 placeholder-black text-black w-full"
            />
            <button
              onClick={handleUpdateSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Update Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookedAppointments;
