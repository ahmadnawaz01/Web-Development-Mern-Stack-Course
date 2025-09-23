let btn=document.getElementById("btn");

btn.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML="Yay You are clicked";
})

btn.addEventListener("contextmenu", ()=>{
    alert("Dont Click right on the website it cause an errror");
})
btn.addEventListener("keydown", (e)=>{
   console.log(e.key);
})