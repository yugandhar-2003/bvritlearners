let aboutButton6 = document.getElementById("aboutButton6");
let timeToVisitButton6 = document.getElementById("timeToVisitButton6");
let attractionsButton6 = document.getElementById("attractionsButton6");

let aboutTab6 = document.getElementById("aboutTab6");
let timeToVisitTab6 = document.getElementById("timeToVisitTab6");
let attractionsTab6 = document.getElementById("attractionsTab6");

timeToVisitTab6.style.display = "none";
attractionsTab6.style.display = "none";

aboutButton6.onclick = function() {
    aboutButton6.style.backgroundColor = "white";
    timeToVisitButton6.style.backgroundColor = "#dae2ec";
    attractionsButton6.style.backgroundColor = "#dae2ec";
    aboutTab6.style.display = "block";
    aboutTab6.classList.add = "tabs-container";
    timeToVisitTab6.style.display = "none";
    attractionsTab6.style.display = "none";
}

timeToVisitButton6.onclick = function() {
    aboutButton6.style.backgroundColor = "#dae2ec";
    timeToVisitButton6.style.backgroundColor = "white";
    attractionsButton6.style.backgroundColor = "#dae2ec";
    aboutTab6.style.display = "none";
    timeToVisitTab6.style.display = "block";
    timeToVisitTab6.classList.add = "tabs-container";
    attractionsTab6.style.display = "none";
}
attractionsButton6.onclick = function() {
    aboutButton6.style.backgroundColor = "#dae2ec";
    timeToVisitButton6.style.backgroundColor = "#dae2ec";
    attractionsButton6.style.backgroundColor = "white";
    aboutTab6.style.display = "none";
    timeToVisitTab6.style.display = "none";
    attractionsTab6.style.display = "block";
    attractionsTab6.classList.add = "tabs-container";
}


