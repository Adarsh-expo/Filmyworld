import React from 'react'
import {  useSelector } from 'react-redux'

function Detailsidebar({data,externalid}) {
 
  return (
    <div className='w-[24%] detailsidebar  bg-[#18181B] shadow-xl rounded-lg text-zinc-200  min-h-[50vh]'>
        <div className='flex justify-around text-2xl'>
          
          <a  target="_blank" href={externalid.imdb_id  ?(data.gender?`https://www.imdb.com/name/${externalid.imdb_id}/`:`https://www.imdb.com/title/${externalid.imdb_id}`) :'javascript:void(0)'  }  > 
          <i class="ri-home-3-line"></i></a>
         
         
          <a  target="_blank" href={externalid.wikidata_id ?   `https://www.wikidata.org/wiki/${externalid.wikidata_id}` :'javascript:void(0)'}> <i class="ri-global-line"></i>
</a>
          <a target="_blank" href={externalid.instagram_id ?`https://www.instagram.com/${externalid.instagram_id}/`:'javascript:void(0)'} >
             <i  class="ri-instagram-line"></i> 
             </a>
          <a target="_blank" href={ externalid.twitter_id ? `https://x.com/${externalid.twitter_id} `:'javascript:void(0)'}  > <i class="ri-twitter-x-line"></i>
           </a>
          <a  target="_blank" href={ externalid.facebook_id ?   `https://www.facebook.com/${externalid.facebook_id}`: 'javascript:void(0)'}      ><i class="ri-facebook-box-fill"></i></a>
          
          
         
       
       
        </div>
       
       <div className='ml-3'>
        <div className='flex flex-col mt-3 mb-3'>
          {data.status?<><div>Status</div><h1  className='font-thin'>{data.status}</h1></>:
        
        <><div>Gender</div><h1  className='font-thin'>{data.known_for_department}</h1></>
        
        }</div>
<div className='flex flex-col mt-3 mb-3'>
          {data.original_language?<><div>Original Language</div><h1  className='font-thin'>{data.original_language}</h1></>:
        
        <><div>Known For</div><h1  className='font-thin'>{data.gender?'Female':'Male'}</h1></>
        
        }</div>

         
<div className='flex flex-col mt-3 mb-3'>
          {data.budget?<><div>Budget</div><h1  className='font-thin'>{data.budget}</h1></>:
        
        <><div>Birthday</div><h1  className='font-thin'>{data.birthday}</h1></>
        
        }</div>

   
<div className='flex flex-col mt-3 mb-3'>
          {data.revenue?<><div>Revenue</div><h1  className='font-thin'>{data.revenue}</h1></>:
        
        <><div>Place of Birth</div><h1  className='font-thin'>{data.place_of_birth
        }</h1></>
        
        }</div>
<div className='flex flex-col mt-3 mb-3'>
          {data.also_known_as &&<><div>Also Known As</div><h1  className='font-thin'>{data.also_known_as[0]
        }</h1></>
         }</div>
<div className='flex flex-col mt-3 mb-3'>
          {data.popularity &&<><div>Popularity</div><h1  className='font-thin'>{data.popularity
        }</h1></>
         }</div>


</div>

        </div>
  )
}

export default Detailsidebar