import React, { useState, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { sendChatMessage } from '../../api/chatApi';

const Chat: React.FC<{ selectedChat: string }> = ({ selectedChat }) => {
  const [messages, setMessages] = useState<{ type: 'bot' | 'user'; text: string }[]>([]);

  const addMessage = (message: { type: 'bot' | 'user'; text: string }) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  useEffect(() => {
    // Clear messages when the chat is switched
    setMessages([]);
  }, [selectedChat]);

  const handleSendMessage = async (message: string) => {
    addMessage({ type: 'user', text: message });

    try {
      const response = await sendChatMessage(selectedChat, message); // Update API call
      addMessage({ type: 'bot', text: response.response });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="flex flex-col flex-grow h-full justify-center bg-gray-900 text-white">
      <ChatHeader />
      <ChatMessages messages={messages} addMessage={addMessage} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
