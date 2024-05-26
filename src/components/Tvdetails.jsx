import React, { useEffect } from 'react'
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {tvapicall} from '../store/actions/Tvaction'
import { useNavigate } from 'react-router-dom';
import { removetv } from '../store/reducers/tvSlice';
import Horizantlecart from './reuse/Horizantlecart';
import Detailsidebar from './reuse/Detailsidebar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Loading from './Loader';

function tvdetails() {
  const nav=useNavigate();
const {id}=useParams()
const ll=useParams()

 console.log(id) 
 console.log(ll) 
 const po=useSelector((state)=>state.tv.info)
  const dispatch=useDispatch();

console.log(po)


 useEffect(()=>{dispatch(tvapicall(id))
 return (()=>{dispatch(removetv())
console.log("unmount")
 })
 
 },[id])
 return (
  po ?<div className='flex flex-col  relative w-[100%] pb-3 h-[100vh] overflow-y-scroll overflow-x-hidden'>
   <div className='w-screen min-h-[80vh] flex  mb-3' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${po.detail.backdrop_path||po.detail.poster_path ||po.detail.profile_path})`,
 backgroundSize:'cover',
 backgroundPosition:'center',

 
 }
 }>
   
   <i className="ri-arrow-left-line  hover:text-[#6556CD]   text-3xl" onClick={()=>{nav(-1)}}></i>
   <img  className='w-[20vw] h-[60vh]   rounded-md ml-[5vh] mt-[10vh]  bg-white object-cover' 
   src={`https://image.tmdb.org/t/p/original/${po.detail.
 poster_path|| po.detail.belongs_to_collection[0] ||po.detail.profile_path}`}/>
 
 <div className='flex  ml-[5vh] flex-col mt-[10vh] text-zinc-100 '>

   <div className='text-3xl font-bold font-sans '>{po.detail.original_title}</div>
   <div className='flex mt-3 font-semibold'> <h2 className='mr-4'>{po.detail.release_date }({po.detail.origin_country})</h2> {po.detail.genres.map((ele,index)=><h1 key={index}>{ele.name}{index < po.detail.genres.length - 1 ? ', ' : ''} </h1>)}<h1 className='ml-2'>{po.detail.runtime}min</h1></div>
   
   <div className='flex gap-8'><div className='mt-1 w-4 leading-6 text-xl'>User Score</div> <span className='bg-amber-400 flex justify-center mt-2 items-center rounded-full h-[7vh] w-[7vh]'><span>{(po.detail.vote_average*10).toFixed()}<sup>%</sup></span></span></div>
   <div className='text-xl font-semibold mt-4 font-sans'>OVERVIEW</div>
   <div className='font-semibold font-light'>{po.detail.overview}</div>
   <div className='flex flex-col mt-4 gap-4'>
   <div className='flex  gap-4'>
{po.watchprovider && po.watchprovider.flatrate && <><div>Available on Plateform</div> {po.watchprovider.flatrate.map((ele,index)=><img  
title={ele.provider_name} 
className='h-[6vh] w-[7vh] object-cover rounded'  src={`https://image.tmdb.org/t/p/original${ele.logo_path}`}/>)}</>}
</div>
   <div  className='flex gap-4'>
{po.watchprovider &&po.watchprovider.rent  &&<><div>Available on Rent</div> {po.watchprovider.buy.map((ele,index)=><img  
title={ele.provider_name} 
className='h-[6vh] w-[7vh] object-cover rounded'  src={`https://image.tmdb.org/t/p/original${ele.logo_path}`}/>)}</>}
</div>
   <div  className='flex  gap-4'>
{po.watchprovider && po.watchprovider.rent  && <><div>Buy At</div> {po.watchprovider.rent.map((ele,index)=><a href=''>  <img  
title={ele.provider_name} 
className='h-[6vh] w-[7vh] object-cover rounded'  src={`https://image.tmdb.org/t/p/original${ele.logo_path}`}/>  </a>  )}</>}
</div>

 </div>
 <Link to={`/tv/details/${po.detail.id}/trailer`}   className='w-[18vh] h-[5vh] hover:scale-105 shadow text-white rounded text-center mt-4 mb-12   p-1 ' 
 style={{backgroundColor:"#6556CD"}}>Watch Trailer</Link>
 </div>
 
 
 
 </div>
 <div className='mt-4 mb-3 font-semibold text-2xl text-zinc-100' >Top Billed Cast</div>


 {/* code for horizantle cart for actor and detail side bar */}
  <div className='flex justify-around gap-4'>{po.credits.cast.length==0?<div className='text-zinc-200 text-xl'>No Information Available</div>: <Horizantlecart   info={po.credits.cast}/> }<Detailsidebar  data={po.detail}  externalid={po.externalid}/></div>


 {/* code for horizantle cart of recommendee and similar using same cart but with differt array passing values */}
 
 <div className='mt-4 mb-3 font-semibold text-2xl text-zinc-100' >Recommended</div>

<Horizantlecart   info={po.recommendation||po.similar}/>
 <Outlet/>
 </div>:<Loading/>

 )
}

export default tvdetails