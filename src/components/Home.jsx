import React, { useEffect, useState } from 'react'
import Sidenav from '../partials/Sidenav';
import Topnav from './Topnav';
import instance from '../utils/axios';
import Header from '../partials/Header';
import Carts from './Carts';
import Loading from './Loader';
function Home() {
  const [wallpaper,setwallpaper]=useState(null);
    document.title="Filmyworld||Homepage";
const allmovies=async()=>{
const {data}=await instance.get("/trending/all/week");
console.log(data)
setwallpaper(data.results);

}
useEffect(()=>{allmovies()},[])
  return (wallpaper?
  <>  <Sidenav/>
    <div className=' w-[90%] main  relative overflow-x-hidden overflow-y-auto '>
<div className='topnavhead'><Topnav/></div>
<Header dataji={wallpaper}/>

<Carts/>
    </div></> :<Loading/>
 )
}


export default Home