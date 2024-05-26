import { useState } from 'react'
import reactLogo from './assets/react.svg'


import {Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import Tv from './components/Tv'
import Moviedetail from './components/Moviedetail'
import Tvdetails from './components/Tvdetails'
import People from './components/People'
import Persondetail from './components/Persondetail'
import Trailer from './components/reuse/Trailer'
import About from './components/About'
function App() {
  

  return (
    <div className='bg-[#1F1E24] h-screen w-screen   flex'>
<Routes>
<Route path='/'  element={<Home/>}/>
<Route path='/trending'  element={<Trending/>}/>
<Route path='/popular'  element={<Popular/>}       />
<Route path='/movie'  element={<Movie/>} />
<Route path='/People'  element={<People/>} />

  <Route  path='/movie/details/:id'  element={<Moviedetail/>}>
<Route path='/movie/details/:id/trailer' element={<Trailer/>}  />
  </Route>



  



<Route path='/people/details/:id' element={<Persondetail/>}/>




<Route path='/tv'  element={<Tv/>} />

  <Route  path='/tv/details/:id' element={<Tvdetails/>}>
  <Route path='/tv/details/:id/trailer' element={<Trailer/>}  />

  </Route>








<Route  path='/tv/:id' element={<Tvdetails/>}/>
<Route  path='/movie/:id' element={<Moviedetail/>}/>
<Route path='/about' element={<About/>}/>
</Routes>


    </div>
  )
}

export default App
