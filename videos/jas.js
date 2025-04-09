let aboutButton8 = document.getElementById("aboutButton8");
let timeToVisitButton8 = document.getElementById("timeToVisitButton8");
let attractionsButton8 = document.getElementById("attractionsButton8");

let aboutTab8 = document.getElementById("aboutTab8");
let timeToVisitTab8 = document.getElementById("timeToVisitTab8");
let attractionsTab8 = document.getElementById("attractionsTab8");

timeToVisitTab8.style.display = "none";
attractionsTab8.style.display = "none";

aboutButton8.onclick = function() {
    aboutButton8.style.backgroundColor = "white";
    timeToVisitButton8.style.backgroundColor = "#dae2ec";
    attractionsButton8.style.backgroundColor = "#dae2ec";
    aboutTab8.style.display = "block";
    aboutTab8.classList.add = "tabs-container";
    timeToVisitTab8.style.display = "none";
    attractionsTab8.style.display = "none";
}

timeToVisitButton8.onclick = function() {
    aboutButton8.style.backgroundColor = "#dae2ec";
    timeToVisitButton8.style.backgroundColor = "white";
    attractionsButton8.style.backgroundColor = "#dae2ec";
    aboutTab8.style.display = "none";
    timeToVisitTab8.style.display = "block";
    timeToVisitTab8.classList.add = "tabs-container";
    attractionsTab8.style.display = "none";
}
attractionsButton8.onclick = function() {
    aboutButton8.style.backgroundColor = "#dae2ec";
    timeToVisitButton8.style.backgroundColor = "#dae2ec";
    attractionsButton8.style.backgroundColor = "white";
    aboutTab8.style.display = "none";
    timeToVisitTab8.style.display = "none";
    attractionsTab8.style.display = "block";
    attractionsTab8.classList.add = "tabs-container";
}

