"use server"
import fs from "fs/promises"
export const submitaction=async(e)=>{
    console.log(e.get("name"),e.get("add"));
    
    let a =await fs.writeFile("ahmad.txt",`name is ${e.get("name")} and add is ${e.get('add')}`);
    console.log(a);
  }
