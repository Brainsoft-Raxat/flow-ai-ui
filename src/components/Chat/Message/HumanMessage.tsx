import React, {useState, useEffect} from 'react';

interface MessageProps {
  message: string;
}

const HumanMessage: React.FC<MessageProps> = ({ message }) => {
  const [timestamp, setTimestamp] = useState<string>('');

  useEffect(() => {
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toLocaleString('en-US',{
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    setTimestamp(formattedDateTime);
    }, []);

  return (
    <div className="flex flex-col items-end mb-4">
      <div className="flex items-center justify-end mb-2">
        <div className="text-sm text-gray-400">{timestamp}</div> {/* Timestamp (optional) */}
        <div className="w-6 h-6 rounded-full aspect-square bg-gray-200 ml-2"></div>
      </div>
      <div className="relative max-w-xs p-2 rounded-lg bg-gray-800 text-white">
        <div className="flex flex-col items-end">
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default HumanMessage;
