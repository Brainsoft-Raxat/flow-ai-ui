import React from 'react';
// import { FaBrain, FaCog } from 'react-icons/fa'; // Import some icons from react-icons
import mainLogo from '../../assets/main-logo.svg';

const chatbots = [
  {
    id: 1,
    icon: <img
      src={mainLogo} // Path to your bot's avatar
      alt="Bot Avatar"
      className="w-6 h-6 text-purple-600"
    />,
    name: 'FlitChat',
    description: 'An AI assistant to help with learning and queries.',
  },
  // {
  //   id: 2,
  //   icon: <FaBrain className="w-6 h-6" />,
  //   name: 'Health Bot',
  //   description: 'Your health companion for daily wellness tips.',
  // },
  // {
  //   id: 3,
  //   icon: <FaCog className="w-6 h-6" />,
  //   name: 'Tech Support Bot',
  //   description: 'Technical assistance for your gadgets and software.',
  // },
];

const Sidebar: React.FC = () => {
  const selectedBotId = 1; // Hardcoded ID for the selected bot

  return (
    <div className="w-64 overflow-hidden bg-gray-900 text-white p-4 border-r border-gray-700">
      <ul className="space-y-4">
        {chatbots.map((bot) => (
          <li
            key={bot.id}
            className={`flex items-center p-2 rounded-lg cursor-pointer relative ${
              bot.id === selectedBotId ? 'bg-gray-800' : 'hover:bg-gray-700'
            }`}
          >
            <div className="mr-3">{bot.icon}</div>
            <div>
              <div className="font-bold">{bot.name}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
