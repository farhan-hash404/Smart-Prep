import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BookCard from './BookCard';

const Subjects = () => {
  const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);

  const subjects = [
    {
      title: 'Physics',
      imageUrl: 'https://war.org.pk/wp-content/uploads/2022/10/KPK-and-Federal-Textbook-Physics-For-Grade-12-141302-1.jpg',
      pdfUrl: 'https://pctb.punjab.gov.pk/system/files/Physics%209.pdf',
    },
    {
      title: 'Biology',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0w885bqJ81czWoOmkwg9fAsJ38f5OISoNzQ&s',
      pdfUrl: 'https://pctb.punjab.gov.pk/system/files/Biology%209.pdf',
    },
    {
      title: 'Chemistry',
      imageUrl: 'https://awazeinqilab.com/wp-content/uploads/Chemistry-9th-class-kpk-textbook.jpg',
      pdfUrl: 'https://pctb.punjab.gov.pk/system/files/Chemistry%209.pdf',
    },
    {
      title: 'Mathematics',
      imageUrl: 'https://welcomebooks.pk/wp-content/uploads/2024/09/maths-9.jpeg',
      pdfUrl: 'https://pctb.punjab.gov.pk/system/files/Mathematics%209.pdf',
    },
    {
      title: 'Urdu',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3gF2j9-C48Hr6mUMWs5JW76mYoKWuzd5WQQ&s',
      pdfUrl: 'https://pctb.punjab.gov.pk/system/files/Urdu%209.pdf',
    },
    {
      title: 'English',
      imageUrl: 'https://imgv2-1-f.scribdassets.com/img/document/558174608/original/a7988518a0/1?v=1',
      pdfUrl: 'https://invent.ilmkidunya.com/images/Section/9th-New-Syllabus-English-Full-Book-PDF.pdf',
    },
  ];

  return (
    <div className="bg-green-200 min-h-screen px-6 py-10">
      <div className="max-w-7xl mx-auto mb-6">
        <Link 
          to="/#notes-section" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Notes
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-neutral-800">📚 Class 9 Textbooks</h1>

        {selectedPdfUrl && (
          <div className="mb-10">
            <iframe
              src={selectedPdfUrl}
              width="100%"
              height="800px"
              title="PDF Viewer"
              frameBorder="0"
              className="rounded-xl border shadow-xl"
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject, index) => (
            <BookCard
              key={index}
              title={subject.title}
              imageUrl={subject.imageUrl}
              onView={() => setSelectedPdfUrl(subject.pdfUrl)}
              onDownload={() => {
                const link = document.createElement('a');
                link.href = subject.pdfUrl;
                link.download = `${subject.title}.pdf`;
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;