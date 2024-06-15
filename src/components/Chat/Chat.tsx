import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ type: 'bot' | 'user'; text: string }[]>([]);

  const addMessage = (message: { type: 'bot' | 'user'; text: string }) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className="flex flex-col flex-grow h-full justify-center bg-gray-900 text-white">
      <ChatHeader />
      <ChatMessages messages={messages} addMessage={addMessage} />
      <ChatInput addMessage={addMessage} />
    </div>
  );
};

export default Chat;
