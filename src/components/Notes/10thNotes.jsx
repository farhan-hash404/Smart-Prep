import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import NotesCard from './NotesCard';

const TenthNotes = () => {
  const [selectedNoteUrl, setSelectedNoteUrl] = useState(null);

  const notes = [
    {
      title: 'Physics Notes',
      imageUrl: 'https://www.freeilm.com/wp-content/uploads/2022/10/Class-10-Physics-Book.png',
      pdfUrl: 'https://pctb.punjab.gov.pk/system/files/Physics%2010.pdf',
    },
    {
      title: 'Biology Notes',
      imageUrl: 'https://newbooksnbooks.pk/cdn/shop/files/c6a25170-fff6-4562-b4a0-40f01f50a98d.jpg?v=1729158739',
      pdfUrl: 'https://pctb.punjab.gov.pk/system/files/Biology%2010_1.pdf',
    },
    {
      title: 'Chemistry Notes',
      imageUrl: 'https://cdn.slidesharecdn.com/ss_thumbnails/chemistry10thinenglishfreebooks-191221151333-thumbnail.jpg?width=640&height=640&fit=bounds',
      pdfUrl: 'https://pctb.punjab.gov.pk/system/files/Chemistry%2010%20EM_0.pdf',
    },
    {
      title: 'Mathematics Notes',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR416a-WHw_byIXdmb14BJ7KyqMuCjC0FUa8ywI_L1nPGcEOHgCDwJGR7ta3B5h52xf44E&usqp=CAU',
      pdfUrl: 'https://pctb.punjab.gov.pk/system/files/Math10(Sc)EM.pdf',
    },
    {
      title: 'Urdu Notes',
      imageUrl: 'https://imgv2-1-f.scribdassets.com/img/document/332424403/original/e3dff59e46/1?v=1',
      pdfUrl: 'https://invent.ilmkidunya.com/images/Section/urdu-class-10th.pdf',
    },
    {
      title: 'English Notes',
      imageUrl: 'https://www.iftikharbookdepot.com/cdn/shop/files/English-Class-10-PTB-13936-Title-01_1200x1200.jpg?v=1713422835',
      pdfUrl: 'https://pctb.punjab.gov.pk/system/files/English%20X_1.pdf',
    },
  ];

  return (
    <div className="bg-green-200 min-h-screen px-6 py-10">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto mb-6">
        <Link 
          to="/" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-neutral-800">📚 10th Class Notes</h1>

        {selectedNoteUrl && (
          <div className="mb-10">
            <iframe
              src={selectedNoteUrl}
              width="100%"
              height="800px"
              title="PDF Viewer"
              frameBorder="0"
              className="rounded-xl border shadow-xl"
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {notes.map((note, index) => (
            <NotesCard
              key={index}
              title={note.title}
              imageUrl={note.imageUrl}
              onView={() => setSelectedNoteUrl(note.pdfUrl)}
              onDownload={() => {
                const link = document.createElement('a');
                link.href = note.pdfUrl;
                link.download = `${note.title}.pdf`;
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

export default TenthNotes;