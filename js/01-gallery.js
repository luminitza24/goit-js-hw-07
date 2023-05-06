import { galleryItems } from './gallery-items.js';
// Change code below this line
const images1 = galleryItems;
for (let i = 0; i < images1.length; i++){
    const newImage = document.createElement('img')
    newImage.classList.add( 'gallery__item')
    newImage.setAttribute('src', images1[i].preview);
    newImage.setAttribute('data-source', images1[i].original);
    newImage.setAttribute('alt', images1[i].description);
    const link = document.createElement('a');
    link.appendChild(newImage);
    link.setAttribute('href', galleryItems[i].original);
    link.classList.add("gallery__link");
    const listItem = document.createElement('li')
    listItem.appendChild(link);
    document.querySelector(".gallery").appendChild(listItem);
    listItem.classList.add("gallery-item");
    link.addEventListener("click", function(event){
      event.preventDefault()
    });  
  }
const lista= document.querySelector(".gallery")
 
  const myEvent=(e)=> {
    const element = e.target;
    const src = element.dataset.source;
    const instance = basicLightbox.create(`
    <img src= "images1[i].original" alt="images1[i].description">
`)

instance.show(instance)
  }
  lista.addEventListener("click", myEvent) 
  console.log(lista)