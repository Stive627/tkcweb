import fetchLink from "@/Functions/fetchLink";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useSnippet(){
    const [snippets, setSnippets] = useState(undefined)
    useEffect(() => {
        axios({url:fetchLink('snippet/'), withCredentials:true, method:'GET', headers:{"Content-Type":"application/json"}})
        .then((value) => {console.log(value.data); setSnippets(value.data)})
        .catch(err => console.log(err))
    })
    return snippets
}