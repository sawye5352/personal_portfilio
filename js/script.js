var i = 0;
var txt = "Hello";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName("typing-line").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", function () {
  // Hide the loading animation
  var loadingAnimation = document.getElementsByClassName("typing-line");
  loadingAnimation.style.display = "none";

  // Show and start the typewriter effect
  var demoText = document.getElementsByClassName("typing-line");
  demoText.style.visibility = "visible"; // Show the typewriter text
  typeWriter();
});
