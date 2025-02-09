import React, { useEffect } from 'react';

export default function Resources() {
  useEffect(() => {
    console.log("Navigated to Resources");
  }, []);

  return (
    <div className="h-full text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Resources</h1>
      <p className="mb-6">
        Access a variety of study materials and resources to supplement your learning:
      </p>
      <ul className="list-disc pl-6">
        <li>Textbooks and E-books</li>
        <li>Video Lectures and Tutorials</li>
        <li>Study Guides and Cheat Sheets</li>
      </ul>
    </div>
  );
}