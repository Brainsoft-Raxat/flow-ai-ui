import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Chat from '../Chat/Chat';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen" >
      <Header />
      <div className="flex flex-row flex-grow overflow-hidden">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Layout;