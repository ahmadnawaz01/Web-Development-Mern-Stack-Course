setInterval(()=>{
  let date = new Date();
   let  h =date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let hrot = 30*h+m/2;
    let mrot=6*m;
    let srot=6*s;


    document.querySelector(".hour").style.transform = `rotate(${hrot}deg)`;
    document.querySelector(".min").style.transform = `rotate(${mrot}deg)`;
    document.querySelector(".sec").style.transform = `rotate(${srot}deg)`;
},1000)


setInterval();