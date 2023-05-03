import { galleryItems } from './gallery-items.js';
// Change code below this line
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
  const lista = document.querySelector(".gallery");
const myEvent= (e)=>{
      const element = e.target;
      const image = element.dataset.source;
  }
  lista.addEventListener("click", myEvent)
  const lightbox = ('.gallery-items.js').simpleLightbox({ enableKeyboard:"esc", captionsData:"alt" });
  lightbox.on(shown.simplelightbox, myEvent) 
  
