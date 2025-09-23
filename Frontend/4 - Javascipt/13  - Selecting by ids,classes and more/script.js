console.log("selecting elements by ids and classes and more")

let info=document.getElementsByClassName("box");
console.log(info);


info[2].style.backgroundColor = "red";


document.getElementById("yellow").style.backgroundColor = "yellow";

document.querySelector(".box").style.backgroundColor = "yellow";


document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "orange";
})


Array.from(document.getElementsByTagName("div")).forEach(e => {
    e.style.backgroundColor = "White";
});


for (let e of document.getElementsByTagName("div")) {
    e.style.backgroundColor = "yellow";
}


info.matches("box");
