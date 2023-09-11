import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import SugggestedVideoConatiner from "./SugggestedVideoConatiner";

const VideoWatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
      <div className=' flex '>
        <div className='flex  mt-4 md:mt-0  flex-col'>
          <div className="hidden md:block">
            <iframe
              className='rounded-lg'
              width='736'
              height='413'
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullscreen></iframe>
          </div>
          <div className="md:hidden">
            <iframe
              className='rounded-lg'
              width='360'
              height='200'
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullscreen></iframe>
          </div>

          <div className='mt-5 w-screen md:w-full h-[400px] md:h-full'>
            <CommentsContainer />
          </div>

        
        </div>

        <div className="flex flex-col">
          <div>
            <LiveChat/>
          </div>

          <div>
           <SugggestedVideoConatiner/>
          </div>
          </div>
      </div>
    </>
  );
};

export default VideoWatchPage;
