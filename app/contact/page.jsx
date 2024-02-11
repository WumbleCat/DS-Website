import React from 'react';

export default function Plan() {
    const reps = [
        { "names": "Joshua Man Yu Ng", "email": "jq22530@bristol.ac.uk" },
        { "names": "Kometh Tauch (Maine)", "email": "cy23929@bristol.ac.uk" }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Student Representatives</h2>
            <ul className="list-disc ml-6">
                {reps.map((rep, index) => (
                    <li key={index} className="text-gray-700">
                        <span className="font-bold">{rep.names}: </span>
                        {rep.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}
