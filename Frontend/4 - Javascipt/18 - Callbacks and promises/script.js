// asynronus nature of javascipt

console.log("Ahmad is a hecker");
console.log("Hassan is a hecker");


setTimeout(() => {
    console.log(" i am inside timer function");
}, 2000);
setTimeout(() => {
    console.log(" i am inside timer function 3");
}, 2000);


console.log("the end")


const callback=(arg) => {
    console.log(arg);
  
}


const loadScript= async (src,callback) => {
    let sc= document.createElement("script");
    sc.src=src;
    sc.onload= ()=>callback("ahmad");
    document.head.append(sc)
    }


    loadScript("https://code.jquery.com/jquery-3.6.0.min.js",callback);
