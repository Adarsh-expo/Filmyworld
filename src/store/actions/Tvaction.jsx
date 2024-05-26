import { removetv } from "../reducers/tvSlice";
  import instance from "../../utils/axios";
import {loadtv} from '../reducers/tvSlice'

import { useParams } from "react-router-dom";

export  const  tvapicall=(id)=>async(dispatch,getState)=>{

    let wholedata;
   try{

const detail= await instance.get(`/tv/${id}`)
const similar= await instance.get(`/tv/${id}/similar`)
const credits= await instance.get(`/tv/${id}/credits`)
const recommendation= await instance.get(`/tv/${id}/recommendations`)
const video= await instance.get(`/tv/${id}/videos`)
const watchprovider= await instance.get(`/tv/${id}/watch/providers`)
const externalid= await instance.get(`/tv/${id}/external_ids`)
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
    console.log(err)
}




dispatch(loadtv(wholedata))
console.log(wholedata);

}
