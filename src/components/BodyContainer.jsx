import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";


const BodyContainer = () => {
  const dark=useSelector((store)=>store.app.isDark)
  return (
    <>
    <div className={`${dark ? "dark" : ""}`}>
      <div className='mt-5'>
        <Navbar/>
        <div className="flex">
        <Sidebar />
        <Outlet />
        </div>
       
        </div>
      </div>
    </>
  );
};

export default BodyContainer;
