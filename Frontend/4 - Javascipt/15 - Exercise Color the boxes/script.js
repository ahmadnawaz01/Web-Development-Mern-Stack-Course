console.log("Script.js is initializing")

// let boxes =document.getElementsByClassName("box");
let boxes = document.querySelector(".container").children;


function getrandomcolor() {
    // let val1= Math.floor(233*Math.random());
    // let val2=Math.floor(124*Math.random());
    // let val3=Math.floor(111*Math.random());

    let val1 = Math.floor(Math.random() * 234);
    let val2 = Math.floor(Math.random() * 125);
    let val3 = Math.floor(Math.random() * 112);
    return `rgb(${val1}, ${val2}, ${val3})`;
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getrandomcolor();
    e.style.color = getrandomcolor();
})