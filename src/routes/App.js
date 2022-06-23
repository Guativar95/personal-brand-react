import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Routes
import Home from '../pages/Home/Home.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
