window.onload = function() {
    var count = 0;
    var message = "You clicked me ";
    var div = document.getElementById("message");

    var button = document.getElementById("clickMe");
    button.onclick = function() {
        count++;
        div.innerHTML = message + count + " times!";
    };
};


