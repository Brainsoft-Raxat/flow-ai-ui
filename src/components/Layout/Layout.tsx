import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Chat from '../Chat/Chat';

const Layout: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState('flitchat'); // Initial chat selection

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row flex-grow overflow-hidden">
        <Sidebar selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
        <Chat selectedChat={selectedChat} />
      </div>
    </div>
  );
};

export default Layout;
