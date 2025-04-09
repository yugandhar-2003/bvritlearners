let aboutButtonR = document.getElementById("aboutButtonR");
let timeToVisitButtonR = document.getElementById("timeToVisitButtonR");
let attractionsButtonR = document.getElementById("attractionsButtonR");

let aboutTabR = document.getElementById("aboutTabR");
let timeToVisitTabR = document.getElementById("timeToVisitTabR");
let attractionsTabR = document.getElementById("attractionsTabR");

timeToVisitTabR.style.display = "none";
attractionsTabR.style.display = "none";

aboutButtonR.onclick = function() {
    aboutButtonR.style.backgroundColor = "white";
    timeToVisitButtonR.style.backgroundColor = "#dae2ec";
    attractionsButtonR.style.backgroundColor = "#dae2ec";
    aboutTabR.style.display = "block";
    aboutTabR.classList.add = "tabs-container";
    timeToVisitTabR.style.display = "none";
    attractionsTabR.style.display = "none";
}

timeToVisitButtonR.onclick = function() {
    aboutButtonR.style.backgroundColor = "#dae2ec";
    timeToVisitButtonR.style.backgroundColor = "white";
    attractionsButtonR.style.backgroundColor = "#dae2ec";
    aboutTabR.style.display = "none";
    timeToVisitTabR.style.display = "block";
    timeToVisitTabR.classList.add = "tabs-container";
    attractionsTabR.style.display = "none";
}
attractionsButtonR.onclick = function() {
    aboutButtonR.style.backgroundColor = "#dae2ec";
    timeToVisitButtonR.style.backgroundColor = "#dae2ec";
    attractionsButtonR.style.backgroundColor = "white";
    aboutTabR.style.display = "none";
    timeToVisitTabR.style.display = "none";
    attractionsTabR.style.display = "block";
    attractionsTabR.classList.add = "tabs-container";
}

