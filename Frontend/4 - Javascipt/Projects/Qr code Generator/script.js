let input = document.querySelector("input");
let btn = document.querySelector("#btn");
let img = document.querySelector("#qr");

function generateqr() {
    if (input.value.length > 0) {
          img.classList.remove("show");
        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" 
                  + encodeURIComponent(input.value);
        img.onload = () => {
            void img.offsetWidth; 
            img.classList.add("show");
    }
}}

btn.addEventListener("click", generateqr);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); 
        generateqr();
    }
});