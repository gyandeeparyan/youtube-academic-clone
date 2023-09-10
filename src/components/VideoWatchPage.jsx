import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";


const VideoWatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
      <div className=' flex flex-col'>
        <div className="flex">

        <div>
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
        
        <div>
          <LiveChat/>
        </div>

        </div>
       

        <div className='mt-5 flex'>
          <CommentsContainer/>
          <div>
            Suggested Video
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoWatchPage;
