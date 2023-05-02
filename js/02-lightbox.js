import { galleryItems } from './gallery-items.js';
const lightbox = $('.gallery a').simpleLightbox
// Change code below this line
for (let i = 0; i < galleryItems.length; i++){
    const newImage = document.createElement('img')
    newImage.classList.add( 'image-item')
    newImage.setAttribute('source', galleryItems[i].original)
    newImage.src = galleryItems[i].preview;
    const listItem = document.createElement('li')
    listItem.appendChild(newImage);
    document.querySelector('.gallery').appendChild(listItem)
  
  }
  
console.log(galleryItems);
