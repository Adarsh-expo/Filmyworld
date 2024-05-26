import { removeperson } from "../reducers/personSlice";
  import instance from "../../utils/axios";
import {loadperson} from '../reducers/personSlice'

import { useParams } from "react-router-dom";

export  const  personapicall=(id)=>async(dispatch,getState)=>{
   let wholedata={}
try{
    const detail= await instance.get(`/person/${id}`)
    const  combinecredits= await instance.get(`/person/${id}/combined_credits`)
    const moviecredits= await instance.get(`/person/${id}/movie_credits`)
    const tvcredits= await instance.get(`/person/${id}/tv_credits`)
    const externalid= await instance.get(`/person/${id}/external_ids`)
    
    wholedata={
    detail:detail.data,
    moviecredits: moviecredits.data,
    tvcredits: tvcredits.data,
  combinecredits: combinecredits.data,
    externalid:externalid.data,
    
    }}
    
    catch(err){
        console.log(err)
    }
    
   
    dispatch(loadperson(wholedata))
    console.log(wholedata);
    
    }
    