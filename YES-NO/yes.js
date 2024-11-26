const form = document.querySelector(".form")
const rainCheck = document.querySelector(".rainCheck")
const gymCheck = document.querySelector(".gymCheck")
const title = document.querySelector(".title")
const spanNo = document.querySelector(".no")
const spanYes = document.querySelector(".yes")
const inputTemp = document.querySelector(".input")


function running(){
    
    const inputTemp = document.querySelector(".input")
    const rainCheck = document.querySelector(".rainCheck")
    const gymCheck = document.querySelector(".gymCheck")
    const title = document.querySelector(".title")
    const spanNo = document.querySelector(".no")
    const spanYes = document.querySelector(".yes")
    
    const inputValue = inputTemp.value
    
   
    if(inputValue > 5 && inputValue < 30 && rainCheck.checked == false && gymCheck.checked == false){
      spanYes.style.color = "green"
      spanNo.style.color = 'black'
    }else if(inputValue < 5 && inputValue !== ""){
         spanNo.style.color = 'red'
        spanYes.style.color = "black"
    }
    else if(rainCheck.checked == true && gymCheck.checked == false){
         spanNo.style.color = 'red'
        spanYes.style.color = "black"
    }else if(gymCheck.checked == true && rainCheck.checked == true){
        spanNo.style.color = 'black'
        spanYes.style.color = "green"
    }else if(inputValue < 5 && rainCheck.checked == false && gymCheck.checked == true){
         spanNo.style.color = 'red'
        spanYes.style.color = "black"
    }else if(rainCheck.checked == true && gymCheck.checked == true && inputValue === undefined ){
        spanNo.style.color = 'black'
       spanYes.style.color = "green"}
    else if (gymCheck.checked === true && rainCheck.checked === false){
     spanYes.style.color = "green"
      spanNo.style.color = 'black'
    }
    else{
        spanYes.style.color = "black"
        spanNo.style.color = 'black' 
    }
}
