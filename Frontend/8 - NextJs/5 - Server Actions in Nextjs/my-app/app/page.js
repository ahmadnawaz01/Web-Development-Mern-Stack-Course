"use client"
import { submitaction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  let ref=useRef()
  return (
    <div>
      <form  ref={ref}  action={(e)=>{submitaction(e); ref.current.reset()}}>
        <div className="w-2/3 mx-auto my-12">
          <label htmlFor="name">Name</label>
          <input name="name" id="name" type="text" className="text-white mx-4" />
        </div>
        <div className="w-2/3 mx-auto my-12">
          <label htmlFor="add">Adress</label>
          <input name="add" id="add" type="text" className="text-white mx-4" />
        </div>
        <div className="w-2/3 mx-auto my-12">
          <button className="border border-white">Submit</button>
        </div>
      </form>

    </div>
  );
}
