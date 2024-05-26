import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './Topnav';
import Dropdown from './reuse/Dropdown';
import { useState } from 'react';
import Carts from './Carts';
import Cartstrend from './reuse/Cartstrend';
import instance from '../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loader';


function Trending() {
    const[arrow ,setarrow]=useState(true)
    const[arrow1 ,setarrow1]=useState(true)
    const [categ,categfun]=useState('all');
    const [shift,shiftfun]=useState('day');
    document.title="Trending "+categ
    const [Filter,Filterset]=useState([]);
    const[page,setpage]=useState(1);
    const[hasMore,sethasMore]=useState(true);

    const nav=useNavigate();
    const filt=async()=>{
        try{const {data}= await instance.get(`/trending/${categ}/${shift}?page=${page}`);
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
useEffect(()=>{refreshhandler()},[categ,shift])
  return ( Filter.length>0?<div className='w-screen h-screen  '>

        <div className='w-screen h-[10vh]    flex  pt-[2vh] text-xl font-bold text-zinc-400'>
            <i class="ri-arrow-left-line mt-[4vh] ml-3 mr-2 hover:text-[#6556CD]" onClick={()=>{nav(-1)}}></i>
            <h1 className='mt-[4vh]'>Trending</h1> <div className='w-[90%] flex mt-1 ml-[25%] '><Topnav/>
           </div><Dropdown arrow={arrow} setarrow={setarrow} options={['ALL','TV','MOVIE']} fun={categfun}/> 
           <Dropdown arrow={arrow1} setarrow={setarrow1} options={['day','week']}  fun={shiftfun}/></div>

<InfiniteScroll 
dataLength={Filter.length} 
  loader={<Loading/>}
hasMore={hasMore}
next={filt} 

>
    <Cartstrend Filter={Filter} title={categ}/>
    </InfiniteScroll>

    </div>:<Loading/>
    
  )
}

export default Trending