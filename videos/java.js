let aboutButton3 = document.getElementById("aboutButton3");
let timeToVisitButton3 = document.getElementById("timeToVisitButton3");
let attractionsButton3 = document.getElementById("attractionsButton3");

let aboutTab3 = document.getElementById("aboutTab3");
let timeToVisitTab3 = document.getElementById("timeToVisitTab3");
let attractionsTab3 = document.getElementById("attractionsTab3");

timeToVisitTab3.style.display = "none";
attractionsTab3.style.display = "none";

aboutButton3.onclick = function() {
    aboutButton3.style.backgroundColor = "white";
    timeToVisitButton3.style.backgroundColor = "#dae2ec";
    attractionsButton3.style.backgroundColor = "#dae2ec";
    aboutTab3.style.display = "block";
    aboutTab3.classList.add = "tabs-container";
    timeToVisitTab3.style.display = "none";
    attractionsTab3.style.display = "none";
}

timeToVisitButton3.onclick = function() {
    aboutButton3.style.backgroundColor = "#dae2ec";
    timeToVisitButton3.style.backgroundColor = "white";
    attractionsButton3.style.backgroundColor = "#dae2ec";
    aboutTab3.style.display = "none";
    timeToVisitTab3.style.display = "block";
    timeToVisitTab3.classList.add = "tabs-container";
    attractionsTab3.style.display = "none";
}
attractionsButton3.onclick = function() {
    aboutButton3.style.backgroundColor = "#dae2ec";
    timeToVisitButton3.style.backgroundColor = "#dae2ec";
    attractionsButton3.style.backgroundColor = "white";
    aboutTab3.style.display = "none";
    timeToVisitTab3.style.display = "none";
    attractionsTab3.style.display = "block";
    attractionsTab3.classList.add = "tabs-container";
}
