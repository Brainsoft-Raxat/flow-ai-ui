import React from 'react';
// import { FaBrain, FaCog } from 'react-icons/fa'; // Import some icons from react-icons
import FlitChatLogo from '../../assets/512x512 Icon Light Rounded.svg';
import ShopChatLogo from '../../assets/shopping-basket-2--shopping-basket.svg'

const chatbots = [
  {
    id: 'asia',
    icon: <img src={FlitChatLogo} alt="FlitChat Logo" className="w-10 h-10 rounded-full" />,
    name: 'Asia Group',
    description: 'An AI assistant to help with learning and queries.',
  },
  {
    id: 'shop',
    icon: <img src={ShopChatLogo} alt="FlitChat Logo" className="w-10 h-10 rounded-full" />,
    name: 'Shop',
    description: 'An AI assistant to help with learning and queries.',
  },
  // Additional bots can be added here
];

const Sidebar: React.FC<{ selectedChat: string, setSelectedChat: (id: string) => void }> = ({ selectedChat, setSelectedChat }) => {
  return (
    <div className="w-64 overflow-hidden bg-gray-900 text-white p-4 border-r border-gray-700">
      <ul className="space-y-4">
        {chatbots.map((bot) => (
          <li
            key={bot.id}
            onClick={() => setSelectedChat(bot.id)}
            className={`flex items-center p-2 rounded-lg cursor-pointer relative ${
              bot.id === selectedChat ? 'bg-gray-800' : 'hover:bg-gray-700'
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
