// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

function createGalleryCardsMarkup(galleryItems) {
    
  return  galleryItems.map(({ preview, original, description}) => {
    return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    }).join("");  
  
};

const galleryCardsEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardsMarkup(galleryItems);

galleryCardsEl.insertAdjacentHTML('beforeend', galleryMarkup);



let lightbox = new SimpleLightbox('.gallery__item',
    {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});
  
