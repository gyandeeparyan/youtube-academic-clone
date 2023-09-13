import { Menu, PlayCircle, UserCircle2 } from "lucide-react";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div className='flex sticky justify-between dark:bg-brand-coal mt-4 md:mt-2'>
        <div className='flex '>
          <div className=" md:ml-7 px-3 py-1 mt-[3px]  rounded-full">
          <Menu
            className=' dark:text-stone-400  cursor-pointer'
            onClick={handleMenuToggle}
          />
          </div>
          
          <a href='/'>
          <div className='p-2  hidden md:block ml-3 mr-2 border-brand-red border-[2px] dark:text-brand-red rounded-full'>
          <PlayCircle className="" />
        </div>
        
          </a>
        </div>

        <div>
          <SearchBar />
        </div>
        <div className='p-2  hidden md:block mr-2 border-[2px] dark:text-white rounded-full'>
          <UserCircle2 />
        </div>
      </div>
    </>
  );
};

export default Navbar;
