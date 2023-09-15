import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";

const BodyContainer = () => {
  return (
    <>
      <div className='flex mt-5 ml-9'>
        
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default BodyContainer;
