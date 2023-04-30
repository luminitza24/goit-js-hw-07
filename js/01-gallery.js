import { galleryItems } from './gallery-items.js';
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
  (() => {
    const modalgallery = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    modalgallery.openModalBtn.addEventListener("click", toggleModal);
    modalgallery.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
    modalgallery.modal.classList.toggle("is-hidden");
    }
  })();
console.log(galleryItems);
