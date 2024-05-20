import React, { useState } from 'react';
import { TYPES } from '../../utils';
import { MessageInput } from '../../components';
import { ChatService } from '../../services';
import ChatLayout from '../../layouts/ChatLayout';
import MessageContent from './messageContent';

const Chat = () => {
  const [loading, setLoading] = useState(false);
  const [messageItems, setMessageItems] = useState<TYPES.TMessage[]>([
    {
      ai: true,
      text: 'Hi! there,  How can we help?',
    }
  ]);

  const handleMessageSend = async (msg: string) => {
    setLoading(true);
    
    setMessageItems((v) => [...v, {
      ai: false,
      text: msg,
    }]);
    const body = {
      prompt: msg,
      messages: messageItems,
    };

    try {
      const res = await ChatService.chatGptRequest(body);
      if (res) {
        setMessageItems((v) => [...v, {
          ai: true,
          text: res,
        }]);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setMessageItems((v) => [...v, {
        ai: true,
        text: 'Sorry, something went wrong. Please try again later',
      }]);
    }
  }

  return (
    <ChatLayout>
      <div className="bg-gray-100 w-full  flex justify-center">
        <div className='absolute -mt-20 !bg-black h-[340px] w-full'></div>
        <div className="w-[1360px] 2xl:mx-auto bg-white shadow-none rounded-lg py-4 pl-4 z-10 my-10 mx-4">
          <div className="flex flex-col w-full h-full">
            <MessageContent messages={messageItems} />
            <MessageInput onMessageSend={handleMessageSend} loading={loading} />
          </div>
        </div>
      </div>
    </ChatLayout>
  )
};

export default Chat;
