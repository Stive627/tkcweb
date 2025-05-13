import fetchLink from "@/Functions/fetchLink";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useAuth(){
    const [auth, setAuth] = useState({status:undefined, email:undefined, username:undefined})
    useEffect(() => {
        const token = localStorage.getItem('tkc_token')
        axios({url:fetchLink('user/connect'), method:'GET', headers:{"Content-Type":"application/json", Authorization:`${token}`}})
        .then((value)=> {setAuth({status:value.data.authenticated, email:value.data.data.email, username:value.data.data.username}); console.log(value.data)})
        .catch(err => {console.log(err.response); setAuth({...auth, status:err.response.data.authenticated, })})
    },[])
    return auth
}