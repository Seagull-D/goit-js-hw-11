"use strict"
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import getPictures from "./js/pixabay-apy";
import createMurkup from "./js/render-funkcions";

const form = document.querySelector(".form-js");
const list = document.querySelector(".list-js");



form.addEventListener("submit", toSabmit);

function toSabmit(evt) {
    evt.preventDefault();
    const { picture } = evt.target.elements;
    getPictures(picture.value)
        .then((data) => {
            if (!data.hits.length) { iziToast.show({
      message: "Sorry, there are no images matching your search query. Please try again!",
      position: "topRight",
      color: "red"
            });
                
            }
            else {
          

                list.innerHTML = createMurkup(data.hits);
                litebox.refresh(); 
                }           
            
         })
        .catch((error) => console.log(error.message))
        .finally(() => {
            picture.value = "" 
            
        })
}

const litebox = new SimpleLightbox('.list-js a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'imageTitle',
});


