export default createMurkup;

function createMurkup(arr) {

    return arr.map(({webformatURL,largeImageURL,tags,likes,views,comments,downloads }) => `<li class="list-item" >
  <a href="${largeImageURL}" alt="${tags}" title=""/>
    <img src="${webformatURL}" alt="${tags}" class="img-item">
  <div class="list-container">
  <p class="item">likes <span>${likes}</span></p>
  <p class="item">Wiews <span>${views}</span></p>
  <p class="item">Comments <span>${comments}</span></p>
  <p class="item">Downlods <span>${downloads}</span></p>
  </div></a>
</li>`).join("")
    
} 