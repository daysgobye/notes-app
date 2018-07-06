let note = document.getElementsByClassName("note__1")
console.log(document.querySelector(".buttongreen"))
let greenbutton = document.querySelector(".buttongreen").addEventListener('click',noteGreen)
let fontsize = document.querySelector(".fontsize").addEventListener('click',textsize)

function noteGreen(){
    note[0].style.backgroundColor = "lightgreen"
    console.log ('changed color'); 
}

function textsize(){
    note[0].style.fontSize = "20px"
    console.log (' text color changed'); 
}