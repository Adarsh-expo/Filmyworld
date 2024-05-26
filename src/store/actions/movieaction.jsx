import { removemovie } from "../reducers/movieSlice";
  import instance from "../../utils/axios";
import {loadmovie} from '../reducers/movieSlice'

import { useParams } from "react-router-dom";

export  const  movieapicall=(id)=>async(dispatch,getState)=>{
   let wholedata={};
try{
const detail= await instance.get(`/movie/${id}`)
const similar= await instance.get(`/movie/${id}/similar`)
const credits= await instance.get(`/movie/${id}/credits`)
const recommendation= await instance.get(`/movie/${id}/recommendations`)
const video= await instance.get(`/movie/${id}/videos`)
const watchprovider= await instance.get(`/movie/${id}/watch/providers`)
const externalid= await instance.get(`/movie/${id}/external_ids`)

wholedata={
detail:detail.data,
similar:similar.data.results,
credits:credits.data,
recommendation:recommendation.data.results,
video:video.data.results.find((ele)=>ele.type==='Trailer'),
watchprovider:watchprovider.data.results.IN,
externalid:externalid.data,

}
}
catch(err){
  console.log
}


 
dispatch(loadmovie(wholedata))
console.log(wholedata);

}
