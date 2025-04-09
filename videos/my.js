let aboutButtonk = document.getElementById("aboutButtonk");
let timeToVisitButtonk = document.getElementById("timeToVisitButtonk");
let attractionsButtonk = document.getElementById("attractionsButtonk");

let aboutTabk = document.getElementById("aboutTabk");
let timeToVisitTabk = document.getElementById("timeToVisitTabk");
let attractionsTabk = document.getElementById("attractionsTabk");

timeToVisitTabk.style.display = "none";
attractionsTabk.style.display = "none";

aboutButtonk.onclick = function() {
    aboutButtonk.style.backgroundColor = "white";
    timeToVisitButtonk.style.backgroundColor = "#dae2ec";
    attractionsButtonk.style.backgroundColor = "#dae2ec";
    aboutTabk.style.display = "block";
    aboutTabk.classList.add("tabs-container");
    timeToVisitTabk.style.display = "none";
    attractionsTabk.style.display = "none";
}

timeToVisitButtonk.onclick = function() {
    aboutButtonk.style.backgroundColor = "#dae2ec";
    timeToVisitButtonk.style.backgroundColor = "white";
    attractionsButtonk.style.backgroundColor = "#dae2ec";
    aboutTabk.style.display = "none";
    timeToVisitTabk.style.display = "block";
    timeToVisitTabk.classList.add("tabs-container");
    attractionsTabk.style.display = "none";
}

attractionsButtonk.onclick = function() {
    aboutButtonk.style.backgroundColor = "#dae2ec";
    timeToVisitButtonk.style.backgroundColor = "#dae2ec";
    attractionsButtonk.style.backgroundColor = "white";
    aboutTabk.style.display = "none";
    timeToVisitTabk.style.display = "none";
    attractionsTabk.style.display = "block";
    attractionsTabk.classList.add("tabs-container");
}
