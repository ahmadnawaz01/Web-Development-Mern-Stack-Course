// IIFE-------------------------------------------

// async function sleep() {
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{

// resolve(45);
//         },1000);
//     })
    
// }

//  ( async function main(){

// // let a =await sleep();
// // console.log(a)
// // let b=await sleep();
// // console.log(b)


// // destrcuting--------------------------------------------

// // let [x,y,...rest]=[1,5,8,9,8,5]
// // console.log(x,y,rest)

// // let obj={
// //     a:1,
// //     b:1,c:1
// // }

// // let {a,b}=obj;
// // console.log(a,b);

// })()







// spread operator----------------------------------
                   
function sum(a,b,c)
{
return a+b+c;
}


let arr=[2,4,5];
console.log(sum(...arr));

