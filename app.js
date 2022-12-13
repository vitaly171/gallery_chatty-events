const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const galleryRef = document.querySelector(".js-gallery");
const lightboxEl = document.querySelector(".js-lightbox");
const lightboxImg = document.querySelector(".lightbox__image");
const lightboxBtn = document.querySelector(".lightbox__button");
const lightboxOverlay = document.querySelector(".lightbox__overlay");

galleryRef.addEventListener("click", onGallaryContainerClick);
lightboxBtn.addEventListener("click", removeActiveImage);
lightboxOverlay.addEventListener("click", removeActiveImage);

function onGallaryContainerClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  lightboxEl.classList.add("is-open");
  lightboxImg.src = e.target.dataset.source;
  window.addEventListener("keydown", pressOnKey);
}

function galleryMarkUp() {
  galleryItems.map((e) => {
    const imgItem = document.createElement("li");
    imgItem.classList.add("gallery__item");
    const imgLink = document.createElement("a");
    imgLink.classList.add("gallery__link");
    const img = document.createElement("img");
    img.classList.add("gallery__image");

    img.setAttribute(`src`, `${e.preview}`);
    img.setAttribute(`data-source`, `${e.original}`);
    img.setAttribute(`alt`, `${e.description}`);
    galleryRef.appendChild(imgItem);
    imgItem.appendChild(imgLink);
    imgLink.appendChild(img);
  });
}
galleryMarkUp();

function removeActiveImage(e) {
  lightboxEl.classList.remove("is-open");

  lightboxImg.src = "";

  window.removeEventListener("keydown", pressOnKey);
}

function pressOnKey(e) {
  console.log(e.code);
  if (
    e.code === "Escape" ||
    e.code === "ArrowRight" ||
    e.code === "ArrowLeft"
  ) {
    removeActiveImage(e);
  }
}
