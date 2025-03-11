let btnLeft = document.getElementById("left");
let btnRight = document.getElementById("right");
let body = document.querySelector("body");
let boxOne = document.getElementById("one"); 
let boxTwo = document.getElementById("two"); 

btnLeft.addEventListener("click", () => {
    boxOne.style.display = "flex";
    boxTwo.style.display = "none";

});

btnRight.addEventListener("click", () => {
    boxOne.style.display = "none";
    boxTwo.style.display = "flex";

});







