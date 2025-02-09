import React, { useEffect } from 'react';

export default function Lessons() {
  useEffect(() => {
    console.log("Navigated to Lessons");
  }, []);

  return (
    <div className="h-full text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Lessons</h1>
      <p className="mb-6">
        Here are some curated lessons to help you master various subjects:
      </p>
      <ul className="list-disc pl-6">
        <li>Mathematics: Algebra and Calculus fundamentals</li>
        <li>Science: Introduction to Physics and Chemistry</li>
        <li>History: Overview of key historical events</li>
        <li>Literature: Analysis of classic works</li>
      </ul>
    </div>
  );
}