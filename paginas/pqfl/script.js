function openModal(target) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  if (!modal || !modalImage) return;

  const src = typeof target === "string" ? target : target?.src;
  const isMobileShot =
    typeof target !== "string" && target?.classList?.contains("mobile-shot");

  modal.style.display = "block";
  modalImage.src = src;
  modalImage.classList.toggle("mobile-shot-modal", !!isMobileShot);
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  if (modal) {
    modal.style.display = "none";
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
