`use strict`
import getPictures from "./js/pixabay-apy";
import createMurkup from "./js/render-funkcions";

const form = document.querySelector(".form-js");
const list = document.querySelector(".list-js"
)


form.addEventListener("submit", toSabmit);

function toSabmit(evt) {
    evt.preventDefault();
    const {picture} = evt.target.elements
    getPictures(picture.value)
    .then((data) => (list.innerHTML = createMurkup(data.hits)))
        .catch((error) => console.log(error.message))
    .finally(() => picture.value = "" )
}



