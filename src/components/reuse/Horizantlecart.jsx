import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Noimage from '/public/No.png';
import People from '../People';

function Horizantlecart({info}) {
   const people='people'
  return (
    <div className='w-[75%] min-h-[36vh]   overflow-x-auto  overflow-y-hidden mb-[19vh] flex gap-8'>
        {info.map((ele,index)=> <Link   key={index} to={ele.media_type ? `/${ele.media_type}/details/${ele.id}` : `/${people}/details/${ele.id}`} className='  mb-[5vh] h-[39vh] flex flex-col items-center rounded bg-[#18181B] min-w-[13%]'>
        <img className='w-[100%] h-[80%] object-cover rounded' src={ ele.profile_path ||ele.backdrop_path||ele.
  poster_path  ?`https://image.tmdb.org/t/p/original${ele.profile_path ||ele.backdrop_path||ele.
poster_path}` : Noimage}/><div className='text-zinc-100'>{ele.name||ele.title||
  original_title}</div></Link>)}
       </div>
  )
}

export default Horizantlecart