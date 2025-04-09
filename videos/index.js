 

let aboutButton1 = document.getElementById("aboutButton1");
let timeToVisitButton1 = document.getElementById("timeToVisitButton1");
let attractionsButton1 = document.getElementById("attractionsButton1");

let aboutTab1 = document.getElementById("aboutTab1");
let timeToVisitTab1 = document.getElementById("timeToVisitTab1");
let attractionsTab1 = document.getElementById("attractionsTab1");

timeToVisitTab1.style.display = "none";
attractionsTab1.style.display = "none";

aboutButton1.onclick = function() {
    aboutButton1.style.backgroundColor = "white";
    timeToVisitButton1.style.backgroundColor = "#dae2ec";
    attractionsButton1.style.backgroundColor = "#dae2ec";
    aboutTab1.style.display = "block";
    aboutTab1.classList.add = "tabs-container";
    timeToVisitTab1.style.display = "none";
    attractionsTab1.style.display = "none";
}

timeToVisitButton1.onclick = function() {
    aboutButton1.style.backgroundColor = "#dae2ec";
    timeToVisitButton1.style.backgroundColor = "white";
    attractionsButton1.style.backgroundColor = "#dae2ec";
    aboutTab1.style.display = "none";
    timeToVisitTab1.style.display = "block";
    timeToVisitTab1.classList.add = "tabs-container";
    attractionsTab1.style.display = "none";
}
attractionsButton1.onclick = function() {
    aboutButton1.style.backgroundColor = "#dae2ec";
    timeToVisitButton1.style.backgroundColor = "#dae2ec";
    attractionsButton1.style.backgroundColor = "white";
    aboutTab1.style.display = "none";
    timeToVisitTab1.style.display = "none";
    attractionsTab1.style.display = "block";
    attractionsTab1.classList.add = "tabs-container";
}
