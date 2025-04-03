"use client"
import fetchLink from "@/Functions/fetchLink";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useAuth(){
    const [auth, setAuth] = useState(undefined)
    useEffect(() => {
        const token = localStorage.getItem('tkc_token')
        console.log(token)
        axios({url:fetchLink('user/connect'), method:'GET', headers:{"Content-Type":"application/json", Authorization:`a${token}`}})
        .then((value)=> {setAuth(value.data.authenticated); console.log(value.status)})
        .catch(err => {console.log(err.response); setAuth(err.response.data.authenticated)})
    },[])
    return auth
}