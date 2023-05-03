import { galleryItems } from './gallery-items.js';
// Change code below this line
import * as basicLightbox from 'basiclightbox';
for (let i = 0; i < galleryItems.length; i++){
    const newImage = document.createElement('img')
    newImage.classList.add( 'image-item')
    newImage.src = galleryItems[i].preview;
    newImage.setAttribute('data-source', galleryItems[i].original);
    newImage.setAttribute('alt', "summer pictures");
    const link = document.createElement('a');
    link.appendChild(newImage);
    link.setAttribute('href', galleryItems[i].original);
    link.classList.add("gallery__link");
    const listItem = document.createElement('li')
    listItem.appendChild(link);
    document.querySelector('.gallery').appendChild(listItem);
    listItem.classList.add("gallery-item");
    link.addEventListener("click", function(event){
      event.preventDefault()
    });  
  }

  document.querySelector('a').onclick = () => {

    basicLightbox.show('href')
  
  }
  