const btn = document.querySelectorAll('.btn')
input=document.getElementById("in")
let string = '';

Array.from(btn).forEach(
(button)=>{
        
    button.addEventListener("click", (e)=>{
        if(e.target.innerText == "="){
            let result = eval(string)
            input.value = result
        }
        else if(e.target.innerText=='C'){
            string="";
            input.value = string;
           
        }
        else if(e.target.innerText=="D"){
            string = string.slice(0, -1);
            input.value=string;
        }
        else{
            string += e.target.innerText;
            input.value=string;

        }
          
          


    })

    
})


