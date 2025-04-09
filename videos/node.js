let aboutButton20 = document.getElementById("aboutButton20");
let timeToVisitButton20 = document.getElementById("timeToVisitButton20");
let attractionsButto20 = document.getElementById("attractionsButton20");

let aboutTab20 = document.getElementById("aboutTab20");
let timeToVisitTab20 = document.getElementById("timeToVisitTab20");
let attractionsTab20 = document.getElementById("attractionsTab20");

timeToVisitTab20.style.display = "none";
attractionsTab20.style.display = "none";

aboutButton20.onclick = function() {
    aboutButton20.style.backgroundColor = "white";
    timeToVisitButton20.style.backgroundColor = "#dae2ec";
    attractionsButton20.style.backgroundColor = "#dae2ec";
    aboutTab20.style.display = "block";
    aboutTab20.classList.add = "tabs-container";
    timeToVisitTab20.style.display = "none";
    attractionsTab20.style.display = "none";
}

timeToVisitButton20.onclick = function() {
    aboutButton20.style.backgroundColor = "#dae2ec";
    timeToVisitButton20.style.backgroundColor = "white";
    attractionsButton20.style.backgroundColor = "#dae2ec";
    aboutTab20.style.display = "none";
    timeToVisitTab20.style.display = "block";
    timeToVisitTab20.classList.add = "tabs-container";
    attractionsTab20.style.display = "none";
}
attractionsButton20.onclick = function() {
    aboutButton20.style.backgroundColor = "#dae2ec";
    timeToVisitButton20.style.backgroundColor = "#dae2ec";
    attractionsButton20.style.backgroundColor = "white";
    aboutTab20.style.display = "none";
    timeToVisitTab20.style.display = "none";
    attractionsTab20.style.display = "block";
    attractionsTab20.classList.add = "tabs-container";
}
