function showPrice(){
    const select = document.querySelector(".select")
    const name = document.querySelector(".name")
    const price = document.querySelector(".price")

     const selectValue = select.value
     name.textContent = selectValue
     if(selectValue === "Asus"){
        price.textContent = `Asus price is $500`
     }else if(selectValue === "HP"){
        price.textContent = `HP price is $600`
     }else if(selectValue === "MacBook"){
        price.textContent = `MacBook price is $1500`
     }
}

