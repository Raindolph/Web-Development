const heading = document.createElement("h1");
document.body.appendChild(heading);
heading.innerHTML = "<i>javaScript is awesome</i>"
const paragraph = document.createElement("p");
document.body.appendChild(paragraph)

function greeting(){
    alert("Welcome to JavaScript")
}

btn = document.getElementById("#btn")
// btn = addEventListener("click", greeting)

btn = addEventListener("click", ()=>{
    alert("hello world")
})