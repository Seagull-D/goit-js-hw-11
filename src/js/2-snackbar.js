`use strict`
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("form")
form.addEventListener("submit", function (event) {
  event.preventDefault();
})


const input = document.querySelector("input[name=delay]")
const button = document.querySelector("button")
console.log(button)

console.log(input);
function checkSelected() {
  return new Promise((resolve, reject) => { 
    const changeBTN = document.querySelector('input[name="state"]:checked');
    const delayValue = input.value;
    input.value = ""
    
 switch (changeBTN.value) {
      case "fulfilled":
     setTimeout(() => {
        
          resolve(`✅ Fulfilled promise in ${delayValue}ms`);
         
        }, delayValue);
     
        break;

      case "rejected":
        setTimeout(() => {
          reject(`❌ Rejected promise in ${delayValue}ms`);
        }, delayValue);

        break;

      default:
        reject("error");
        break;
    }
  });
}


button.addEventListener("click", () => {
  checkSelected()
    .then((value) => iziToast.show({
      message: `${value}`,
      position: "topRight",
      color: "green"
    })
    )
    .catch((error) => iziToast.show({
      message: `${error}`,
      position: "topRight",
      color: "red"
    }))
})
    