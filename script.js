/* ==========================
   MENU MOBILE
========================== */

const menuToggle =
document.getElementById("menuToggle");

const menuNav =
document.getElementById("menuNav");

menuToggle.addEventListener("click", () => {

  menuNav.classList.toggle("active");

});

/* ==========================
   SLIDER AUTOMÁTICO
========================== */

let count = 1;

document.getElementById(
  "radio1"
).checked = true;

setInterval(() => {

  nextImage();

}, 5000);

function nextImage(){

  count++;

  if(count > 4){

    count = 1;

  }

  document.getElementById(
    "radio" + count
  ).checked = true;

}
