
import { formatYouTubeViews } from './../utils/helper';

const SingleVideoCard =({ info }) =>{


    
  

const formattedViews = formatYouTubeViews(info?.statistics?.viewCount);

  return (
    <div className='w-[300px]   mr-3 '>
      <img
        src={info?.snippet?.thumbnails?.medium?.url}
        alt='Laptop'
        className='h-[150px]  rounded-xl object-cover'
      />
      <div className='py-4'>
        <h1 className='text-md dark:text-stone-200 font-semibold'>{info?.snippet?.title}</h1>
        <p className='mt-1 dark:text-stone-300 text-sm text-gray-600'>
          {info?.snippet?.channelTitle}{" "}
        </p>
        <div className='flex'>
          <p className='text-sm dark:text-stone-400 text-gray-600'>
           {formattedViews} Views{" "}
          </p>
          <p className='text-sm mx-4 dark:text-stone-400 text-gray-600'>
            {info?.snippet?.channelTitle}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleVideoCard;
