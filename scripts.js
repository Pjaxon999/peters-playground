// test external link
console.log("Hello there!");

// Basic idea here is to explore the scope, closure, factory function, IIFE stuff I've been trying to learn
// We have a set of buttons which will change the font-size style property to whatever the textContent of the
// button is. I'll try to write it in different ways utilizing these concepts

function makeSizeChange(size) {
    return function() {
        document.body.style.fontSize = `${size}px`;
    };
}

const size14 = makeSizeChange(14);
const size16 = makeSizeChange(16);
const size18 = makeSizeChange(18);

document.getElementById("14").onclick = size14;
document.getElementById("16").onclick = size16;
document.getElementById("18").onclick = size18; 