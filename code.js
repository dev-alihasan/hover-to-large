const allCards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

function cardEffect(x, y, scale) {
  allCards.forEach((card) => {
    card.style.transform = `rotateX(${x}deg) rotateY(${y}deg) scale(${scale})`;
  });
}

cardContainer.addEventListener("mousemove", (dets) => {
  let rotateXangle = Math.floor(-(dets.clientY - window.innerHeight / 2) / 10);
  let rotateYangle = Math.floor((dets.clientX - window.innerWidth / 2) / 20);
  cardEffect(rotateXangle, rotateYangle, 1);
});

cardContainer.addEventListener("mouseleave", () => {
  cardEffect(0, 0, 1);
});
