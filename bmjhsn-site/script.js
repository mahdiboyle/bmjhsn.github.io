const home = document.getElementById("home");
const gallery = document.getElementById("gallery");
const grid = document.getElementById("grid");
const backBtn = document.querySelector(".back");

const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const closeBtn = lightbox.querySelector(".close");

document.querySelectorAll("main button").forEach(button => {
  button.addEventListener("click", () => {
    openGallery(button.dataset.section);
  });
});

backBtn.addEventListener("click", () => {
  gallery.classList.add("hidden");
  home.classList.remove("hidden");
  grid.innerHTML = "";
});

function openGallery(section) {
  home.classList.add("hidden");
  gallery.classList.remove("hidden");
  grid.innerHTML = "";

  let index = 1;

  function loadNextImage() {
    const img = new Image();
    img.src = `images/${section}/${index}.jpg`;

    img.onload = () => {
      img.addEventListener("click", () => openLightbox(img.src));
      grid.appendChild(img);
      index++;
      loadNextImage();
    };

    img.onerror = () => {
      return;
    };
  }

  loadNextImage();
}

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add("active");
}

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});
