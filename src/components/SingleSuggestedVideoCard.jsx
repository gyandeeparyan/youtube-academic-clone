/* eslint-disable react/prop-types */
import { formatYouTubeViews } from "../utils/helper";

const SingleSuggestedVideoCard = ({ info }) => {
  const formattedViews = formatYouTubeViews(info?.statistics?.viewCount);
  return (
    <>
    
    <div className="flex align-middle ml-2">

       

    <div className='m-1 my-3'>
        <img className="w-[180px] rounded-lg" src={info?.snippet?.thumbnails?.medium?.url} alt='thumbnail' />
      </div>

      <div className='flex w-[200px] mt-3 flex-col dark:text-stone-200'>
        <p className="text-sm m-2 line-clamp-2 font-bold">{info?.snippet?.title}</p>
        <p className="text-sm mx-2 font-semi-bold">{info?.snippet?.channelTitle}</p>
        
      </div>
    </div>
      
    </>
  );
};

export default SingleSuggestedVideoCard;
