import React, { useRef } from 'react';
import Navbar from '../navbar';

const ChatAi = () => {
  const ref = useRef();
  
  const handleClick = () => {
    console.log(ref.current.value);
    alert("Data submitted");
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-10">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          {/* Chatbot Header */}
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">SmartGPT - AI Chatbot</h2>
          
          {/* Chatbot Input Section */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-lg w-full mb-6">
              <input
                type="email"
                ref={ref}
                placeholder="Enter your query..."
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Action Button */}
            <button
              onClick={handleClick}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Ask SmartGPT
            </button>
          </div>
          
          {/* Chatbot Footer */}
          <div className="mt-6 text-center text-gray-500 text-sm">
            <p>Need help? Ask any query and get instant answers from SmartGPT!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatAi;
