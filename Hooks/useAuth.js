"use client"
import fetchLink from "@/Functions/fetchLink";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useAuth(){
    const [auth, setAuth] = useState(undefined)
    useEffect(() => {
        axios({url:fetchLink('user/connect'), method:'GET', headers:{"Content-Type":"application/json"}})
        .then((value)=> {setAuth(value.data.authenticated); console.log(value.data)})
        .catch(err => console.error(err))
    },[])
    return auth
}