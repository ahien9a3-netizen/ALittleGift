const seasonContainer = document.getElementById('season-container');

const seasonData = {
  spring: "images/hoa_xuan.png",
  summer: "images/hoa_ha.png",
  autumn: "images/hoa_thu.png",
  winter: "images/hoa_dong.png"
};

let currentSeason = "spring";

function setSeason(season) {
  currentSeason = season;
  clearFlowers();
  spawnFlowers(season);
}

function clearFlowers() {
  seasonContainer.innerHTML = "";
}

function spawnFlowers(season) {
  const flowerImage = seasonData[season];
  
  for (let i = 0; i < 30; i++) {
    const flower = document.createElement("img");
    flower.src = flowerImage;
    flower.className = "flower";
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.animationDuration = `${4 + Math.random() * 6}s`;
    flower.style.width = `${20 + Math.random() * 30}px`;
    flower.style.top = `${-Math.random() * 100}px`;
    seasonContainer.appendChild(flower);
  }
}

window.onload = () => {
  setSeason("spring");
};
