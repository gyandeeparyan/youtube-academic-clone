


export function CardSkeleton() {
  return (
    <div className='container mx-[60px] my-6 md:mx-[42px] grid grid-cols-1 md:grid-cols-4'>
      {
Array(10)
.fill("")
.map((e, index) => (
  <div key={index} className="w-[300px] animate-pulse rounded-2xl  mb-8">
    <div
      className="h-[200px] w-full rounded-2xl object-cover  dark:bg-stone-700 bg-stone-300"
    ></div>
    <div className="p-4">
      <span className="inline-flex h-[25px] w-2/3 dark:bg-stone-700 bg-stone-300 items-center rounded-full text-lg font-semibold">
      
      </span>
      <span className="inline-flex h-[25px] w-1/3 dark:bg-stone-700 bg-stone-300 items-center rounded-full text-lg font-semibold">
      
      </span>
      
     
     
      <div className="mt-4">
        <div className="mb-2 mr-2 h-[25px]  w-1/3 inline-block rounded-full dark:bg-stone-700 bg-stone-300 px-3 py-1 text-[10px] font-semibold text-gray-900">
        </div> 
       
        
       
      
      </div>
      
    </div>
  </div>))
      }
      </div>

   
  )
}
