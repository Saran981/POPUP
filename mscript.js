var popupoverlay=document.querySelector(".pop-overlay")
var popupbox=document.querySelector(".pop-box")
var addpopupbutton=document.getElementById("add-popup-btn")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelpopup=document.getElementById("cancel-pop")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})
//select container,add-book,bk-title-input,bk-auth-input,bk-desc

var container=document.querySelector(".container")
var addbook=document.getElementById("add-mv")
var mvnameinput=document.getElementById("mv-nm-input")
var mvactinput=document.getElementById("mv-act-input")
var mvdirectinput=document.getElementById("mv-dict-input")
var mvdescriptinput=document.getElementById("mv-desc")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","movie-contain")
    div.innerHTML=`<h2>${mvnameinput.value}</h2>
    <h5>${mvactinput.value}</h5>
    <h5>${mvdirectinput.value}</h5>
    <p>${mvdescriptinput.value}</p>
    <button onclick="deletemv(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletemv(event){
    event.target.parentElement.remove()
}