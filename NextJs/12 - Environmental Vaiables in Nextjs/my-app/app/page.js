"use client"
import Image from "next/image";


export default function Home() {
  // console.log("the id is = ",process.env.EMAIL);
  
  return (
    <>
    <div>this is a homepage {process.env.NEXT_PUBLIC_EMAIL}</div>
    </>
  );
}
