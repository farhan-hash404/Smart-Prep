import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Books and Notes',
      description: 'Access textbooks and study notes in PDF format to enhance your learning.',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/6347/6347169.png',
      explorePath: '',
    },
    {
      title: 'SmartGPT AI',
      description: 'Get quick answers and study assistance with our AI-powered chatbot.',
      imageUrl: 'https://img.lovepik.com/element/45003/6034.png_860.png',
      explorePath: '/smartgpt',
    },
    {
      title: 'Group Study',
      description: 'Collaborate with classmates and study together virtually.',
      imageUrl: 'https://media.istockphoto.com/id/1347747136/vector/group-of-students-studying.jpg?s=612x612&w=0&k=20&c=t8UwXDXTCu2O-2mOLE8_aQ7KTXxjuUk_WgiR0cS6pSk=',
      explorePath: '/group-study',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-indigo-200 px-4 py-12">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-3 ">Our Services</h1>
          <p className="text-md md:text-lg text-indigo-700 max-w-2xl mx-auto">
            Discover tools designed to enhance your learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <Link 
              to={service.explorePath} 
              key={index}
              className="group"
            >
              <div className="h-full bg-orange-200 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:border-indigo-100 border border-gray-300 flex flex-col bg-gray-200">
                <div className="flex justify-center items-center h-48 p-6">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 pt-0 text-center flex-grow flex flex-col">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h2>
                  <p className="text-gray-600 mb-0 flex-grow">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;