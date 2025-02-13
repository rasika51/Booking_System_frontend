import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "./Nav";

const DashboardPage = () => {
  const navigate = useNavigate();

  const availableSlots = {
    "2025-02-14": [
      { time: "10:00 AM" },
      { time: "11:00 AM" },
      { time: "12:00 PM" },
      { time: "1:00 PM" },
      { time: "2:00 PM" },
    ],
    "2025-02-15": [
      { time: "9:00 AM" },
      { time: "10:00 AM" },
      { time: "11:00 AM" },
      { time: "12:00 PM" },
      { time: "1:00 PM" },
    ],
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [slotsForSelectedDate, setSlotsForSelectedDate] = useState(
    availableSlots["2025-02-14"] || []
  );

  const formatDate = (date) => date.toISOString().split("T")[0];

  const onDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = formatDate(date);
    setSlotsForSelectedDate(availableSlots[formattedDate] || []);
  };

  return (
    <div className="relative h-full w-screen">
      <NavBar />

      <div className="flex flex-col items-center justify-center py-8 pt-28 mx-4 sm:mx-8 lg:mx-16">
        <h1 className="text-4xl font-bold text-center mb-8">Appointment Booking System</h1>

        {/* Centralized DatePicker */}
        <div className="flex justify-center items-center mb-6 w-full max-w-md mx-auto">
          <div className="w-full text-center">
            <h2 className="text-2xl font-semibold mb-4">Select a Date</h2>
            <DatePicker
              selected={selectedDate}
              onChange={onDateChange}
              className="border rounded p-2 mx-auto placeholder-black text-black"
            />
          </div>
        </div>

        <div className="w-full max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">Available Time Slots</h2>
          <div className="bg-gray-100 text-black p-4 rounded-lg">
            {slotsForSelectedDate.length > 0 ? (
              slotsForSelectedDate.map((slot, index) => (
                <div key={index} className="flex justify-between mb-2">
                  <span>{slot.time}</span>
                  <button
                    onClick={() => navigate("/book-appointment")}
                    className="bg-accent text-white px-4 py-2 rounded hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    Book
                  </button>
                </div>
              ))
            ) : (
              <span className="text-red-600">No slots available for this date.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
