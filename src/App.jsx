import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';  // Your landing page component
import AuthenticationPage from './components/AuthenticationPage'; // Your auth page component
import Dashboard from './components/Dashboard'; // Your dashboard component
import BookAppointmentPage from "./components/BookAppointmentPage";
import BookedAppointments from "./components/BookedAppointments";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthenticationPage />} />
        <Route path="/signup" element={<AuthenticationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/book-appointment" element={<BookAppointmentPage />} />
        <Route path="/booked-appointments" element={<BookedAppointments />} />
      </Routes>
    </Router>
  );
}

export default App;
