import fs from "fs/promises"





let a= await fs.readFile("ahmad.txt")



// let b =await fs.writeFile("ahmad.txt","\n he loves to code . ")

let c =await fs.appendFile("ahmad.txt","\n he loves to play badminton also . ")
console.log(a.toString());