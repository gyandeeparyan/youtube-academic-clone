import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_VIDEO_LIST ,BUTTON_LIST } from "../utils/constants";
import { addVideos } from "../utils/videoSlice";


const ButtonsList = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      getVideos();
    }
  }, [searchText]);

  const handleItemClick = (item) => {
    console.log(item);
    setSearchText(item);
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
      console.error(error);
    }
  };

  return (
    <div className='flex w-screen overflow-x-scroll  scrollbar-hide'>
      {BUTTON_LIST.map((button) => (
        <div key={button} onClick={() => handleItemClick(button)}>
          <p className="px-4 py-2 cursor-pointer mb-4 mx-1 md:mx-5 dark:bg-stone-800 dark:hover:bg-stone-600 dark:text-stone-200 bg-blue-100 hover:bg-blue-300 font-semibold rounded-md">{button}</p>
        </div>
      ))}
    </div>
  );
};

export default ButtonsList;
