import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Histories from './routes/Histories';
import History from './routes/History';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/histories/:username' element={<Histories />} />
        <Route path='/history/:id' element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
