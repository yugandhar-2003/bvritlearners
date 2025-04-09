let aboutButton7 = document.getElementById("aboutButton7");
let timeToVisitButton7 = document.getElementById("timeToVisitButton7");
let attractionsButto7 = document.getElementById("attractionsButton7");

let aboutTab7 = document.getElementById("aboutTab7");
let timeToVisitTab7 = document.getElementById("timeToVisitTab7");
let attractionsTab7 = document.getElementById("attractionsTab7");

timeToVisitTab7.style.display = "none";
attractionsTab7.style.display = "none";

aboutButton7.onclick = function() {
    aboutButton7.style.backgroundColor = "white";
    timeToVisitButton7.style.backgroundColor = "#dae2ec";
    attractionsButton7.style.backgroundColor = "#dae2ec";
    aboutTab7.style.display = "block";
    aboutTab7.classList.add = "tabs-container";
    timeToVisitTab7.style.display = "none";
    attractionsTab7.style.display = "none";
}

timeToVisitButton7.onclick = function() {
    aboutButton7.style.backgroundColor = "#dae2ec";
    timeToVisitButton7.style.backgroundColor = "white";
    attractionsButton7.style.backgroundColor = "#dae2ec";
    aboutTab7.style.display = "none";
    timeToVisitTab7.style.display = "block";
    timeToVisitTab7.classList.add = "tabs-container";
    attractionsTab7.style.display = "none";
}
attractionsButton7.onclick = function() {
    aboutButton7.style.backgroundColor = "#dae2ec";
    timeToVisitButton7.style.backgroundColor = "#dae2ec";
    attractionsButton7.style.backgroundColor = "white";
    aboutTab7.style.display = "none";
    timeToVisitTab7.style.display = "none";
    attractionsTab7.style.display = "block";
    attractionsTab7.classList.add = "tabs-container";
}
