import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import instance from '../utils/axios';

import Noimage from '/public/No.png';

function Topnav() {
    const[query,setquery]=useState("");
    const[search,setsearch]=useState(null)
    const Getsearch=async()=>{
try{
 const {data}=  await instance.get(`/search/multi?query=${query}`);

console.log(data.results)
setsearch(data.results);
console.log(1)
console.log(data.results)


}
catch(error){
  console.log(error)
}
    }
   

useEffect(()=>{ Getsearch()},[query])
  return (
    <div className=' flex  justify-start relative items-center mt-2 ml-[15%] w-[full] h-[10vh]'>
        <i className="ri-search-line text-zinc-200 text-3xl"></i>
        <input  type='text' className='w-[50%] p-3 mx-10 outline-none bg-transparent
         text-white text-zinc-200' onChange={(e)=>{setquery(e.target.value)}} value={query}   placeholder='Search anything'/>
        
        {query.length>0 &&(
        <i className="ri-close-line text-zinc-200 text-3xl" onClick={()=>{setquery("")}}></i>)}
        <div  className='w-[55%] absolute top-[100%] ml-[10%] z-[100]  max-h-[400%] overflow-y-scroll overflow-x-hidden rounded bg-zinc-100'>
{search!==null && search.map((ele,index)=><Link  to={`/${ele.media_type }/details/${ele.id}`}  key={index} className='p-10 inline-block 
 font-semibold hover:text-black  text-zinc-400 duration-300 hover:bg-zinc-200 
   flex justify-start items-center border-b-2 border-zinc-200  w-[100%] '>
            <img className=' mr-6 w-[5vw] shadow-lg  h-[15%] object-cover rounded'
             src={ele.backdrop_path||ele.profile_path?`https://image.tmdb.org/t/p/original${ele.backdrop_path||ele.profile_path}`:Noimage} alt=""/>

            <span>{ele.title||ele.name||
ele.original_name}</span>
            </Link>)}
             
           
            
           
        </div>


    </div>
  )
}

export default Topnav