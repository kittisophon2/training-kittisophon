/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './page/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './page/Contact';
import Course from './page/Course';
import NotFound from './page/NotFound';

const App = () => {
  return (
   <>
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Course" element={<Course/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    </Router>
   </>
  )
}

export default App