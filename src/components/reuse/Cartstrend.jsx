import React from 'react'
import { Link } from 'react-router-dom'

function Cartstrend({Filter,title}) {
  console.log(title)
  return (
    <div className='w-full h-full flex gap-8  flex-wrap mt-[5%]  bg-[#1F1E24]  '>
        
       {Filter && Filter.map((ele,index)=><Link  to={`/${ele.media_type ||title}/details/${ele.id}`}
       className='w-[17%] relative shadow-sm h-[50vh] flex flex-col items-center  rounded hover:scale-105 duration-200 bg-zinc-900 ml-[10vh]'>
        <img className='w-[100%] object-cover  h-[40vh] rounded ' key={index}
        src={`https://image.tmdb.org/t/p/original${ele.backdrop_path||ele.profile_path}`}/>
        <h1 className='text-zinc-200 font-semibold text-l '>{ele.title||ele.name||
ele.original_name}</h1>
        {ele.vote_average  &&<span className='bg-amber-400 absolute flex justify-center mt-[10vh] ml-[38vh] items-center rounded-full h-[7vh] w-[7vh]'><span>{(ele.vote_average*10).toFixed()}<sup>%</sup></span></span>}
        </Link>
        
        
        
        )}
        
        </div>
  )
}

export default Cartstrend