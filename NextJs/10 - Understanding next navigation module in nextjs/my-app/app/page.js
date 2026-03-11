"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname=usePathname();
  
  return (
    <>
    <div>
      this is our first page
    </div>
    </>
  );
}
