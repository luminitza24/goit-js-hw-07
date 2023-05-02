import { galleryItems } from './gallery-items.js';
// Change code below this line
for (let i = 0; i < galleryItems.length; i++){
    const newImage = document.createElement('img')
    newImage.classList.add( 'image-item')
    newImage.setAttribute('source', galleryItems[i].original)
    newImage.src = galleryItems[i].preview;
    newImage.setAttribute('data-source', "large-image.jpg");
    const link = document.createElement('a');
    link.appendChild(newImage);
    link.setAttribute('href', "large-image.jpg");
    link.changeAtribute('href', galleryItems[i])
    link.classList.add("gallery__link");
    const listItem = document.createElement('li')
    listItem.appendChild(link);
    document.querySelector('.gallery').appendChild(listItem);
    listItem.classList.add("gallery-item");
  
  }