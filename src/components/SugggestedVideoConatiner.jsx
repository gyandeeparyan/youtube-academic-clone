import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleSuggestedVideoCard from "./SingleSuggestedVideoCard";
import {  YOUTUBE_API_URL } from "../utils/constants";
import {  addVideos } from "../utils/videoSlice";
import { useEffect } from "react";

const SugggestedVideoConatiner = () => {
    const dispatch=useDispatch()

    const videos = useSelector((store) => store?.video?.videoList);
    const Id= useSelector((store) => store?.video?.videoId)

    let videoId =""

    useEffect(() => {
      if (!(videos?.length > 1)) {
        getSuggestedVideos();
      }
      }, []);
    
      const getSuggestedVideos = async () => {
        try {
          const data = await fetch(YOUTUBE_API_URL);
          const json = await data.json();
          console.log(json);
          dispatch(addVideos(json));
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div className=" hidden md:flex md:flex-col">
         <h1 className="font-semibold text-2xl ml-3  dark:text-stone-200">Suggested Videos</h1>
        {videos.map((video) => {
          if (typeof (video.id) === 'string') {
            videoId = video.id;
          } else {
            videoId = video.id.videoId;
          }

          return (
            <Link key={videoId} to={"/watch?v=" + videoId}>
             <SingleSuggestedVideoCard info={video} />
            </Link>
          );
        })}
        
        </div>
        
  )
}

export default SugggestedVideoConatiner