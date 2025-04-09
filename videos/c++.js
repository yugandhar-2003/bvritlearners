
let aboutButton4 = document.getElementById("aboutButton4");
let timeToVisitButton4 = document.getElementById("timeToVisitButton4");
let attractionsButton4 = document.getElementById("attractionsButton4");

let aboutTab4 = document.getElementById("aboutTab4");
let timeToVisitTab4 = document.getElementById("timeToVisitTab4");
let attractionsTab4 = document.getElementById("attractionsTab4");

timeToVisitTab4.style.display = "none";
attractionsTab4.style.display = "none";

aboutButton4.onclick = function() {
    aboutButton4.style.backgroundColor = "white";
    timeToVisitButton4.style.backgroundColor = "#dae2ec";
    attractionsButton4.style.backgroundColor = "#dae2ec";
    aboutTab4.style.display = "block";
    aboutTab4.classList.add = "tabs-container";
    timeToVisitTab4.style.display = "none";
    attractionsTab4.style.display = "none";
}

timeToVisitButton4.onclick = function() {
    aboutButton4.style.backgroundColor = "#dae2ec";
    timeToVisitButton4.style.backgroundColor = "white";
    attractionsButton4.style.backgroundColor = "#dae2ec";
    aboutTab4.style.display = "none";
    timeToVisitTab4.style.display = "block";
    timeToVisitTab4.classList.add = "tabs-container";
    attractionsTab4.style.display = "none";
}
attractionsButton4.onclick = function() {
    aboutButton4.style.backgroundColor = "#dae2ec";
    timeToVisitButton4.style.backgroundColor = "#dae2ec";
    attractionsButton4.style.backgroundColor = "white";
    aboutTab4.style.display = "none";
    timeToVisitTab4.style.display = "none";
    attractionsTab4.style.display = "block";
    attractionsTab4.classList.add = "tabs-container";
}
