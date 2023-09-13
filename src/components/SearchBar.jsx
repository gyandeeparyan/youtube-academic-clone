import { Mic, Search, StopCircle } from "lucide-react";
import { useEffect, useState } from "react";
import {
  OPTIONS,
  YOUTUBE_SEARCH_API_URL,
  YOUTUBE_SEARCH_VIDEO_LIST,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import { addVideos } from "../utils/videoSlice";
import { useRef } from "react";
const SearchBar = () => {
  const dispatch = useDispatch();
  const cache = useSelector((store) => store?.search);
  const [searchText, setSearchText] = useState("");
  const [suggstions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const [videosData, setVideosData] = useState();
  const [isListening, setIsListening] = useState(false);
  const inputRef = useRef(null);
  let recognition;

  // Function to hide suggestions when scrolling
  const handleScroll = () => {
    setShowSuggestion(false);
  };
  // Function to handle speech input
  // Function to handle speech input
  const handleSpeechInput = () => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      console.log("Speech input started");

      // Use the appropriate constructor based on browser support
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      // Configure speech recognition options
      recognition.continuous = false;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        console.log("Speech recognition started");
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("Transcript:", transcript);
        setSearchText(transcript);
        inputRef.current.value = transcript;
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };

      recognition.onend = () => {
        console.log("Speech recognition ended");
        setIsListening(false);
      };

      recognition.start();
    } else {
      console.error("Speech recognition is not supported in this browser.");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const timer = setTimeout(() => {
      if (cache[searchText]) {
        setSuggestions(cache[searchText]);
        console.log("Caching Successfully done .!");
      } else {
      getSearchSuggestions();
      }
    }, 200);

    getVideos();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [searchText]);

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
      setVideosData(json);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(
        YOUTUBE_SEARCH_API_URL + searchText + "&hl=en&gl=US",
        OPTIONS
      );
      const json = await data.json();
      console.log(json);
      setSuggestions(json?.results);
      dispatch(
        cacheResults({
          [searchText]: json?.results,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='flex'>
        <input
          className='
          dark:bg-stone-800 bg-stone-100 dark:border-stone-500 dark:text-stone-200
          px-2 w-[250px] md:px-4 md:w-[350px] text-sm rounded-3xl md:rounded-l-full'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          type='text'
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
          placeholder={isListening ? "Listening...." : "Search here"}
        />
        <div
          onClick={() => {
            dispatch(addVideos(videosData));
          }}
          className='md:py-2 py-2 px-2 ml-2 md:ml-0 md:px-4  cursor-pointer bg-gray-100 dark:bg-stone-800 dark:border-stone-500 dark:text-stone-200 rounded-3xl md:rounded-r-full '>
          <Search />
        
        </div>

        <div
          onClick={handleSpeechInput}
          className={`p-2 dark:text-stone-200  cursor-pointer  ml-2 mr-2 md:ml-4 rounded-full ${isListening?"bg-red-200 animate-pulse border-red-200 dark:bg-brand-red dark:border-brand-red":"bg-green-200 dark:bg-brand-green dark:border-brand-green border-green-200"} border-[2px] `}>
          {isListening ? <StopCircle /> : <Mic />}
        </div>
      </div>

      {showSuggestion && (
        <div className='fixed shadow-lg  bg-white dark:bg-stone-800 dark:text-stone-200 mt-5 w-[250] md:w-[350px] rounded-lg'>
          {suggstions?.map((suggestion) => {
            return (
              <div
                key={suggestion}
                onClick={() => {
                  setSearchText(suggestion);
                  dispatch(addVideos(videosData));
                }}
                className=' px-2 hover:bg-gray-100 dark:hover:bg-gray-500 rounded-lg font-semibold py-1 m-2'>
                <Search className='inline mr-4 text-gray-600 dark:text-stone-200' />
                {suggestion}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SearchBar;
