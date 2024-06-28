import React, { useState } from 'react';
import sendIcon from '../../assets/send.svg';
import uploadIcon from '../../assets/upload.svg';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    const message = input;
    setInput('');

    // Send the message
    onSendMessage(message);
  };

  return (
    <div className="p-6 bg-gray-900 text-white flex justify-center">
      <form className="w-6/12 flex border-none rounded-xl p-3 bg-gray-800" onSubmit={handleSubmit}>
        <div
          // onClick={handleSubmit}
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
        <button
          type="submit"
          className="p-2 text-white bg-transparent rounded-lg flex items-center cursor-pointer"
        >
          <img src={sendIcon} alt="Send" className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
