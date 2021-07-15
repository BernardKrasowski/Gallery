class Gallery {
  constructor({ modal, previews, original, caption }) {
    this.modal = modal;
    this.previews = previews;
    this.original = original;
    this.caption = caption;
  }
  start() {
    this.previews.forEach((preview) => {
      preview.addEventListener("click", () => {
        this.modal.classList.add("open");
        this.original.classList.add("open");
        this.changePhoto(preview);
        this.changeTxt(preview);
      });
    });
    this.modal.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal")) {
        this.modal.classList.remove("open");
        this.original.classList.remove("open");
      }
    });
  }
  changePhoto(preview) {
    this.original.src = "";
    const originalSrc = preview.getAttribute("data-original");
    this.original.src = `./large/${originalSrc}`;
  }
  changeTxt(preview) {
    this.caption.textContent = preview.alt;
  }
}

window.onload = () => {
  const gallery = new Gallery({
    modal: document.querySelector(".modal"),
    previews: document.querySelectorAll(".gallery img"),
    original: document.querySelector(".full-img"),
    caption: document.querySelector(".caption"),
  });
  gallery.start();
};
