import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function StudyHome() {
  useEffect(() => {
    console.log("Navigated to Study Home");
  }, []);

  return (
    <div className="h-full text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Welcome to Study for Students</h1>
      <p className="mb-6">
        Explore an array of study materials to enhance your learning experience!
      </p>
      <div className="space-x-4">
        <Link
          to="/lessons"
          className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
        >
          View Lessons
        </Link>
        <Link
          to="/quizzes"
          className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer"
        >
          Take Quizzes
        </Link>
        <Link
          to="/resources"
          className="bg-purple-500 text-white py-2 px-4 rounded cursor-pointer"
        >
          Explore Resources
        </Link>
      </div>
    </div>
  );
}