// test external link
console.log("Hello there!");

// Basic idea here is to explore the scope, closure, factory function, IIFE stuff I've been trying to learn
// We have a set of buttons which will change the font-size style property to whatever the textContent of the
// button is. I'll try to write it in different ways utilizing these concepts

// Grab buttons
const btns = document.querySelectorAll(".btn");
btns.forEach(button => {
    button.addEventListener("click", fontSizer)        
});

function fontSizer(e){
    let newSize = parseInt(e.target.textContent);
    document.body.style.fontSize = `${newSize}px`;
}