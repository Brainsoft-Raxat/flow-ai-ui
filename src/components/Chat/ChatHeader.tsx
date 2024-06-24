import React from 'react';
// import { FaSignOutAlt } from 'react-icons/fa';
// import mainLogo from '../../assets/main-logo.svg';

const ChatHeader: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-4">
        {/* <img
          src={mainLogo} // Path to your bot's avatar
          alt="Bot Avatar"
          className="w-12 h-12"
        /> */}
        <div>
          <h2 className="text-xl font-bold">FlitChat - ИИ Чат Бот</h2>
          <p className="text-sm text-gray-400">Как я могу помочь вам сегодня?</p>
        </div>
      </div>
      {/* <button className="flex items-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        <FaSignOutAlt className="mr-2" /> Завершить чат
      </button> */}
    </div>
  );
};

export default ChatHeader;
