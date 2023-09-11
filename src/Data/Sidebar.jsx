import { Bed, Brain,  Heart,  IndianRupee, Laugh, Music4, Rocket, Shell, Smile, SmilePlus, Waves } from "lucide-react";

export const sidebar = [
    {
        id: Date.now() + 1,
        icon: <Music4 size={25} />,
        label: "Music",
        searchString: "peacefull music"
    },
    {
        id: Date.now() + 2,
        icon: <Smile size={25} />,
        label: "Peace",
        searchString: "peace meditation"
    },
    {
        id: Date.now() + 3,
        icon: <Heart size={25} />,
        label: "Love",
        searchString: "love and relationships meditaion"
    },
    {
        id: Date.now() + 4,
        icon: <Laugh size={25} />,
        label: "Joy",
        searchString: "joyful living"
    },
    {
        id: Date.now() + 5,
        icon: <Brain size={25} />,
        label: "Knowledge",
        searchString: "knowledge and wisdom meditation"
    },
    {
        id: Date.now() + 6,
        icon: <SmilePlus size={25} />,
        label: "Bliss",
        searchString: "blissful life affirmation"
    },
    {
        id: Date.now() + 7,
        icon: <Bed size={25} />,
        label: "Sleep",
        searchString: "better sleep hypnosis"
    },
    {
        id: Date.now() + 8,
        icon: <Rocket size={25} />,
        label: "Energy",
        searchString: "boosting energy affirmations"
    },
    {
        id: Date.now() + 9,
        icon: <Shell size={25} />,
        label: "Hypnosis",
        searchString: "hypnotherapy sessions"
    },
    {
        id: Date.now() + 10,
        icon: <Waves size={25} />,
        label: "Let Go",
        searchString: "letting go of the past meditation"
    },
  
    {
        id: Date.now() + 12,
        icon: <IndianRupee size={25} />,
        label: "Money",
        searchString: "financial abundance afffirmation "
    },
];