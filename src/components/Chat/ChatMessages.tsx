import React, { useEffect, useRef } from 'react';
import HumanMessage from './Message/HumanMessage';
import BotMessage from './Message/BotMessage';

interface ChatMessagesProps {
  messages: { type: 'bot' | 'user'; text: string }[];
  addMessage: (message: { type: 'bot' | 'user'; text: string }) => void;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col items-center flex-grow p-4 overflow-y-auto h-full w-full">
      <div className="w-6/12 flex flex-col">
        <BotMessage message="Привет! Рады видеть вас в FlitChat" />
        {messages.map((msg, index) => (
          msg.type === 'user' ? (
            <HumanMessage key={index} message={msg.text} />
          ) : (
            <BotMessage key={index} message={msg.text} />
          )
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatMessages;
