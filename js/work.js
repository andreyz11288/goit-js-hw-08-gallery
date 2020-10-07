import { default as defaultEl } from "./gallery-items.js";
const ulRef = document.querySelector(".js-gallery");
const divEl = document.querySelector(".js-lightbox");
const btnEl = document.querySelector(".lightbox__button");
const divModalEl = document.querySelector(".lightbox__content");

const redEl = defaultEl.reduce((acc, el) => {
  return (acc += `<li class="gallery__item">
  <a class="gallery__link"  >
  <img class="gallery__image"
  src="${el.preview}"
  alt="${el.description}"
  />
  </a>
  </li>`);
}, "");
ulRef.innerHTML = redEl;

const imgEl = document.querySelector(".gallery__image");

ulRef.addEventListener("click", e);
function e(eve) {
  if (eve.target.className !== imgEl.className) {
    return;
  }
  let element;
  const bigImgEl = eve.target.alt;
  for (let i = 0; i < defaultEl.length; i++) {
    if (defaultEl[i].description === bigImgEl) {
      element = defaultEl[i].original;
    }
  }

  divEl.classList.add("is-open");
  divModalEl.innerHTML = `<img class="lightbox__image"
    src="${element}"
    alt="${bigImgEl}"
  />`;
}
btnEl.addEventListener("click", () => {
  divEl.classList.remove("is-open");
});

const closeModalEl = document.querySelector('[data-action="close-lightbox"]');
closeModalEl.addEventListener("click", () => {
  const divCloseModal = document.querySelector(".lightbox__image");
  divCloseModal.alt = "";
  divCloseModal.src = "";
});
