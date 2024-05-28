/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
