import defaultEl from './gallery-items.js';
const ulRef = document.querySelector('.js-gallery');
const divEl = document.querySelector('.js-lightbox');
const btnEl = document.querySelector('.lightbox__button');
const divModalEl = document.querySelector('.lightbox__content');
const overEl = document.querySelector('.lightbox__overlay');
// const divCloseModal = document.querySelector('.lightbox__image');

const newStringEl = defaultEl.reduce((acc, { preview, description }) => {
  return (acc += `<li class="gallery__item">
  <a class="gallery__link" href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg" >
  <img class="gallery__image"
  src="${preview}"
  alt="${description}"
  />
  </a>
  </li>`);
}, '');
ulRef.innerHTML = newStringEl;

const imgEl = document.querySelector('.gallery__image');

ulRef.addEventListener('click', e);

let element;
function e(eve) {
  eve.preventDefault();
  if (eve.target.className !== imgEl.className) {
    return;
  }
  const bigImgEl = eve.target.alt;
  for (let i = 0; i < defaultEl.length; i++) {
    if (defaultEl[i].description === bigImgEl) {
      element = defaultEl[i].original;
    }
  }

  divEl.classList.add('is-open');
  divModalEl.innerHTML = `<img class="lightbox__image"
    src="${element}"
    alt="${bigImgEl}"
  />`;
}

btnEl.addEventListener('click', () => {
  divEl.classList.remove('is-open');
});

const closeModalEl = document.querySelector('[data-action="close-lightbox"]');
closeModalEl.addEventListener('click', () => {
  const divCloseModal = document.querySelector('.lightbox__image');
  divCloseModal.alt = '';
  divCloseModal.src = '';
});

overEl.addEventListener('click', () => {
  const divCloseModal = document.querySelector('.lightbox__image');
  divEl.classList.remove('is-open');
  divCloseModal.alt = '';
  divCloseModal.src = '';
});

// Управление кнопками //

document.addEventListener('keydown', eve => {
  const divCloseModal = document.querySelector('.lightbox__image');
  if (eve.code === 'Escape') {
    divEl.classList.remove('is-open');
    divCloseModal.alt = '';
    divCloseModal.src = '';
  }
  if (divEl.classList[2]) {
    const mapDefEl = defaultEl.map(value => value.original);
    const indElNum = Number(mapDefEl.indexOf(divCloseModal.src));
    // Кнопка влево //
    if (eve.code === 'ArrowLeft' || eve.code === 'ArrowUp') {
      if (eve.target.className === imgEl.className) {
        return;
      }
      const indLeftEl = indElNum - 1;
      if (indElNum === 0) {
        return;
      }
      divCloseModal.src = mapDefEl[indLeftEl];
    }
    // Кнопка вправо //
    if (eve.code === 'ArrowRight' || eve.code === 'ArrowDown') {
      if (eve.target.className === imgEl.className) {
        return;
      }
      const indEl = indElNum + 1;
      if (indEl === mapDefEl.length) {
        return;
      }
      divCloseModal.src = mapDefEl[indEl];
    }
  }
});
