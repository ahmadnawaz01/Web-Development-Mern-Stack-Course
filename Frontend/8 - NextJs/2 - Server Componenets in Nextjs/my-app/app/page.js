"use client"
import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [count, setcount] = useState(0);
  return (
    <div>
      i am a component {count}
      <button onClick={()=>{
        setcount(count+1)
      }}>click</button>
    </div>
  );
}
