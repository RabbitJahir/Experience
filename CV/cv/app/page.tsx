import React from 'react';

const Home = () => {
  const documents = [
    {
      type: "Resume",
      question: "Are you qualified for this specific role?",
      length: "1 Page",
      tone: "Brief & Achievement-oriented",
      useCase: "Standard tech/corporate job applications.",
    },
    {
      type: "CV (Rirekisho)",
      question: "What is your full chronological history?",
      length: "1-2 Pages",
      tone: "Formal & Bio-data focused",
      useCase: "Academic roles or traditional Japanese companies.",
    },
    {
      type: "Cover Letter",
      question: "Why do you want to work here specifically?",
      length: "1 Page",
      tone: "Personal & Persuasive",
      useCase: "Sent alongside a Resume to introduce yourself.",
    },
    {
      type: "Portfolio",
      question: "Can you actually do the work you claim?",
      length: "Variable",
      tone: "Visual & Technical",
      useCase: "Showcasing code (GitHub) or design projects.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Application Document Guide
        </h1>
        <p className="mt-2 text-gray-600">
          Understanding the strategic purpose of your hiring materials.
        </p>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="p-4 font-semibold text-sm uppercase tracking-wider">Document Type</th>
              <th className="p-4 font-semibold text-sm uppercase tracking-wider">Primary Question</th>
              <th className="p-4 font-semibold text-sm uppercase tracking-wider">Length</th>
              <th className="p-4 font-semibold text-sm uppercase tracking-wider">Tone</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {documents.map((doc, index) => (
              <tr key={index} className="hover:bg-blue-50 transition-colors">
                <td className="p-4 font-bold text-blue-700">{doc.type}</td>
                <td className="p-4 text-gray-700 italic">"{doc.question}"</td>
                <td className="p-4 text-gray-600">{doc.length}</td>
                <td className="p-4 text-gray-600">{doc.tone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Grid View */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {documents.map((doc, index) => (
          <div key={index} className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-blue-700 mb-2">{doc.type}</h2>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold text-gray-900">Goal:</span> {doc.question}</p>
              <p><span className="font-semibold text-gray-900">Length:</span> {doc.length}</p>
              <p><span className="font-semibold text-gray-900">Tone:</span> {doc.tone}</p>
              <p className="text-xs text-gray-400 mt-2">{doc.useCase}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-100 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800 leading-relaxed">
          <strong>Pro Tip:</strong> For your Software Engineering applications, your 
          <span className="font-bold"> Portfolio (GitHub/Projects)</span> is often the deciding factor 
          that proves your <span className="font-bold">Resume</span> isn't just talk.
        </p>
      </div>
    </div>
  );
};

export default Home;