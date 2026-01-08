document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".image-slot").forEach((slot) => {
    const label =
      slot.dataset.slot || slot.querySelector(".slot-label")?.textContent || "Espaço para imagem";
    slot.setAttribute("role", "img");
    slot.setAttribute("aria-label", `Espaço para imagem: ${label}`);

    slot.addEventListener("click", () => {
      slot.classList.add("is-selected");
      window.setTimeout(() => slot.classList.remove("is-selected"), 500);
    });
  });
});
