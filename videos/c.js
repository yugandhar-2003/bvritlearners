let aboutButton2 = document.getElementById("aboutButton2");
let timeToVisitButton2 = document.getElementById("timeToVisitButton2");
let attractionsButton2 = document.getElementById("attractionsButton2");

let aboutTab2 = document.getElementById("aboutTab2");
let timeToVisitTab2 = document.getElementById("timeToVisitTab2");
let attractionsTab2 = document.getElementById("attractionsTab2");

timeToVisitTab2.style.display = "none";
attractionsTab2.style.display = "none";

aboutButton2.onclick = function() {
    aboutButton2.style.backgroundColor = "white";
    timeToVisitButton2.style.backgroundColor = "#dae2ec";
    attractionsButton2.style.backgroundColor = "#dae2ec";
    aboutTab2.style.display = "block";
    aboutTab2.classList.add = "tabs-container";
    timeToVisitTab2.style.display = "none";
    attractionsTab2.style.display = "none";
}

timeToVisitButton2.onclick = function() {
    aboutButton2.style.backgroundColor = "#dae2ec";
    timeToVisitButton2.style.backgroundColor = "white";
    attractionsButton2.style.backgroundColor = "#dae2ec";
    aboutTab2.style.display = "none";
    timeToVisitTab2.style.display = "block";
    timeToVisitTab2.classList.add = "tabs-container";
    attractionsTab2.style.display = "none";
}
attractionsButton2.onclick = function() {
    aboutButton2.style.backgroundColor = "#dae2ec";
    timeToVisitButton2.style.backgroundColor = "#dae2ec";
    attractionsButton2.style.backgroundColor = "white";
    aboutTab2.style.display = "none";
    timeToVisitTab2.style.display = "none";
    attractionsTab2.style.display = "block";
    attractionsTab2.classList.add = "tabs-container";
}

