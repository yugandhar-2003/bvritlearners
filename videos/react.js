let aboutButton9 = document.getElementById("aboutButton9");
let timeToVisitButton9 = document.getElementById("timeToVisitButton9");
let attractionsButton9 = document.getElementById("attractionsButton9");

let aboutTab9 = document.getElementById("aboutTab9");
let timeToVisitTab9 = document.getElementById("timeToVisitTab9");
let attractionsTab9 = document.getElementById("attractionsTab9");

timeToVisitTab9.style.display = "none";
attractionsTab9.style.display = "none";

aboutButton9.onclick = function() {
    aboutButton9.style.backgroundColor = "white";
    timeToVisitButton9.style.backgroundColor = "#dae2ec";
    attractionsButton9.style.backgroundColor = "#dae2ec";
    aboutTab9.style.display = "block";
    aboutTab9.classList.add = "tabs-container";
    timeToVisitTab9.style.display = "none";
    attractionsTab9.style.display = "none";
}

timeToVisitButton9.onclick = function() {
    aboutButton9.style.backgroundColor = "#dae2ec";
    timeToVisitButton9.style.backgroundColor = "white";
    attractionsButton9.style.backgroundColor = "#dae2ec";
    aboutTab9.style.display = "none";
    timeToVisitTab9.style.display = "block";
    timeToVisitTab9.classList.add = "tabs-container";
    attractionsTab9.style.display = "none";
}
attractionsButton9.onclick = function() {
    aboutButton9.style.backgroundColor = "#dae2ec";
    timeToVisitButton9.style.backgroundColor = "#dae2ec";
    attractionsButton9.style.backgroundColor = "white";
    aboutTab9.style.display = "none";
    timeToVisitTab9.style.display = "none";
    attractionsTab9.style.display = "block";
    attractionsTab9.classList.add = "tabs-container";
}

