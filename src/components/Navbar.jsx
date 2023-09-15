import { Menu,  Rainbow, UserCircle2 } from "lucide-react";
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
      <div className='flex  sticky justify-between dark:bg-brand-coal mt-4 md:mt-2'>
        <div className='flex '>
          <div className=" md:ml-7 px-3 py-1 mt-[3px]  rounded-full">
          <Menu
            className=' dark:text-stone-400  cursor-pointer'
            onClick={handleMenuToggle}
          />
          </div>
          
          <a href='/'>
          <div className='px-2  hidden md:flex ml-6 mr-2 text-brand-blue dark:text-brand-blue rounded-full'>
          <Rainbow className="mt-[1px] font-light" size={30} />
          <p className="font-light text-2xl mx-2 dark:text-blue-400 ">Calm</p>
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
