let btnLeft = document.getElementById("left");
let btnRight = document.getElementById("right");
let boxOne = document.getElementById("one");
let boxTwo = document.getElementById("two");

let slides = [boxOne, boxTwo];
let crntIdx = 0;

btnRight.addEventListener("click", () => {
    slides[crntIdx].style.display = "none";
    crntIdx = (crntIdx + 1) % slides.length;
    slides[crntIdx].style.display = "flex"
});

btnLeft.addEventListener("click", () => {
    slides[crntIdx].style.display = "none";
    crntIdx = (crntIdx - 1 +slides.length) % slides.length;
    slides[crntIdx].style.display = "flex"
});







