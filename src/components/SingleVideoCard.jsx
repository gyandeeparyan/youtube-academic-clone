// eslint-disable-next-line react/prop-types
function SingleVideoCard({ info }) {

const formatYouTubeViews=(views) =>{
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + ' Mn';
      } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + ' K';
      } else {
        return views.toString();
      }
}  

const formattedViews = formatYouTubeViews(info?.statistics?.viewCount);

  return (
    <div className='w-[300px]   mr-3 '>
      <img
        src={info?.snippet?.thumbnails?.medium?.url}
        alt='Laptop'
        className='h-[150px]  rounded-xl object-cover'
      />
      <div className='py-4'>
        <h1 className='text-md font-semibold'>{info?.snippet?.title}</h1>
        <p className='mt-1 text-sm text-gray-600'>
          {info?.snippet?.channelTitle}{" "}
        </p>
        <div className='flex'>
          <p className='text-sm text-gray-600'>
           {formattedViews} Views{" "}
          </p>
          <p className='text-sm mx-4 text-gray-600'>
            {info?.snippet?.channelTitle}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleVideoCard;
