const btn = document.querySelectorAll(".btn");
const overlay = document.querySelector(".modal_overlay");
const modalContent = document.querySelector(".content_sect");
const modalSect = document.querySelector(".modal_sect");

function displayModal(num, box1, box2, box3, visible, hidden) {
  if (num === 0) {
    box3.style.visibility = visible;
    box2.style.visibility = visible;
    box1.style.visibility = hidden;
  } else {
    box3.style.visibility = hidden;
    box2.style.visibility = hidden;
    box1.style.visibility = visible;
  }
}

btn.forEach(function (button, index) {
  button.addEventListener("click", function () {
    displayModal(index, modalSect, modalContent, overlay, "visible", "hidden");
  });
});
