const inputText = document.querySelector("#input") // input
const inputs = document.querySelector("#inputs") // ul
const btn = document.querySelector("#btn") // button


const handleClick = (e) => {
    e.preventDefault();
    const value = inputText.value
    var newElement = document.createElement("li")
    var newInput = document.createElement("i")
    var newButton = document.createElement("i")
    var icon = document.createElement("i")
    var span = document.createElement("span")
    newElement.setAttribute("class","elemanlar")
    newButton.setAttribute("class","fas fa-trash")
    newButton.id = "trash"
    icon.setAttribute("style","float:right")
    newButton.setAttribute("style","float:right")
    icon.setAttribute("class","far fa-star")
    span.setAttribute("class","span")
    newInput.setAttribute("class","far fa-check-circle")
    span.innerText= value
    
    if (value.trim() != ""){
    newElement.appendChild(newInput)
    newElement.appendChild(span)
    newElement.appendChild(icon)
    newElement.appendChild(newButton)
    inputs.appendChild(newElement)
    inputText.value = null
    }
    
    newInput.addEventListener("click",function(){
        if(newInput.className != "far fa-check-circle"){
            newInput.setAttribute("class","far fa-check-circle")
        }else{
            newInput.setAttribute("class","fas fa-check-circle")
        }
        if(span.style.textDecoration != "line-through"){
       span.style.textDecoration = "line-through"
        }else {
        span.style.textDecoration = "none"
        }
    })
      newButton.addEventListener("click",function(){
          newElement.remove()
      })
      icon.addEventListener("click",function(){
          if(icon.className != "fas fa-star"){
          icon.setAttribute("class","fas fa-star")
          icon.style.color = "yellow"
          }else{
            icon.setAttribute("class","far fa-star")
            icon.style.color = "white"
          }
          
      })
}
const hoverButton = () => {
    btn.setAttribute("style", "cursor:pointer")
}

btn.addEventListener("click",handleClick)
btn.addEventListener("mouseover", hoverButton)

