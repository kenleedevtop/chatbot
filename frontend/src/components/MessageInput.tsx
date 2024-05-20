import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { ClipLoader } from "react-spinners";

import { ICONS } from "../utils";

interface Props {
  onMessageSend: (msg: string) => void;
  loading: boolean;
}

const MessageInput = (props: Props) => {
  const { onMessageSend, loading } = props;
  const textareaRef: any = useRef(null);

  const [message, setMessage] = useState<string>('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (message.length === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [message])

  useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    if (textareaRef.current) {
      textareaRef.current.style.height = "inherit";
      // Set height
      textareaRef.current.style.height = `${Math.max(
        textareaRef.current.scrollHeight,
        36
      )}px`;
    }
  }, [message]);

  const handleInputChange = (msg: any) => {
    setMessage(msg)
  };

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    } else if (e.keyCode === 13 && e.shiftKey) {
      e.stopPropagation();
    }
  };

  const handleSend = () => {
    if (message.length === 0) return;
    onMessageSend(message);
    setMessage('');
  };

  return (
    <div className="flex items-center bg-white border rounded-full shadow-sm p-2 mr-4">
      <textarea
        ref={textareaRef}
        rows={1}
        placeholder="Type message"
        className="flex-1 bg-transparent outline-none box-border px-4 !text-base text-gray-700 max-h-[75px] min-h-[20px] pt-[6px] resize-none"
        value={message}
        onChange={(e) => handleInputChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className={`text-gray-600 hover:text-gray-800 p-2 flex items-center justify-center  ${disabled && !loading ? 'opacity-25' : 'hover:opacity-70'}`} disabled={disabled} onClick={handleSend}>
        {loading ? (
          <ClipLoader
            color='#000000'
            loading={loading}
            size={24}
            autoFocus
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <img src={ICONS.send} alt="User Avatar" className="w-6 h-6 rounded-full" />
        )}
      </button>
    </div>
  )
}

export default MessageInput