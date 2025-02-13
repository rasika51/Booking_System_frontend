import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthenticationPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });
  const navigate = useNavigate();

  // Check if the user is already logged in by checking the token in localStorage
  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      navigate('/dashboard');  // Redirect to dashboard if user is already logged in
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = isLogin ? '/api/login' : '/api/register';
    const data = isLogin
      ? { email: formData.email, password: formData.password }
      : { name: formData.name, email: formData.email, password: formData.password, phone: formData.phone };

    try {
      const response = await axios.post(apiUrl, data);
      if (response.data.token) {
        // Save token to localStorage or sessionStorage
        localStorage.setItem('authToken', response.data.token);
        navigate('/dashboard');  // Redirect to dashboard on successful login/signup
      } else {
        alert(response.data.message); // Show any error message
      }
    } catch (error) {
      console.error(error);
      alert('Error occurred, please try again!');
    }
  };

  return (
    <div className="min-h-screen flex w-screen">
      <div className="w-full sm:w-3/5 flex flex-col items-center justify-center py-16 px-8">
        <h1 className="text-4xl font-bold text-center mb-8">SlotBooker</h1>
        <div className="w-full sm:w-96">
          <h2 className="text-2xl font-semibold text-center mb-6">{isLogin ? 'Login' : 'Sign Up'}</h2>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder-black text-black"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder-black text-black"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder-black text-black"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {!isLogin && (
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder-black text-black"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            )}
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-lg"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <div className="mt-4 text-center">
            <button
              className="text-accent"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </div>
      <div className="hidden sm:block w-screen sm:w-2/5 bg-cover bg-center" style={{ backgroundImage: "url('/auth1.png')" }}></div>
    </div>
  );
};

export default AuthenticationPage;
