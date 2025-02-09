import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import StudyHome from './StudyHome';
import Lessons from './Lessons';
import Quizzes from './Quizzes';
import Resources from './Resources';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow h-full p-4">
          <Routes>
            <Route path="/" element={<StudyHome />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </div>
        <footer className="text-center p-4">
          <a
            href="https://www.zapt.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-blue-500 underline"
          >
            Made on ZAPT
          </a>
        </footer>
      </div>
    </Router>
  );
}