import React from 'react'

function Dropdown({arrow,setarrow,options,category,fun}) {
    
    function dropdown(){
        setarrow((pre)=>!pre);
    
       }
       function choose(e){
fun(e.target.value)
setarrow(true)
       }
  return (<>
    
   <div className='bg-zinc-200 w-[8em] h-[8vh] flex gap-[4vh] relative rounded-t items-center mr-2 ml-3  mt-[2%]' ><h1 className='font-semibold text-lg ml-[2vh]'>Category</h1>
  {arrow?<i class="ri-arrow-down-s-fill text-lg text-black" onClick={dropdown}></i>:<i class=" text-black ri-arrow-up-s-fill"onClick={dropdown}></i>} 
  {!arrow&&<div className='bg-zinc-100  z-[100] absolute w-[23vh] max-h-[19vh] border border-solid border-y-2 border-zinc-800 pl-3 font-semibold top-[100%] flex flex-col rounded-b'>
    {options.map((ele)=><><option value={ele.toLowerCase()} onClick={choose} className='cursor-pointer text-black '>{ele}</option><hr className='text-semibold'/></>)}
    </div>}
  </div>
  
  </>
  )
}

export default Dropdown