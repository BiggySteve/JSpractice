window.onload = init;
function init() {
    var map = document.getElementById("map");
    map.onmousemove = showCoords;
}

function showCoords(eventObj) {
     var coords = document.getElementById("coords");
     let x = eventObj.clientX;
     let y = eventObj.clientY;
     coords.innerHTML = "Mapcoordinates: " + x + ", " + y;
}