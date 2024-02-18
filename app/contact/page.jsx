import React from 'react';

export default function Plan() {
    const reps = [
        { "names": "Joshua Man Yu Ng", "email": "jq22530@bristol.ac.uk", "LinkedIn": "https://www.linkedin.com/in/kometh-tauch-38a58626b/"  },
        { "names": "Kometh Tauch (Maine)", "email": "cy23929@bristol.ac.uk", "LinkedIn": "https://www.linkedin.com/in/kometh-tauch-38a58626b/" }
    ];

    return (
        <div className="flex justify-center items-center h-screen">
        <div className="w-3/4 bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-center">
            {reps.map((rep, index) => (
              <div key={index} className="flex flex-col justify-center items-center border border-gray-300 p-4 rounded-lg mx-4">
                <h2 className="text-lg font-bold mb-2">Student Representative</h2>
                <p className="text-gray-700">
                  <span className="font-bold">Name:</span> {rep.names}
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">Email:</span> {rep.email}
                </p>
                <p className="text-gray-700">
                  <span className="font-bold text-blue-500">LinkedIn:</span> <a href={rep.LinkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-500">{rep.names}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
