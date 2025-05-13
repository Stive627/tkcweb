"use client"
import HOmeTKC from "@/Components/Home/HomeTKC";
import Login from "@/Components/Login/Login";
import useAuth from "@/Hooks/useAuth";

export default function Home() {
  const {status} = useAuth()
  console.log(status)
  switch(status){
    case true:
      return <HOmeTKC/>
    case false:
      return <Login/>
    default:
      return <></>
  }
}
