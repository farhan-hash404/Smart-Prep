import React from 'react';
import { Eye, Download } from 'lucide-react';

const BookCard = ({ title, imageUrl, onView, onDownload }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 w-full max-w-xs mx-auto">
      {/* Image Container with perfect centering */}
      <div className="h-48 bg-green-300 flex items-center justify-center p-4 border-b border-gray-100">
        <img
          src={imageUrl}
          alt={title}
          className="max-h-full max-w-full object-contain rounded-sm shadow-sm"
          style={{ maxHeight: '180px', maxWidth: '160px' }}
        />
      </div>
      
      {/* Content Area */}
      <div className="p-4 flex flex-col items-center bg-orange-200">
        <h3 className="text-lg font-medium text-gray-800 text-center mb-4 line-clamp-2">
          {title}
        </h3>
        
        {/* Action Buttons */}
        <div className="flex gap-3 w-full justify-center">
          <button
            onClick={onView}
            className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white text-sm rounded-lg hover:bg-blue-100 hover:text-black hover:border-2 hover:border-orange-300  transition-colors shadow-sm"
          >
            <Eye size={16} className="flex-shrink-0" />
            <span>View</span>
          </button>
          <button
            onClick={onDownload}
            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 text-sm rounded-lg  transition-colors border border-gray-200 shadow-sm"
          >
            <Download size={16} className="flex-shrink-0" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;