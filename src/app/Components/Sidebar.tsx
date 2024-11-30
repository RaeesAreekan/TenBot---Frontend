import React from 'react';

// Complete the frontend from here by looking GPT . Everything has already been created
const Sidebar: React.FC = () => {
  // Dummy chat history
  const chatHistory = [
    { id: 1, message: 'Hello!', timestamp: '2024-08-02T10:00:00Z' },
    { id: 2, message: 'How can I help you?', timestamp: '2024-08-02T10:05:00Z' },
    { id: 3, message: 'I have a question about JOSAA.', timestamp: '2024-08-02T10:10:00Z' },
    { id: 4, message: 'Sure, go ahead.', timestamp: '2024-08-02T10:15:00Z' },
    { id: 5, message: 'Sure, go ahead.', timestamp: '2024-08-02T10:15:00Z' },
    { id: 6, message: 'Sure, go ahead.', timestamp: '2024-08-02T10:15:00Z' },
    { id: 7, message: 'Sure, go ahead.', timestamp: '2024-08-02T10:15:00Z' },
    { id: 8, message: 'Sure, go ahead.', timestamp: '2024-08-02T10:15:00Z' },
    { id: 9, message: 'Sure, go ahead.', timestamp: '2024-08-02T10:15:00Z' },
    { id: 10, message: 'Sure, go ahead.', timestamp: '2024-08-02T10:15:00Z' },
  ];

  return (
    <div className="bg-[#F5F5F5] shadow-lg w-64 p-4 text-gray-500 mt-2 h-[90vh] overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Chat History</h2>
      <ul>
        {chatHistory.map((item) => (
          <li key={item.id} className="mb-4 hover:text-gray-700">
            <div className="text-gray-700">{item.message}</div>
            <div className="text-gray-500 text-sm">{new Date(item.timestamp).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

