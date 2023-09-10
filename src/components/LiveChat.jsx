import SingleMessage from "./SingleMessage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addMessage } from "../utils/liveChatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import { SendHorizonal } from "lucide-react";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  return (
    <>

    <div className="flex flex-col">
    <div className='mx-3 h-[413px] border-[1px] p-4 rounded-lg overflow-y-scroll w-[70%] flex flex-col'>
        {chatMessages.map((message, index) => (
          <SingleMessage
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}

        
      </div>

      <div className='flex ml-2  p-2 mt-2'>
          <input
            className='border-[2px] px-4 py-1 w-[320px] border-stone-300 rounded-lg'
            type='text'
            placeholder="Message here"
          />
          <button className=" mx-12 text-stone-700">
            <SendHorizonal />
          </button>
        </div>
    </div>
     
    </>
  );
};

export default LiveChat;
