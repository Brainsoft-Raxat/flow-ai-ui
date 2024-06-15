import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    navigate('/chat');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to ChatGPT Interface</h1>
      <p className="text-lg mb-8">Experience our AI-driven chat interface.</p>
      <button
        onClick={handleDemoClick}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Try the Demo
      </button>
    </div>
  );
};

export default LandingPage;