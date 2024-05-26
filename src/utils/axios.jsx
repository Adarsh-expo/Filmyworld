import axios from "axios";
const instance=axios.create({

    baseURL:"https://api.themoviedb.org/3",
    headers:{
        Accept:'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODI4NjEzZWYzYzQ3M2ZlZjg2NDc1NWE0NGQwYjA0OCIsInN1YiI6IjY2M2VmYjc4MTgwYjBkZDllOGI1ZDMxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HHxA7RCEWdBn4_oN50LVGGV6sNwXPfiv0_DesXLs86w' ,
    }
})
export default instance;