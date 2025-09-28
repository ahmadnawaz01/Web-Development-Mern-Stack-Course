//you have to write a Node.js program to clear the clutter inside of the directory and organize the contents of that directory into different folders


//for example

// 1.name.jpg
// 2.name.png
// 3.this.pdf
// 4.ahmad.zip
// 5.hassan.zip
// 6.cat.jpg



//this:
//jpg/name.jpg , jpg/cat.jpg
//png/name.png
//zip/ahmad.zip , hassan.zip

//same extension type file goes to same folder name of their type

import fs from "fs/promises"
import fsn from "fs"
import path from 'path'


let basepath = ("C:\\Users\\A\\Desktop\\Web Devoplement\\Web-Development-Course\\Backend\\Express Js\\Exercise Clear the clutter")
let files = await fs.readdir(basepath);


for (const i of files) {
    let ext = i.split('.')[i.split('.').length - 1]
    if (i.split('.').length > 1 && ext != 'js' && ext != 'json') {
        if (fsn.existsSync(path.join(basepath, ext))) //check if directory is availble
        {
            //move the files to the directory if its not a js and json file
            fs.rename(path.join(basepath,i),path.join(basepath,ext,i))
        }
        else {
            fs.mkdir(path.join(basepath, ext))
            fs.rename(path.join(basepath,i),path.join(basepath,ext,i));
        }
    }
}
