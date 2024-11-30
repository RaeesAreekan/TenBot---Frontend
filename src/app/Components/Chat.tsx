// 'use client'

// import React, { useState,useEffect,useRef } from 'react';

// interface ChatMessage {
//   id: number;
//   message: string;
//   fromUser: boolean;
// }

// const Chat: React.FC = () => {
//   const [messages, setMessages] = useState<ChatMessage[]>([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleSendMessage = () => {
//     if (inputValue.trim()) {
//       const newMessage: ChatMessage = {
//         id: messages.length + 1,
//         message: inputValue,
//         fromUser: true,
//       };
//       setMessages([...messages, newMessage]);
//       setInputValue('');
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter') {
//       handleSendMessage();
//     }
//   };

//   return (
//     <div className="flex flex-col  mt-3 w-[90%] pr-[2%]">
//       <div className="flex-1 h-[90vh] p-4 bg-[#F5F5F5] text-black ">
//         <div className='overflow-y-auto'>
//         {messages.map((msg) => (
//           <div key={msg.id} className={`flex ${msg.fromUser ? 'justify-end' : 'justify-start'} mb-2`}>
//             <div className={`max-w-xs p-2 rounded-lg ${msg.fromUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
//               {msg.message}
//             </div>
//           </div>
//         ))}
            
//         </div>
        
//       </div>
//       <div className="p-4 bg-[#F5F5F5] flex flex-row  justify-evenly items-center w-full">
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="Type a message..."
//           className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none text-black"
//         />
//         <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded-r-lg">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chat;

'use client'

import React, { useState, useRef, useEffect } from 'react';
// import axiosFlaskClient from '../utils/axiosFlaskClient';
import getAnwer from '../utils/chatApi';

interface ChatMessage {
  id: number;
  message: string;
  fromUser: boolean;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false)


  const handleSendMessage = async() => {
    if (inputValue.trim()) {
      const userMessage: ChatMessage = {
        id: messages.length + 1,
        message: inputValue,
        fromUser: true,
      };
      setMessages([...messages, userMessage]);
      setInputValue('');
      setLoading(true)

      try{
        // const response = await axiosClient.post('/get_answer',{
        //   question : userMessage.message

        // })

        const response = await getAnwer(userMessage.message)
        console.log(response.data)

        const aiMessage :ChatMessage={
          id: messages.length + 2,
          message: response.data.answer,
          fromUser: false,
        }

        setMessages((prevMessages) => [...prevMessages, aiMessage])

      }
      catch(error){
        console.error('Error fetching AI response:', error);
        const errorMessage: ChatMessage = {
          id: messages.length + 2,
          message: 'Error fetching AI response',
          fromUser: false,
        }

        setMessages((prevMessages) => [...prevMessages, errorMessage])

      }

      finally{
        setLoading(false)
      }




    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex flex-col mt-3 w-[90%] h-[89vh]">
      <div className="flex-1 overflow-y-auto p-4 bg-[#F5F5F5] text-black">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.fromUser ? 'justify-end' : 'justify-start'} mb-2`}>
            <div className={`max-w-lg p-2 rounded-lg ${msg.fromUser ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700 '}`}>
              {msg.message}
            </div>
          </div>
        ))}

{loading && (
          <div className="flex justify-start mb-2">
            <div className="max-w-xs p-2 rounded-lg bg-gray-300 text-gray-700">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="bg-[#F5F5F5] p-4 flex items-center justify-center w-full">
        <div className="flex items-center justify-center w-full max-w-2xl">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none text-black"
          />
          <button onClick={handleSendMessage} className="bg-green-600 text-white p-2 rounded-r-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;


