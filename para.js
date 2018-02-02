
window.onscroll = paraFucc;

function paraFucc(){
  var img1 = document.querySelector(".body__div__rob");
  var img2 = document.querySelector(".body__div__majik");
  var img3 = document.querySelector(".body__div__word");
  var scrollText = document.querySelector(".body__div__rob__p");
    var scrollText1 = document.querySelector(".body__div__majik__p");
      var scrollText2 = document.querySelector(".body__div__word__p");
var yOffset = window.pageYOffset;
document.getElementById("tellme").innerHTML = yOffset + "px";
img1.style.backgroundPositionY = "-" + yOffset/2 + "px";
img2.style.backgroundPositionY = "-" + yOffset/2 + "px";
img3.style.backgroundPositionY = "-" + yOffset/2 + "px";

  scrollText.style.right =  yOffset + "px";
    scrollText1.style.left = yOffset + "px";
      scrollText2.style.right = -500 + yOffset + "px";
}
