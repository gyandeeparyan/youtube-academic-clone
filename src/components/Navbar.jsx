import { Menu, UserCircle2 } from "lucide-react";
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
            <img
              className='w-32 mt-1 hidden md:block h-7 ml-4'
              src='https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-1-3.png'
              alt='logo'
            />
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
