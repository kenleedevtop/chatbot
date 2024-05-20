import React, { useEffect, useRef } from "react"
import { ICONS } from "../../utils";

interface Props {
  messages: any;
}

const MessageContent = (props: Props) => {
  const { messages } = props;
  const messagesEndRef: any = useRef(null);

  useEffect(() => {
    messagesEndRef.current && messagesEndRef.current.scrollTo(0, messagesEndRef.current.scrollHeight)
  }, [messages]);

  return (
    <div className='flex flex-1 flex-col overflow-auto my-4 gap-4 pr-2 md:pr-4' ref={messagesEndRef}>
      {messages.length > 0 && messages.map((message: any, index: number) => (
        message.ai ? (
          <div className="flex items-start space-x-4 mr-14" key={index}>
            <div className="flex-shrink-0">
              <div className="w-10 h-10  rounded-full flex items-center justify-center">
                <img src={ICONS.chatbot} alt="User Avatar" className=" h- rounded-full" />
              </div>
            </div>
            <div className=" bg-black text-white p-4 rounded-lg shadow ">
              <p className="break-words whitespace-pre-wrap">{message.text}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-start justify-end space-x-4 ml-14" key={index}>
            <div className=" bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-800 break-words whitespace-pre-wrap">{message.text} </p>
            </div>
            <img src={ICONS.avatar} alt="User Avatar" className="w-12 h-12 rounded-full" />
          </div>
        )
      ))}
    </div>
  )
}

export default MessageContent