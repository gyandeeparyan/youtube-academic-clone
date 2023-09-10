import { Mic, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { OPTIONS, YOUTUBE_SEARCH_API_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";

const SearchBar = () => {
  const dispatch =useDispatch()
  const cache =useSelector((store)=>store?.search)
  const [searchText, setSearchText] = useState("");
  const [suggstions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if(cache[searchText]){
        setSuggestions(cache[searchText]);
      }
      else{
        getSearchSuggestions();
      }
   
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(
        YOUTUBE_SEARCH_API_URL + searchText + "&hl=en&gl=US",
        OPTIONS
      );
      const json = await data.json();
      console.log(json);
      setSuggestions(json?.results);
      dispatch(cacheResults({
        [searchText]: json?.results ,

      }))
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='flex'>
        <input
          className='border-[2px] px-4 w-[350px] rounded-l-full'
          value={searchText}
          onChange={(e) => {
           
            setSearchText(e.target.value);
          }}
          type='text'
          onFocus={()=> setShowSuggestion(true)}
          onBlur={()=> setShowSuggestion(false)}
          name=''
          id=''
        />
        <div className='py-2 px-4 border-[2px] bg-gray-100  rounded-r-full'>
          <Search />
        </div>

        <div className='p-2 ml-4 rounded-full border-[2px]'>
          <Mic />
        </div>
      </div>

      {showSuggestion && <div className='fixed shadow-lg  bg-white mt-5  w-[350px] rounded-lg'>
        {suggstions.map((suggestion) => {
          return (
            <p
              key={suggestion}
              className=' px-2 hover:bg-gray-100 rounded-lg font-semibold py-1 m-2'>
              <Search className='inline mr-4 text-gray-600' />
              {suggestion}
            </p>
          );
        })}
      </div>}
    </>
  );
};

export default SearchBar;
