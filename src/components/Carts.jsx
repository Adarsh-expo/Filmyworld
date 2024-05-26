import React, { useEffect, useState } from 'react'
import instance from '../utils/axios'
import { Link } from 'react-router-dom';




function Carts() {
    const[card,cardfun]=useState(null);
    const[arrow ,setarrow]=useState(true)
    const [Filter,setFilter]=useState(null);
    const[select,selectfun]=useState('week')
    function dayweek(e){
console.log(e.target.value);
selectfun(e.target.value);
setarrow(true)
    };

    const cartdata=async()=>{
        const {data} =await instance.get(`trending/all/${select}`);
console.log(data.results);
cardfun(data.results);
setFilter(data.results);

    }
   function dropdown(){
    setarrow((pre)=>!pre);

   }
    useEffect(()=>{cartdata()},[select])
  return (<>
  <div className='flex  gap-[68%]'><h1 className='text-white font-bold  text-2xl  ml-14 mt-5'>Trending</h1>
   <div className='bg-zinc-200 w-[25vh] h-[8vh] flex gap-[4vh] relative rounded-t items-center  mt-[2%]' ><h1 className='font-semibold text-lg ml-[2vh]'>Category</h1>
  {arrow?<i class="ri-arrow-down-s-fill text-lg" onClick={dropdown}></i>:<i class="ri-arrow-up-s-fill"onClick={dropdown}></i>} 
  {!arrow&&<div className='bg-zinc-100   absolute w-[25vh] h-[10vh] pl-3 font-semibold top-[100%] flex flex-col rounded-b'><option value='week' className='cursor-pointer' onClick={dayweek}>Week</option><hr className='text-semibold'/><option value='day' className='cursor-pointer' onClick={dayweek} >Day</option></div>}
  </div>
  
  </div>

     <div className='w-[100%] min-h-[20vh] flex gap-8 ml-14 overflow-x-auto mt-4   '>
        
       {Filter && Filter.map((ele,index)=><Link to={`/${ele.media_type}/${ele.id}`} className='min-w-[20%] shadow-sm h-[50vh] rounded hover:scale-110 duration-200 bg-zinc-900 mb-[3vh]'><img className='w-[100%] object-cover  h-[40vh] rounded' key={index}
        src={`https://image.tmdb.org/t/p/original${ele.backdrop_path||ele.profile_path}`}/>
        <h1 className='text-zinc-200 font-semibold text-l '>{ele.title||ele.name||
ele.original_name}</h1>
        
        </Link>
        
        
        
        )}
        
        </div></>
  )
}

export default Carts