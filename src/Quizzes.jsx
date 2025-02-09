import React, { useEffect } from 'react';

export default function Quizzes() {
  useEffect(() => {
    console.log("Navigated to Quizzes");
  }, []);

  return (
    <div className="h-full text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Quizzes</h1>
      <p className="mb-6">
        Test your knowledge with interactive quizzes (Coming soon!).
      </p>
    </div>
  );
}