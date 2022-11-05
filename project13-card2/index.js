const btn = document.getElementById("share")
const mobile = document.getElementById("m")
const dextop = document.getElementById("d")

btn.addEventListener('click', ()=>{
    mobile.classList.toggle("show");
    dextop.classList.toggle("show");
})
