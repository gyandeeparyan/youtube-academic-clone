export const YOUTUBE_API_URL="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=IN&key="+import.meta.env.VITE_YOUTUBE_API_KEY

export const YOUTUBE_SEARCH_API_URL ="https://youtube-data8.p.rapidapi.com/auto-complete/?q=";




export const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY ,
		'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com'
	}
};



export const YOUTUBE_SEARCH_VIDEO_LIST =  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=' 

export const SUGGESTED_VIDEO_URL ='https://youtube-v31.p.rapidapi.com/search?relatedToVideoId='


export const LIVE_CHAT_COUNT = 50;

export const BUTTON_LIST =[
    "Mindfulness",
    "Meditation",
    "Gratitude",
    "Healing",
    "Empowerment",
    "Wellness",
    "Balance",
    
    "Innerpeace",
    "Enlightenment",
    "Wisdom",
    "Harmony",
    "Renewal",
    "Awakening",
    "Transformation",
    "Spirituality",
    "Faith",
    "Guidance",
    "Serenity",
    "Purpose",
    "Inspiration",
    "Growth",
    "Connection",
    "Reflection",
    "Acceptance",
    "Intuition",
    "Forgiveness",
    "Clarity",
    "Presence",
    "Alignment",
    "Awareness",
    "Energy",
    "Resilience",
    "Vitality",
    "Mindset",
    "Manifestation",
    "Soul",
    "Blessings",
    "Chakra",
    "Yoga",
    "Peace",
    "Calm",
    "Joy",
    "Compassion",
    "Trust",
    "Patience",
    "Simplicity",
    "Kindness",
    "Grace",
    "Breathe",
    "Unity",
    "Rebirth",
    "Surrender",
    "Divine",
    "Renewal",
    "Empathy",
    "Happiness",
    "Alignment",
    "Abundance",
    "Sacred",
    "Faith",
    "Grace",
]
