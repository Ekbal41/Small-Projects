const hourel = document.querySelector(".hour");
const minel = document.querySelector(".min ");
const secel = document.querySelector(".sec");



function updateClock(){
    const correntDate = new Date();
     setTimeout(updateClock,1000)

     hour = correntDate.getHours();
     sec = correntDate.getSeconds();
     min = correntDate.getMinutes();
     const hourDeg = (hour/12)*360;
     const minDeg = (min/60)*360;
     const secDeg = (sec/60)*360;



     hourel.style.transform=`rotate(${hourDeg}deg)`;
     minel.style.transform=`rotate(${minDeg}deg)`;
     secel.style.transform=`rotate(${secDeg}deg)`;


}

updateClock()