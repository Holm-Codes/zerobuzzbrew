/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')

function myFunction() {
    var x = document.getElementById("my-mobil-menu");
    if (x.className === "mobil-menu") {
      x.className += " responsive";
    } else {
      x.className = "mobil-menu";
    }
  }
