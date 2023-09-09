import { Menu, UserCircle2 } from "lucide-react";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
 

  

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div className='flex justify-between mt-2'>
        <div className='flex '>
          <Menu className='ml-7 cursor-pointer mt-[6px]' onClick={handleMenuToggle} />
       
          <img
            className='w-32 mt-1 h-7 ml-4'
           
            src='https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-1-3.png'
            alt='logo'
          />
         
         
        </div>

        <div>
          <SearchBar />
        </div>
        <div className='p-2 mr-2 border-[2px] rounded-full'>
          <UserCircle2 />
        </div>
      </div>
    </>
  );
};

export default Navbar;
