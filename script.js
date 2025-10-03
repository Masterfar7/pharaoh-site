document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("colorBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      document.body.style.background =
        document.body.style.background === "lightblue" ? "#f7f7f7" : "lightblue";
    });
  }
});