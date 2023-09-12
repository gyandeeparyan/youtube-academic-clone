import SingleMessage from "./SingleMessage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addMessage } from "../utils/liveChatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import { SendHorizonal } from "lucide-react";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const isMenuOpen =useSelector((store)=>store.app.isMenuOpen)

  const [liveMessage, setLiveMessage] = useState(" ");
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);


if(isMenuOpen) return null
  return (
    <>
      <div className=' hidden md:flex md:flex-col'>
        <div className='mx-3 h-[413px] border-[1px] p-4 rounded-lg overflow-y-scroll w-[70%] flex flex-col'>
          {chatMessages.map((message, index) => (
            <SingleMessage
              key={index}
              name={message.name}
              message={message.message}
            />
          ))}
        </div>

        <form
          className='flex ml-2  p-2 mt-2'
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "User Name",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}>
          <input
            className='border-[2px] text-sm px-4 py-1 w-[320px] dark:text-brand-white  dark:bg-stone-800 dark:border-stone-500 border-stone-300 rounded-lg'
            type='text'
            placeholder='Chat...'
            value={liveMessage}
            onChange={(e) => {setLiveMessage(e.target.value)}}
          />
          <button className=' mx-2 text-stone-700  dark:text-stone-200'>
            <SendHorizonal />
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
