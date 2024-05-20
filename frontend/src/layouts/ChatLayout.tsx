import React from 'react';

import Footer from './footer';
import ChatHeader from './chatHeader';

const ChatLayout = ({ children }: React.HTMLAttributes<HTMLDivElement> & {}) => {
  return (
    <div className='w-full h-screen flex flex-col relative'>
      <ChatHeader />
      <div className='w-full h-full overflow-auto flex pt-20 flex-1'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default ChatLayout;