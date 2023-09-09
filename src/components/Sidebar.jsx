
import { sidebar } from "../Data/Sidebar";
import {  useSelector } from "react-redux";
const Sidebar = () => {
  const isMenuOpen =useSelector((store)=>store.app.isMenuOpen)
  
  if(!isMenuOpen) return null;
  return <>
  
 
 <div className="flex  flex-col ml-2 font-bold mr-8">
  {/* Make Links Dynamic */}
{
sidebar.map((item)=>{return(
<div key={item.label} className="flex w-[210px] mt-2 mx-3 px-4 py-2 rounded-lg bg-gray-200 text-md">
 {item.icon}
 <p className="ml-6  px-2">{item.label}</p>
 </div>
)})
}


 


 </div>
 
  
  </>;
};

export default Sidebar;
