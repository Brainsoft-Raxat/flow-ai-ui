import React, { useState, useEffect } from 'react';
// import botIcon from '../../../assets/logo.svg'; // Replace with the path to your bot icon
import FlitChatLogo from '../../../assets/512x512 Icon Light Rounded.svg'

interface MessageProps {
  message: string;
}

const BotMessage: React.FC<MessageProps> = ({ message }) => {
  const [timestamp, setTimestamp] = useState<string>('');

  useEffect(() => {
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    setTimestamp(formattedDateTime);
  }, []);

  return (
    <div className="flex flex-col items-start mb-4">
      <div className="flex items-center justify-start mb-2">
        <div className="mr-2">
          <img src={FlitChatLogo} alt="Bot" className="w-6 h-6 rounded-full " />
        </div>
        <div className="text-sm text-gray-400">{timestamp}</div>
      </div>
      <div className="relative max-w-xs p-2 rounded-lg bg-gray-800 text-white">
        <div className="flex flex-col items-start">
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default BotMessage;
