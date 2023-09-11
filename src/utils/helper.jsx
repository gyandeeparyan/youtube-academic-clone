var nameList = [
  "Aarav",
  "आरव",
  "Aditi",
  "अदिति",
  "Amit",
  "अमित",
  "Anika",
  "अनिका",
  "Bhavya",
  "भव्या",
  "Chaitanya",
  "चैतन्य",
  "Dhruv",
  "ध्रुव",
  "Diya",
  "दिया",
  "Gaurav",
  "गौरव",
  "Ishaan",
  "ईशान",
  "Kavya",
  "काव्या",
  "Krishna",
  "कृष्णा",
  "Maanvi",
  "मानवी",
  "Neha",
  "नेहा",
  "Ojas",
  "ओजस",
  "Parth",
  "पार्थ",
  "Radha",
  "राधा",
  "Rohan",
  "रोहन",
  "Sanya",
  "सन्या",
  "Tanvi",
  "तन्वी",
  "Uma",
  "उमा",
  "Ved",
  "वेद",
  "Yash",
  "यश",
  "Zara",
  "ज़ारा",
  "Aakash",
  "आकाश",
  "Bhavesh",
  "भावेश",
  "Charul",
  "चरुल",
  "Devika",
  "देविका",
  "Esha",
  "एशा",
  "Farhan",
  "फरहान",
  "Gitanjali",
  "गीतांजली",
  "Hemant",
  "हेमंत",
  "Ishita",
  "इशिता",
  "Jai",
  "जय",
  "Kanika",
  "कनिका",
  "Lakshya",
  "लक्ष्य",
  "Mihir",
  "मिहिर",
  "Nandini",
  "नंदिनी",
  "Omkar",
  "ओंकार",
  "Prisha",
  "प्रिशा",
  "Rishi",
  "रिषि",
  "Sakshi",
  "साक्षी",
  "Tanya",
  "तन्या",
  "Utkarsh",
  "उत्कर्ष",
  "Vansh",
  "वंश",
  "Yamini",
  "यामिनी",
  "Zain",
  "ज़ैन"
];

  
  export function generateRandomName() {
    return nameList[Math.floor(Math.random() * nameList.length)];
  }
  
  export function makeRandomMessage() {
    const words = [
      "Sunshine", 
      "Smile", 
      "Happiness", 
      "Laughter", 
      "Blossom", 
      "Joy", 
      "Delight", 
      "Bliss", 
      "Glee", 
      "Cheerful", 
      "Fun", 
      "Contentment", 
      "Ecstasy", 
      "Serenity", 
      "Euphoria", 
      "Vibrant", 
      "Pleasure", 
      "Cherish", 
      "Felicitous", 
      "Rapture", 
      "Zest", 
      "Exuberance", 
      "Jubilation", 
      "Elation", 
      "Thrill", 
      "Rapture", 
      "Tranquility", 
      "Hope", 
      "Zing", 
      "Harmony", 
      "Positivity", 
      "Zestful", 
      "Blissful"
  ];
  
  
  
    const maxWords = 10;
    const sentence = [];
  
    for (let i = 0; i < maxWords; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      sentence.push(words[randomIndex]);
    }
  
    return sentence.join(' ');
  }
  


export const formatYouTubeViews=(views) =>{
  if(views){
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + ' Mn';
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + ' K';
    } else {
      return views.toString();
    }
  }
}