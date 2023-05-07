import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

for (let i = 0; i < galleryItems.length; i++) {
    const picture = galleryItems[i];
    const index = i;
    const {preview, original, description} = picture;
    const item = document.createElement("li");
    const link = document.createElement("a");
    const image = document.createElement("img");
    image.src = preview;
    image.alt = description;
    link.href = original;
    image.classList.add("gallery__image");
    image.setAttribute('id', `${index}`);
    link.classList.add("gallery__link");
    link.appendChild(image);
    item.appendChild(link);
    gallery.appendChild(item);
}


const linkItem = document.querySelectorAll(".gallery__link");
linkItem.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

const lightbox = new simplelightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
});
console.log(lightbox)