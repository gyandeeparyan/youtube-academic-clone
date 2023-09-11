import { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import SingleVideoCard from "./SingleVideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videoSlice";
import ButtonsList from "./ButtonsList";

const VideoContainer = () => {
  let videoId = "";
  const dispatch = useDispatch();

  const videos = useSelector((store) => store?.video?.videoList);
  
  useEffect(() => {
    
      getVideos();
    
  }, []);

  const getVideos = async () => {
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
    <>
      <div className='mt-4'>
        <ButtonsList />
        <div className=' grid grid-cols-1 md:flex md:flex-wrap mt-4 ml-2 md:ml-5'>
          {videos.map((video) => {
            if (typeof video.id === "string") {
              videoId = video.id;
            } else {
              videoId = video.id.videoId;
            }

            return (
              <Link key={videoId} to={"/watch?v=" + videoId}>
                <SingleVideoCard info={video} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VideoContainer;
