import React from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Notfound from '../Not available';

function Trailer() {
    const {pathname}=useLocation();
    const navback=useNavigate();
    console.log(pathname)
    const category=pathname.includes("movie")?"movie":"tv";
    const youtubekey=useSelector((state)=>state[category].info.video)
    
  return (
    <div className='min-w-[100vw] z-[100%] top-0 min-h-[100vh] flex items-center justify-center absolute bg-[rgb(0,0,0,0.8)]'>
    
   {youtubekey ?(<ReactPlayer  controls width='60vw' height='65vh' border-radius=''  url={`https://www.youtube.com/watch?v=${youtubekey.key}`}/>
  ): <Notfound/>} 
    <i class="ri-close-line hover:text-[#6556CD]  text-zinc-100 mb-[70vh] text-3xl" onClick={()=>{navback(-1)}}></i>
    </div>
  )
}

export default Trailer