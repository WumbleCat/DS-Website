import React from 'react';

export default function links() {
    const links = [
        {
            "Title": "Calendar (deadlines)",
            "Desc": "View deadlines for the course.",
            "Link": "https://shorturl.at/nCKM9"
        },
        {
            "Title": "Assessment Spreadsheet",
            "Desc": "Details on how your math courses will be assessed.",
            "Link": "https://shorturl.at/dgAG1"
        },
        {
            "Title": "Google Drive",
            "Desc": "Access course materials and self-learning materials.",
            "Link": "https://drive.google.com/drive/u/0/folders/10Xoi_NbUD9L_H4fllO3inNZW8pdOkBkC"
        },
        {
            "Title": "Anonymous Message Box",
            "Desc": "Submit anonymous messages.",
            "Link": "https://forms.gle/yBACcnHkHndws1Fo7"
        }
    ];

    return (
        <div className='container mx-auto px-4 py-8'>
            <h2 className='text-2xl font-bold mb-4'>Useful Documents</h2>
            {links.map((doc, index) => (
                <div key={index} className='mb-4'>
                    <h3 className='text-xl font-bold mb-1'>{doc.Title}</h3>
                    <p className='text-gray-700 mb-1'>{doc.Desc}</p>
                    <a href={doc.Link} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>{doc.Link}</a>
                </div>
            ))}
        </div>
    );
}
