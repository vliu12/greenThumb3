document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("myButton");
    button.addEventListener("click", function() {
        button.textContent = "you clicked me!";
    });
});