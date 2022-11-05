const hr=document.getElementById('hour')
const minuits=document.getElementById('min')
const second=document.getElementById('sec')
const amorpm=document.getElementById('am')
console.log(hr)

function changeTime(){
   const date = new Date();
    let  hour = date.getHours();
    let  munu = date.getMinutes();
    let  seconds = date.getSeconds();
    let amorpm1;

    console.log(hour)

    minuits.textContent = munu;
    hr.textContent = (hour-12);
    second.textContent = seconds;

    if(hour>12){
        amorpm1='PM'

    }
    else{
        amorpm1='am'
    }
    amorpm.textContent=amorpm1;

    
}
changeTime()
setInterval(changeTime, 1000)


