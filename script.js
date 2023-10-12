let introSection = document.querySelector("#intro")
// introSection.style.background = "gray"

introSection.className = "redback";

let heading = document.createElement("h1");
let headingText = document.createTextNode("BigHead");
heading.appendChild(headingText);
document.body.appendChild(heading);

let elements = document.querySelectorAll(".class");
for(let i=0; i<elements.length; i++){
    

}