import React, { useState } from 'react';
import sendIcon from '../../assets/send.svg';
import uploadIcon from '../../assets/upload.svg';
import { sendChatMessage } from '../../api/chatApi';

interface ChatInputProps {
  addMessage: (message: { type: 'bot' | 'user'; text: string }) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ addMessage }) => {
  const [input, setInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    const message = input;
    setInput('');

    // Add user message to the chat
    addMessage({ type: 'user', text: message });

    try {
      const response = await sendChatMessage(message);

      // Add bot response to the chat
      addMessage({ type: 'bot', text: response.response });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white flex justify-center">
      <div className="w-6/12 flex border-none rounded-xl p-3 bg-gray-800">
        <div
          onClick={handleSubmit}
          className="p-2 text-white bg-transparent rounded-lg flex items-center cursor-pointer"
        >
          <img src={uploadIcon} alt="Upload" className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 bg-transparent outline-none placeholder:text-gray-400"
          placeholder="Type your message..."
        />
        <div
          onClick={handleSubmit}
          className="p-2 text-white bg-transparent rounded-lg flex items-center cursor-pointer"
        >
          <img src={sendIcon} alt="Send" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
