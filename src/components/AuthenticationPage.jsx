import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthenticationPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");  // Redirect to dashboard on successful login/signup
  };

  return (
    <div className="min-h-screen flex w-screen">
      {/* Left Column: Title and Authentication Form */}
      <div className="w-full sm:w-3/5 flex flex-col items-center justify-center py-16 px-8">
        <h1 className="text-4xl font-bold text-center mb-8">SlotBooker</h1>
        <div className="w-full sm:w-96">
          <h2 className="text-2xl font-semibold text-center mb-6">{isLogin ? 'Login' : 'Sign Up'}</h2>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            {/* Show Name field only for Signup */}
            {!isLogin && (
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder-black text-black"
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder-black text-black"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder-black text-black"
              required
            />
            {/* Show Phone Number field only for Signup */}
            {!isLogin && (
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder-black text-black"
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

      {/* Right Column: Cover Image */}
      <div className="hidden sm:block w-screen sm:w-2/5 bg-cover bg-center" style={{ backgroundImage: "url('/auth1.png')" }}></div>
    </div>
  );
};

export default AuthenticationPage;
