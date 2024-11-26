const elBtn = document.querySelector(".open")
const elModal = document.querySelector(".modal")
const elClose = document.querySelector(".close")

elBtn.addEventListener("click", function(evt){
    elModal.style.display = "block"

})

elClose.addEventListener("click", function(evt){
    elModal.style.display = "none";
})

window.addEventListener("keydown", function(evt){
if(evt.key === "Escape"){
    elModal.style.display = "none";
}
})

window.addEventListener("keydown", function(evt){
    if(evt.key === "Enter"){
        elModal.style.display = "block"
    }
})
