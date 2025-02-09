import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <Link to="/lessons" className="text-white cursor-pointer">
            Lessons
          </Link>
        </li>
        <li>
          <Link to="/quizzes" className="text-white cursor-pointer">
            Quizzes
          </Link>
        </li>
        <li>
          <Link to="/resources" className="text-white cursor-pointer">
            Resources
          </Link>
        </li>
      </ul>
    </nav>
  );
}