import React from 'react';

interface SuggestionMessageProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

const SuggestionMessage: React.FC<SuggestionMessageProps> = ({ suggestions, onSuggestionClick }) => {
  return (
    <div className="flex flex-col items-end mb-4">
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          className="cursor-pointer p-2 mb-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700"
          onClick={() => onSuggestionClick(suggestion)}
        >
          {suggestion}
        </div>
      ))}
    </div>
  );
};

export default SuggestionMessage;
