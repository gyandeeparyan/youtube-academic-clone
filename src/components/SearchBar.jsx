import { Mic, Search } from "lucide-react"


const SearchBar = () => {
  return (
    <>
    <div className="flex">
        <input 
        className="border-[2px] px-4 w-[350px] rounded-l-full"
        type="text" name="" id="" />
        <div  className="py-2 px-4 border-[2px] bg-gray-100  rounded-r-full">
        <Search/>
        </div>
        
        <div className="p-2 ml-4 rounded-full border-[2px]">
            <Mic/>
        </div>

    </div>
    </>
  )
}

export default SearchBar