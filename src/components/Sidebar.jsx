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
  <>
      <aside className='  flex overflow-x-scroll scrollbar-hidden w-screen md:w-[80px]  fixed md:hidden -ml-[36px] top-[700px]  dark:bg-brand-charcoal-muted  font-bold mr-8'>

        <Link to={'/'}>
        <div className=" className='flex  cursor-pointer m-3 px-4 py-2 rounded-lg justify-center  dark:bg-brand-pink  hover:bg-pink-300 bg-pink-100 text-md'">
        <HomeIcon/>
        </div>
        </Link>
        
        {sidebar.map((item) => {
          return (
            <div
            onClick={() => handleSidebarItemClick(item)}
              key={item.label}
              className='flex  cursor-pointer m-3 px-4 py-2 rounded-lg justify-center  dark:text-stone-200 hover:text-stone-800 hover:bg-pink-300 text-md'>
              {item.icon}
            </div>
          );
        })}
      </aside>

      {/* Desktop Button Sidesbar */}
      <aside className='md:flex   w-screen md:w-[80px]  hidden  md:flex-col ml-[12px]   md:top-[60px]  rounded-lg font-bold mr-8'>
        {/* Make Links Dynamic */}
        <Link to={'/'}>
        <div className=" className='flex  cursor-pointer m-3 px-4 py-2 rounded-lg justify-center  hover:bg-pink-300 bg-pink-100 text-md ">
        <HomeIcon/>
        </div>
        </Link>
        
        {sidebar.map((item) => {
          return (
            <div
            onClick={() => handleSidebarItemClick(item)}
              key={item.label}
              className='flex  cursor-pointer m-3 px-4 py-2 rounded-lg justify-center dark:hover:text-stone-800  dark:text-stone-200 hover:text-stone-800  hover:bg-pink-300 text-md'>
              {item.icon}
            </div>
          );
        })}
      </aside>
      </>
    );
  return (
    <>
      <div className=' sm:hidden hidden md:block flex-col ml-2 font-bold mr-8'>
     
        {sidebar.map((item) => {
          return (
            <div
            onClick={() => handleSidebarItemClick(item)}
              key={item.label}
              className='flex cursor-pointer w-[210px] mt-2 mx-3 px-4 py-2   dark:text-stone-200  rounded-lg hover:bg-pink-300 hover:text-stone-800 dark:hover:text-stone-800 text-md'>
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
