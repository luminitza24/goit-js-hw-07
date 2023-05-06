import { galleryItems } from './gallery-items.js';
// Change code below this line
const images2= galleryItems
for (let i = 0; i < images2.length; i++){
    const newImage = document.createElement('img')
    newImage.classList.add( 'gallery__image')
    newImage.src = images2[i].preview;
    newImage.setAttribute('data-source', images2[i].original);
    newImage.setAttribute('alt', images2[i].description);
    const link = document.createElement('a');
    link.appendChild(newImage);
    link.setAttribute('href', images2[i].original);
    link.classList.add("gallery__link");
    const listItem = document.createElement('li')
    listItem.appendChild(link);
    document.querySelector('.gallery').appendChild(listItem);
    listItem.classList.add("gallery__item");
    link.addEventListener("click", function(event){
      event.preventDefault()
    });  
  }
  const lista = document.querySelector(".gallery");
const myEvent= (e)=>{
      const element = e.target;
      const image = element.dataset.source;
  }

const lightbox = ('.images a').simpleLightbox({ enableKeyboard:"esc", captionsData:"alt" });
  lightbox.on(shown.simpleLightbox, myEvent) 
  lista.addEventListener("click", myEvent)
console.log(lista);
