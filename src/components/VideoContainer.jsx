import  { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import SingleVideoCard from "./SingleVideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
   
  const [videos, setVideos]=useState([]);

  useEffect(()=>{
getVideos()
  },[])

  const getVideos=async()=>{
    try {
      const data =await fetch(YOUTUBE_API_URL);
      const json =await data.json()
      console.log(json);
      setVideos(json.items);
    } catch (error) {
      console.log(error);
    }
  }




  return <>
  <div className="flex flex-wrap mt-4 ml-5">
    {videos.map((video)=>{
      return(<Link key={video.id} to={"/watch?v="+video.id}><SingleVideoCard  info={video}/></Link>)
    })}
  </div>
  </>;
};

export default VideoContainer;
