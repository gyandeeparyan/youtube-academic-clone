export const YOUTUBE_API_URL="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=IN&key="+import.meta.env.VITE_YOUTUBE_API_KEY

export const YOUTUBE_SEARCH_API_URL ="https://youtube-data8.p.rapidapi.com/auto-complete/?q=";

export const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a722c260famshd1e0217900ba4b5p10d517jsn42b3438f1549',
		'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com'
	}
};

export const LIVE_CHAT_COUNT = 50;