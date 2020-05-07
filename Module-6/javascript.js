document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("button1").addEventListener("click", function(){
        document.getElementById("box").style.height = "300px";
        document.getElementById("box").style.width = "300px";
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("button2").addEventListener("click", function(){
        document.getElementById("box").style.height = "75px";
        document.getElementById("box").style.width = "75px";
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("button3").addEventListener("click", function(){
        document.getElementById("box").style.backgroundColor = "blue";
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("button4").addEventListener("click", function(){
        document.getElementById("box").style.opacity = "0.5";
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("button5").addEventListener("click", function(){
        document.getElementById("date").innerHTML = Date();
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("button6").addEventListener("click", function(){
        document.getElementById("box").style.height = "150px";
        document.getElementById("box").style.width = "150px";
        document.getElementById("box").style.backgroundColor = "darkorange";
        document.getElementById("box").style.opacity = "1";
        document.getElementById("date").innerHTML = "";
    });
});

