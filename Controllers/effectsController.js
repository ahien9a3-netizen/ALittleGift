// Controller: xử lý logic hiệu ứng
const effectsController = (() => {
  const seasonContainer = document.getElementById('season-container');

  function clearFlowers() {
    seasonContainer.innerHTML = "";
  }

  function spawnFlowers(season) {
    const flowerImage = effectsModel[season];
    for (let i = 0; i < 30; i++) {
      const flower = document.createElement("img");
      flower.src = flowerImage;
      flower.alt = `Hoa ${season}`;
      flower.className = "flower";
      flower.style.left = `${Math.random() * 100}%`;
      flower.style.animationDuration = `${4 + Math.random() * 6}s`;
      flower.style.width = `${20 + Math.random() * 30}px`;
      flower.style.top = `${-Math.random() * 100}px`;
      seasonContainer.appendChild(flower);
    }
  }

  function setSeason(season) {
    clearFlowers();
    spawnFlowers(season);
  }

  return { setSeason };
})();
