import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './Topnav';

import { useState } from 'react';
import Carts from './Carts';
import Cartstrend from './reuse/Cartstrend';
import instance from '../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loader';

function People() {
    const[arrow ,setarrow]=useState(true);
   
    document.title="People";
   
    const [Filter,Filterset]=useState([]);
    const[page,setpage]=useState(1);
    const[hasMore,sethasMore]=useState(true);

    const nav=useNavigate();
    const filt=async()=>{
    try{const {data}= await instance.get(`/person/popular?page=${page}`);
    console.log(data.results);
    if(data.results.length>0){
       console.log(1)  
        Filterset((pre)=>[...pre,...data.results])
        
setpage((pre)=>pre+1);
    }else{
sethasMore(false);
    }
   
}
    catch(err){
        console.log(err);
    }


}
const refreshhandler=()=>{
    if(Filter.length===0){
        filt()
    }
    else{
        setpage(1);
        Filterset([])
        filt()
    }

}
useEffect(()=>{refreshhandler()},[])
  return ( Filter.length>0?
    <div className='w-screen target4 h-screen  '>
    <div className='w-screen h-[10vh]  target3  flex  pt-[2vh] text-xl font-bold text-zinc-400'>
    <div className='flex flex-row justify-center items-center'> <button className='arrow flex justify-center items-center'><i class="ri-arrow-left-line mt-[4vh] ml-3 mr-2 hover:text-[#6556CD]" onClick={()=>{nav(-1)}}></i></button>  
            <h1 className='mt-[4vh]'>People</h1></div>
    
 <div className='w-[52%] flex mt-1 ml-[10%]  '><Topnav/>
   </div> 
  </div>

<InfiniteScroll 
dataLength={Filter.length} 
loader={<h1>...Loading</h1>}
hasMore={hasMore}
next={filt} 

>
<Cartstrend Filter={Filter} title='people'/>
</InfiniteScroll>

</div>:<Loading/>
  )
}

export default People