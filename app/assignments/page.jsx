import React from 'react';

export default function Assignments() {
  const assignments = [
      {
        course: 'Statistics',
        project: 'Online Quiz 1',
        dueDate: 'Thursday, 22nd February at 12:00'
      },
    {
      course: 'Intro to Coding',
      project: 'Online Project 3',
      dueDate: 'Wednesday, 28th February at 12:00'
    },
  ];

  return (
    <div className="assignments-container">
      <h2 className="text-center font-semibold text-xl mb-4">Upcoming Assignments</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-black uppercase bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6">Course</th>
              <th scope="col" className="py-3 px-6">Assignment</th>
              <th scope="col" className="py-3 px-6">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="py-4 px-6 text-black">{assignment.course}</td>
                <td className="py-4 px-6 text-black">{assignment.project}</td>
                <td className="py-4 px-6 text-black">{assignment.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
