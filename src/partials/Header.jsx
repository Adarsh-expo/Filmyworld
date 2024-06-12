import React from 'react'
import { Link } from 'react-router-dom';
function Header({dataji}) {
    let img=1;
    if(dataji!==null){
     img=Math.floor((Math.random()*dataji.length));
    console.log(img)}
  return (<>
    {dataji && <div className='w-[100vw]  hover:text-zinc-600 h-[70vh] rounded pl-12  flex flex-col justify-end'  style={{
        
backgroundImage:`url(https://image.tmdb.org/t/p/original${dataji[img].backdrop_path||dataji[img].profile_path})`,
backgroundSize:'cover',


    }}>
    <h1 className='text-white w-[70%] hover:text-zinc-600 mb-3 font-bold text-5xl'>{dataji[img].
original_title||dataji[img].
title}</h1>
    
    <p className='w-[70%] text-white '>{dataji[img].overview.slice(0,200)}....<Link to={`/${dataji[img].media_type}/${dataji[img].id}`} className='hover:text-blue-300'>more</Link></p>
    <div className='text-white flex gap-2'><i class="ri-megaphone-fill text-yellow-200"></i>{dataji[img].release_date}<i class="ri-movie-2-line text-yellow-200"></i>{dataji[img].media_type}</div>
    <Link  to={`/${dataji[img].media_type}/details/${dataji[img].id}/trailer`}  className='w-[18vh] hover:scale-105 shadow text-white rounded text-center mt-3 mb-12   p-1 ' style={{backgroundColor:"#6556CD"}}>Watch Trailer</Link>
    </div>}
    </>
  )
}

export default Header