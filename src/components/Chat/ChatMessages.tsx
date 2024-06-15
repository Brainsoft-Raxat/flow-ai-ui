import React, { useEffect, useState } from 'react';
import HumanMessage from './Message/HumanMessage';
import BotMessage from './Message/BotMessage';
import SuggestionMessage from './Message/SuggestionMessage';
import { sendChatMessage } from '../../api/chatApi';

interface ChatMessagesProps {
  messages: { type: 'bot' | 'user'; text: string }[];
  addMessage: (message: { type: 'bot' | 'user'; text: string }) => void;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, addMessage }) => {
  const [showSuggestions, setShowSuggestions] = useState(true);

  const handleSuggestionClick = async (suggestion: string) => {
    // Add the suggestion as a user message
    addMessage({ type: 'user', text: suggestion });
    setShowSuggestions(false);

    try {
      const response = await sendChatMessage(suggestion);
      addMessage({ type: 'bot', text: response.response });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      setShowSuggestions(false);
    }
  }, [messages]);

  return (
    <div className="flex flex-col items-center flex-grow p-4 overflow-y-auto h-full w-full">
      <div className="w-6/12 flex flex-col">
        <BotMessage message='Привет! Рады видеть вас в FlowAI' />
        <BotMessage message='Я - ИИ ассистент FlowAI. Чем могу вам сегодня помочь?' />
        {showSuggestions && (
          <SuggestionMessage
            suggestions={[
              'Что такое ИИ ассистент?',
              'Как это работает?',
              'Что такое FlowAI?'
            ]}
            onSuggestionClick={handleSuggestionClick}
          />
        )}
        {messages.map((msg, index) => (
          msg.type === 'user' ? (
            <HumanMessage key={index} message={msg.text} />
          ) : (
            <BotMessage key={index} message={msg.text} />
          )
        ))}
      </div>
    </div>
  );
};

export default ChatMessages;
