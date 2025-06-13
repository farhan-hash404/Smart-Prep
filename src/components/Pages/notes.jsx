import React from 'react';
import { Link } from 'react-router-dom';

const Notes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 to-purple-300 flex flex-col items-center justify-center p-6">
      {/* Content Section */}
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          📚 Classes
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
          {/* 9th Class Card */}
          <div className="border-2 border-blue-200 rounded-xl shadow-xl p-8 w-full max-w-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br from-blue-300 to-green-300">
            <div className="flex justify-center">
              <img
                src="https://edusaksham.com//eduadmin/public/uploads/classs/1571659996.png"
                alt="9th Class"
                className="h-48 object-contain mb-6"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-700 text-center mb-6">
              9<sup>th</sup> Class
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/Books/9thClass" className="w-full sm:w-auto">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full hover:brightness-110 transition w-full shadow-md">
                  Books
                </button>
              </Link>
            <Link to="/Notes/9thNotes">  <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full hover:brightness-110 transition w-full sm:w-auto shadow-md">
                Notes
              </button>
              </Link>
            </div>
          </div>

          {/* 10th Class Card */}
          <div className="border-2 border-purple-100 rounded-xl shadow-xl p-8 w-full max-w-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br from-blue-300 to-green-300">
            <div className="flex justify-center">
              <img
                src="https://edusaksham.com//eduadmin/public/uploads/classs/1571752088.png"
                alt="10th Class"
                className="h-48 object-contain mb-6"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-purple-700 text-center mb-6">
              10<sup>th</sup> Class
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/Books/10thClass" className="w-full sm:w-auto">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full hover:brightness-110 transition w-full shadow-md">
                  Books
                </button>
              </Link>
            <Link to="/Notes/10thNotes">  <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full hover:brightness-110 transition w-full sm:w-auto shadow-md">
                Notes
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;