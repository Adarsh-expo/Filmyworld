import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {personapicall} from '../store/actions/peopleaction';
import { useNavigate } from 'react-router-dom';
import { removeperson } from '../store/reducers/personSlice';
import Horizantlecart from './reuse/Horizantlecart';
import Detailsidebar from './reuse/Detailsidebar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Loading from './Loader'
import Dropdown from './reuse/Dropdown';

function Persondetail() {
  const nav=useNavigate();
  const {id}=useParams()
   console.log(id) 
   const po=useSelector((state)=>state.person.info)
    const dispatch=useDispatch();
    const [arrow,setarrow]=useState(true)
    const [categ,categfun]=useState('movie');
  
 console.log(po)
 
 
   useEffect(()=>{dispatch(personapicall(id))
   return (()=>{dispatch(removeperson())
 console.log("unmount")
   })
   
   },[id])
   return (
po?
   <div className='w-screen h-screen  overflow-y-auto overflow-x-hidden '>

<i className="ri-arrow-left-line  hover:text-[#6556CD]   text-3xl" onClick={()=>{nav(-1)}}></i>

{/* it contains pic plus detail in flex row */}
<div className='w-[100vw] min-h-[80vh] llp  flex '><img className='w-[30vw] ddimg  ml-[8vh] rounded-sm mt-[2vh] h-[80vh] object-cover'  
src={`https://image.tmdb.org/t/p/original/${po.detail.profile_path ||po.detail. poster_path}`}/>
<div className='ml-[8vh] flex flex-col'>
  <div className='mt-[6vh] text-zinc-100 text-3xl'>{po.detail.name}</div> 
<span className='mt-[2vh]  text-zinc-100 text-xl '>Biography</span>
<div className='mt-[6vh] text-zinc-200 ml-[1vh] font-light '>     
   { po.detail.biography=='' ?'No Information Available'   :  po.detail.biography.slice(0,1600)}
  </div>
</div>


</div>


   <div className='mt-[3vh] mb-[4vh] ml-[4vh] text-zinc-100 text-2xl'>Combined Credits</div>
<div className='flex gap-2  target5'> <Horizantlecart   info={po.combinecredits.cast}/> <Detailsidebar data={po.detail} externalid={po.externalid}/></div>
<div className='mt-[3vh] mb-[4vh] ml-[4vh] text-zinc-100 text-2xl' >Acting</div>
<Dropdown  arrow={arrow} setarrow={setarrow} options={['TV','MOVIE']} fun={categfun} />
<div className='flex flex-col  mt-[2vh] list-disc ml-3 rounded bg- shadow-zinc-300 shadow-lg w-[70%]  overflow-y-auto h-[55vh] border border-solid  border-zinc-100'> 

{po[categ+"credits"].cast.map((ele,index)=><li className='hover:bg-[#19191d] mb-[4vh] text-zinc-300 w-[40%] hover:text-zinc-400 rounded duration-200 cursor-pointer' >
  
  
  <Link  to={`/${categ}/details/${ele.id}`} className=''>
<span>{ele.title||ele.
original_title ||ele.original_name||ele.name}</span>
<span className='block ml-[5vh] font-light '>{ele.character && `Character:${ele.character}`}</span>

</Link>

</li>)}



 </div>




   
   </div>:<Loading/>

 
   )
}

export default Persondetail