"use client"
import Image from "next/image";


export default function Home() {
  const handleclick= async()=>{
    let data={
      name:"Ahmad",
      role:"Coder"
    }
    let a = await fetch("/api",{method:"POST", headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(data),
  })
    let res=await a.json();
    console.log(res);
    
  }
  return (
<div>
  <h1  className="font-bold text-xl">
    Next.js Api Routes Demo
    <button onClick={handleclick} >Click me</button>
  </h1>
</div>
  );
}
