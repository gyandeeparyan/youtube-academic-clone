import { FileVideo, Flame, GalleryVerticalEnd, Home, ShoppingBag } from "lucide-react";

export const sidebar =[
{
    id: Date.now() + 4,
    icon: <Home  className=" mr-2 " size={25}/> ,
    label:"Home",
},
{
    id: Date.now(),
    icon: <FileVideo  className=" mr-2 " size={25}/>,
    label:"Shorts",
},
{
    id: Date.now(),
    icon: <GalleryVerticalEnd  className=" mr-2 " size={25}/>,
    label:"Subscriptions",
},
{
    id: Date.now(),
    icon: <Home  className=" mr-2 " size={25}/>,
    label:"History",
},
{
    id: Date.now(),
    icon: <Flame  className=" mr-2 " size={25}/>,
    label:"Trending",
},
{
    id: Date.now(),
    icon: <ShoppingBag  className=" mr-2 " size={25}/>,
    label:"Shopping",
},


]