import { Menu, Rainbow, UserCircle2, Sun, Moon } from "lucide-react";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu  ,toggleDarkMode} from "../utils/appSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dark = useSelector((store) => store.app.isDark);

  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };
  const toggleDark = () => {
    dispatch(toggleDarkMode());
    {dark ? document.querySelector('html').classList.remove("dark") : document.querySelector('html').classList.add("dark")}


   
  };

  return (
    <>
      <div className='flex  sticky justify-between dark:bg-brand-coal mt-4 md:mt-2'>
        <div className='flex '>
          <div className=' md:ml-7 px-3 py-1 mt-[3px]  rounded-full'>
            <Menu
              className=' dark:text-stone-400  cursor-pointer'
              onClick={handleMenuToggle}
            />
          </div>

          <Link to={'/'}>
            <div className='px-2  hidden md:flex ml-6 mr-2 text-brand-blue dark:text-brand-blue rounded-full'>
              <Rainbow className='mt-[1px] font-light' size={30} />
              <p className='font-light text-2xl mx-2 dark:text-blue-400 '>
                Calm
              </p>
            </div>
          </Link>
        </div>

        <div>
          <SearchBar />
        </div>
        <div className='rounded-full hidden md:block border-[2px] p-2 border-stone-800 dark:border-brand-yellow '>
            {dark ? (
              <Sun
                onClick={toggleDark}
                className='h-6 w-6 cursor-pointer   text-brand-yellow'
              />
            ) : (
              <Moon
                onClick={toggleDark}
                className='h-6 w-6  text-gray-800  cursor-pointer'
              />
            )}
          </div>
        <div className='p-2 md:flex hidden  mr-2 border-[2px] dark:text-white rounded-full'>
         

          <UserCircle2 />
        </div>
      </div>
    </>
  );
};

export default Navbar;
