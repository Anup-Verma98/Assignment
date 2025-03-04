"use strict";
let indx = 0;

const slideContainer = document.querySelector(".slider-container");
const images = document.querySelectorAll("#carousel-image");

const MOD = images.length;

const updateCarousel = () => {
  images.forEach((img, index) => {
    if (index === indx) {
      img.style.setProperty("opacity", "1");
      img.style.setProperty("visibility", "visible");
    } else {
      img.style.setProperty("opacity", "0");
      img.style.setProperty("visibility", "hidden");
    }
  });

  images[indx].style.transform = `translateX(-${indx * 100}%)`;
};

updateCarousel();

const handleClick = (val) => {
  indx = val > 0 ? (indx + 1) % MOD : indx === 0 ? MOD - 1 : --indx;
  updateCarousel();
};

document
  .querySelector(".prev")
  .addEventListener("click", () => handleClick(-1));

document.querySelector(".next").addEventListener("click", () => handleClick(1));

let startX = 0;
let endX = 0;

slideContainer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slideContainer.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

slideContainer.addEventListener("touchend", () => {
  if (startX - endX > 50) handleClick(1);
  if (endX - startX > 50) handleClick(-1);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") handleClick(1);
  if (e.key === "ArrowLeft") handleClick(-1);
});
