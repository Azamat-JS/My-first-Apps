// -------------------  CURRENCY APP -------------------

const elTtitle = document.querySelector(".title");
const elForm = document.querySelector(".form");
const elSumma = document.querySelector(".summa");
const elSpan = document.querySelector(".span");
const elBtn = document.querySelector(".btn");
        
        function exchange(){
          
          const elInput = document.querySelector(".input");
          const elSelect = document.querySelector(".select");
          const elResult = document.querySelector(".result");
          const inputValue = elInput.value;
            const selectValue = elSelect.value;
            if(selectValue === "USD"){
              elResult.textContent = inputValue * sum[0].USD
              elSpan.textContent = "USD"
          }else if(selectValue === "RUBL"){
            elResult.textContent = inputValue * sum[2].RUBL
            elSpan.textContent = "RUBL"
          }else if( selectValue === "EURO"){
            elResult.textContent = inputValue * sum[1].EURO
            elSpan.textContent = "EURO"
          }else if(selectValue === "YUAN"){
            elResult.textContent = inputValue * sum[4].YUAN
            elSpan.textContent = "YUAN"
          }else if(selectValue === "GOLD"){
            elResult.textContent = inputValue * sum[6].GOLD
            elSpan.textContent = "GOLD"
          }else if(selectValue === "FUNT"){
            elResult.textContent = inputValue * sum[3].FUNT
            elSpan.textContent = "FUNT"
          }else if(selectValue === "DINOR"){
            elResult.textContent = inputValue * sum[5].DINOR
            elSpan.textContent = "DINOR"
          }

}

