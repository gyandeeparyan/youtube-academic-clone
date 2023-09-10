import { UserCircle2 } from "lucide-react";

const SingleComment = ({ data }) => {
  const { name, text } = data;
  return (
    <>
      <div className='flex mb-5 bg-stone-200 rounded-lg'>
        <UserCircle2 size={35} className="text-gray-800 m-2" />
        <div className='flex flex-col ml-4'>
          <p className='font-bold'>{name}</p>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default SingleComment;
