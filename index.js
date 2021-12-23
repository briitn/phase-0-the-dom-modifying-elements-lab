// Write your code here!
const pop= document.getElementById("main")
pop.remove()
const newHeader=document.createElement("h1")
newHeader.id="victory"
newHeader.textContent="YOUR-NAME is the champion"
document.body.apppend(newHeader)
