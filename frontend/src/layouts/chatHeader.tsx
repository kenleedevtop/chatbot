import React from "react";

import { ICONS } from "../utils";

const ChatHeader = () => {
  return (
    <div className="chat-header z-10 w-full h-20 !bg-black fixed top-0 border-b border-gray-500 flex flex-row items-center md:px-8">
      <img src={ICONS.logo} className="h-16" alt=""  />
      <p className="!text-white !text-3xl">AI Chat Bot</p>
    </div>
  )
};

export default ChatHeader;
