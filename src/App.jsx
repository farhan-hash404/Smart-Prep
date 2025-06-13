import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Groupstudy from './components/Pages/services';
import ChatAi from './components/Pages/chatAi';
import Contact from './components/Pages/contact';
import Home from './components/Pages/home';
import Notes from './components/Pages/notes';
import Login from './components/buttons/login';
import Subjects9 from './components/Books/9thClass'; 
import Subjects10 from './components/Books/10thClass'; 
import NinthNotes from './components/Notes/9thNotes';
import TenthNotes from './components/Notes/10thNotes';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/groupstudy' element={<Groupstudy />} />
        <Route path='/chatai' element={<ChatAi />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Books/9thClass' element={<Subjects9/>} />
        <Route path='/Books/10thClass' element={<Subjects10 />} />
        <Route path='/Notes/9thNotes' element={<NinthNotes />} />
        <Route path='/Notes/10thNotes' element={<TenthNotes />} />
      </Routes>
    </Router>
  );
}

export default App;
