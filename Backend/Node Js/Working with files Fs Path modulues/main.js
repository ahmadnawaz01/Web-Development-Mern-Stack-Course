const fs = require('fs');


console.log('starting');

// fs.writeFileSync("ahmad.txt","ahmad is a good boy") synchrons

// fs.writeFile("ahmad2.txt","ahmad is a also a good boy",()=>{
// console.log('done');
// fs.readFile("ahmad.txt",(error,data)=>{
//     console.log(error,data.toString());
//     fs.writeFile("ahmad2.txt","ahmad is a also a good boy",()=>{
// console.log('done');
// fs.readFile("ahmad.txt",(error,data)=>{
//     console.log(error,data.toString());
    
// })
// callback hell-----------------------------------------------------------------------------------------
// })
// fs.writeFile("ahmad2.txt","ahmad is a also a good boy",()=>{
// console.log('done');
// fs.readFile("ahmad.txt",(error,data)=>{
//     console.log(error,data.toString());
    
// })

// })
    
// })

// })
fs.writeFile("ahmad2.txt","ahmad is a also a good boy",()=>{
console.log('done');
fs.readFile("ahmad.txt",(error,data)=>{
    console.log(error,data.toString());
    
})

})

fs.appendFile("ahmad.txt"," he is also a good coder as well.",(data,error)=>{
    console.log(data);
    
})
console.log('ending');
