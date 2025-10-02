// Main: gắn sự kiện
document.addEventListener("DOMContentLoaded", () => {
  // mặc định là xuân
  effectsController.setSeason("spring");

  document.querySelectorAll("#controls button").forEach(btn => {
    btn.addEventListener("click", () => {
      const season = btn.getAttribute("data-season");
      effectsController.setSeason(season);
    });
  });
});
