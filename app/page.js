"use client"
import HOmeTKC from "@/Components/Home/HomeTKC";
import Login from "@/Components/Login/Login";
import useAuth from "@/Hooks/useAuth";

export default function Home() {
  const auth = useAuth()
  switch(auth){
    case true:
      return <HOmeTKC/>
    default:
      return <Login/>
  }
}
