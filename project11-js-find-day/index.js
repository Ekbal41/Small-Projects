const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');
const button = document.getElementById('getDay');

const result = document.getElementById('result')

button.addEventListener('click', ()=>{
    let newdate=new Date(`${date.value} ${month.value} ${year.value}`);
    let day = newdate.toString();
    day = day.slice(0,3);
    result.textContent = day;


})