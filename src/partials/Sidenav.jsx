import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  const [navscreen,setnavscreen]=useState(window.innerWidth<1240);
  const [screen,setscreen]=useState(false);
window.addEventListener('resize',()=>{
if(window.innerWidth<1240){
  setnavscreen(true)
}
else{
  setnavscreen(false)
}


})
  return (<>
    {navscreen && <button className='text-zinc-300 text-2xl  absolute top-[1.6rem] left-[0.6rem] z-10' onClick={()=>{setscreen((pre)=>!pre)}}><i  class="    hover:text-white  ri-menu-line "></i></button>}
    <div className={` ${navscreen ? `${screen ?'left-0 z-10 w-[60vw]  h-[80vh]  overflow-y-auto bg-[#1F1E24]':'left-[-30rem]'}  fixed`:'w-[20%]         sidenav h-screen border-r-2 border-zinc-300 overflow-x-hidden '}        `}>
  {screen &&<button className=' fixed   text-xl text-zinc-100 left-[9rem] top-[2vh]  ' onClick={()=>{ setscreen(false)}}><i class="  ri-xrp-fill"></i></button> }  
<h1 className='text-2xl font-bold ml-8 mt-5 mb-5 text-zinc-200'><i  className="ri-tv-fill  text-[#6556CD]  "></i><span>Film</span></h1>
    <nav className='flex flex-col gap-3 ml-8  text-zinc-400'> 
        <h1 className='font-semibold text-xl mb-3'>New Feed</h1>
        <Link to="/trending" className='hover:bg-[#6556CD] rounded-lg hover:text-white p-3 duration-300 w-[80%]'><i className="ri-fire-fill mr-2 "></i>Trending</Link>
        <Link to='/popular' className='hover:bg-[#6556CD] rounded-lg hover:text-white p-3 duration-300 w-[80%]'  ><i className="ri-bard-fill  mr-2"></i>Popular</Link>
        <Link to='/movie' className='hover:bg-[#6556CD] rounded-lg hover:text-white p-3 duration-300 w-[80%]'  ><i className="ri-movie-fill  mr-2"></i>Movies</Link>
        <Link  to='/tv' className='hover:bg-[#6556CD] rounded-lg hover:text-white p-3 duration-300 w-[80%]'  ><i className="ri-slideshow-3-line mr-2"></i>TV Shows</Link>
        <Link  to='/people' className='hover:bg-[#6556CD] rounded-lg hover:text-white p-3 duration-300 w-[80%]' ><i className="ri-team-fill mr-2"></i>People</Link>
        
        </nav>  
        <hr className='border-none h-[1px] bg-zinc-200 ml-8 mr-7  mt-2 mb-5'/>  
        <nav className='flex flex-col gap-3 ml-8 text-zinc-400'>
        <h1 className='font-semibold text-xl mb-3'>New Feed</h1>
        <Link to='/about' className='hover:bg-[#6556CD] rounded-lg hover:text-white p-3 duration-300 w-[80%]'><i className="ri-information-2-fill mr-2"></i>About</Link>
        <Link className='hover:bg-[#6556CD] rounded-lg hover:text-white p-3 duration-300 w-[80%]'  ><i className="ri-phone-fill mr-2 "></i>Contact</Link>
        
        
        </nav>  
    </div></>
  )
}

export default Sidenav