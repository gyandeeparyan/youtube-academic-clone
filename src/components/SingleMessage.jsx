import { UserCircle2 } from "lucide-react";

// eslint-disable-next-line react/prop-types
const SingleMessage = ({ name, message }) => {
  return (
    <>
      <div className='flex align-middle my-2 bg-stone-200 p-2 dark:bg-brand-gray dark:text-brand-white rounded-lg'>
        <div className="w-20px">
        <UserCircle2 className="w-6 h-6" />
        </div>
        
        
        <p className='mx-2 inline-block text-xs font-semibold'>{name}</p>
        <p className=' inline-block text-xs'>{message}</p>
      </div>
    </>
  );
};

export default SingleMessage;
