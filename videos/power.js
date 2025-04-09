let aboutButton5 = document.getElementById("aboutButton5");
let timeToVisitButton5 = document.getElementById("timeToVisitButton5");
let attractionsButton5 = document.getElementById("attractionsButton5");

let aboutTab5 = document.getElementById("aboutTab5");
let timeToVisitTab5 = document.getElementById("timeToVisitTab5");
let attractionsTab5 = document.getElementById("attractionsTab5");

timeToVisitTab5.style.display = "none";
attractionsTab5.style.display = "none";

aboutButton5.onclick = function() {
    aboutButton5.style.backgroundColor = "white";
    timeToVisitButton5.style.backgroundColor = "#dae2ec";
    attractionsButton5.style.backgroundColor = "#dae2ec";
    aboutTab5.style.display = "block";
    aboutTab5.classList.add = "tabs-container";
    timeToVisitTab5.style.display = "none";
    attractionsTab5.style.display = "none";
}

timeToVisitButton5.onclick = function() {
    aboutButton5.style.backgroundColor = "#dae2ec";
    timeToVisitButton5.style.backgroundColor = "white";
    attractionsButton5.style.backgroundColor = "#dae2ec";
    aboutTab5.style.display = "none";
    timeToVisitTab5.style.display = "block";
    timeToVisitTab5.classList.add = "tabs-container";
    attractionsTab5.style.display = "none";
}
attractionsButton5.onclick = function() {
    aboutButton5.style.backgroundColor = "#dae2ec";
    timeToVisitButton5.style.backgroundColor = "#dae2ec";
    attractionsButton5.style.backgroundColor = "white";
    aboutTab5.style.display = "none";
    timeToVisitTab5.style.display = "none";
    attractionsTab5.style.display = "block";
    attractionsTab5.classList.add = "tabs-container";
}
