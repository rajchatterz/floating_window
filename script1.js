document.addEventListener('DOMContentLoaded',()=>{
    const openButton = document.getElementById("open-model")
    const closeButton = document.getElementById("close-model")

    const model = document.getElementById("model")
    openButton.addEventListener("click",()=>{
        model.style.display='block'
    })
    closeButton.addEventListener('click',()=>{
        model.style.display='none'
    })
})