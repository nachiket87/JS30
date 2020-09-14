"use strict";
var hero = document.querySelector(".hero");
var text = document.querySelector("h1");
var walk = 100;
function shadow(e) {
    var width = hero.offsetWidth;
    var height = hero.offsetHeight;
    var x = e.offsetX;
    var y = e.offsetY;
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    var xWalk = Math.round(x / width * walk) - (walk / 2);
    var yWalk = Math.round(y / height * walk) - (walk / 2);
    text.style.textShadow = "\n    " + xWalk + "px " + yWalk + "px 0 rgba(255,0,255,0.7),\n    " + xWalk * -1 + "px " + yWalk + "px 0 rgba(0,255,255,0.7),\n    " + yWalk + "px " + xWalk * -1 + "px 0 rgba(0,255,0,0.7),\n    " + yWalk * -1 + "px " + xWalk + "px 0 rgba(0,0,255,0.7)\n  ";
}
hero.addEventListener('mousemove', shadow);
