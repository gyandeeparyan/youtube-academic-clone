import { useEffect, useState } from "react";
import { sidebar } from "../Data/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_VIDEO_LIST } from "../utils/constants";
import { addVideos } from "../utils/videoSlice";
import { Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch =useDispatch()
  const [searchText, setSearchText]=useState("")
  
  useEffect(() => {
    if (searchText) {
      getVideos();
    }
  }, [searchText]);

  const handleSidebarItemClick = (item) => {
    setSearchText(item.searchString);
  };

  const getVideos = async () => {
    try {
      const data = await fetch(
        YOUTUBE_SEARCH_VIDEO_LIST +
          searchText +
          "&key=" +
          import.meta.env.VITE_YOUTUBE_API_KEY
      );
      const json = await data.json();
      console.log(json);
      dispatch(addVideos(json));
    } catch (error) {
      console.log(error);
    }
  };
  




  if (!isMenuOpen)
    return (
      <div className='flex  flex-col -ml-[20px]  font-bold mr-8'>
        {/* Make Links Dynamic */}
        <Link to={'/'}>
        <div className=" className='flex  cursor-pointer m-3 px-4 py-2 rounded-lg justify-center  hover:bg-pink-300 bg-pink-100 text-md'">
        <HomeIcon/>
        </div>
        </Link>
        
        {sidebar.map((item) => {
          return (
            <div
            onClick={() => handleSidebarItemClick(item)}
              key={item.label}
              className='flex  cursor-pointer m-3 px-4 py-2 rounded-lg justify-center  hover:bg-pink-300 bg-pink-100 text-md'>
              {item.icon}
            </div>
          );
        })}
      </div>
    );
  return (
    <>
      <div className='flex hidden md:block flex-col ml-2 font-bold mr-8'>
        {/* Make Links Dynamic */}
        {sidebar.map((item) => {
          return (
            <div
            onClick={() => handleSidebarItemClick(item)}
              key={item.label}
              className='flex cursor-pointer w-[210px] mt-2 mx-3 px-4 py-2 rounded-lg hover:bg-pink-300 bg-pink-100 text-md'>
              {item.icon}
              <p className='ml-6  px-2'>{item.label}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
