let aboutButton10 = document.getElementById("aboutButton10");
let timeToVisitButton10 = document.getElementById("timeToVisitButton10");
let attractionsButton10 = document.getElementById("attractionsButton10");

let aboutTab10 = document.getElementById("aboutTab10");
let timeToVisitTab10 = document.getElementById("timeToVisitTab10");
let attractionsTab10 = document.getElementById("attractionsTab10");

timeToVisitTab10.style.display = "none";
attractionsTab10.style.display = "none";

aboutButton10.onclick = function() {
    aboutButton10.style.backgroundColor = "white";
    timeToVisitButton10.style.backgroundColor = "#dae2ec";
    attractionsButton10.style.backgroundColor = "#dae2ec";
    aboutTab10.style.display = "block";
    aboutTab10.classList.add = "tabs-container";
    timeToVisitTab10.style.display = "none";
    attractionsTab10.style.display = "none";
}

timeToVisitButton10.onclick = function() {
    aboutButton10.style.backgroundColor = "#dae2ec";
    timeToVisitButton10.style.backgroundColor = "white";
    attractionsButton10.style.backgroundColor = "#dae2ec";
    aboutTab10.style.display = "none";
    timeToVisitTab10.style.display = "block";
    timeToVisitTab10.classList.add = "tabs-container";
    attractionsTab10.style.display = "none";
}
attractionsButton10.onclick = function() {
    aboutButton10.style.backgroundColor = "#dae2ec";
    timeToVisitButton10.style.backgroundColor = "#dae2ec";
    attractionsButton10.style.backgroundColor = "white";
    aboutTab10.style.display = "none";
    timeToVisitTab10.style.display = "none";
    attractionsTab10.style.display = "block";
    attractionsTab10.classList.add = "tabs-container";
}