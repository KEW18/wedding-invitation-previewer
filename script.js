
//Placing user supplied information instantly onto the different background designs
// = (event) => is shorthand function 
//var x = function(x, y) {
  //  return x * y;
  //}
// to this...  
  //const x = (x, y) => x * y;
  
  const doFirstNameChange = (event) => {
     const userText = event.target.value
     const firstNamePreview = document.querySelector('.first-name-preview')
    firstNamePreview.innerText = userText;
}

const doSecondNameChange = (event) => {
    const userText = event.target.value
    const secondNamePreview = document.querySelector ('.second-name-preview')
    secondNamePreview.innerText = userText;
}

const doDateChange = (event) => {
    const userText = event.target.value
    const datePreview = document.querySelector ('.date-preview')
    datePreview.innerText = userText;
}

const doTimeChange = (event) => {
    const userText = event.target.value
    const timePreview = document.querySelector ('.time-preview')
    timePreview.innerText = userText;
}

const doLocationChange = (event) => {
    const userText = event.target.value
    const locationPreview = document.querySelector ('.location-preview')
    locationPreview.innerText = userText;
}

const doRSVPChange = (event) => {
    const userText = event.target.value
    const RSVPPreview = document.querySelector ('.RSVP-preview')
    RSVPPreview.innerText = userText;
}

//Instructions for changing background images for each design
const getCurrentStyle = () => {
    const classList = document.querySelector('.wedding-preview').classList;
    
  if (classList.contains('boho1')) {
       return 'boho1'
   } else if (classList.contains('boho2')) {
       return 'boho2'
   } else if (classList.contains('boho3')) {
       return 'boho3'
   }
}

const switchToStyleOne = () => {
    const weddingPreview = document.querySelector('.wedding-preview')
   const currentStyle = getCurrentStyle();
   weddingPreview.classList.replace(currentStyle, 'boho1');
}

const switchToStyleTwo = () => {
    const weddingPreview = document.querySelector('.wedding-preview')
    const currentStyle = getCurrentStyle();
   weddingPreview.classList.replace(currentStyle, 'boho2');
}

const switchToStyleThree = () => {
    const weddingPreview = document.querySelector('.wedding-preview')
    const currentStyle = getCurrentStyle();
    weddingPreview.classList.replace(currentStyle, 'boho3');
}

const init = () => {
    document.addEventListener('DOMContentLoaded', () => {
//click on the tabs to see the different designs using CSS selector .querySelector
        document.querySelector('.style-one-tab').addEventListener('click', switchToStyleOne)
        document.querySelector('.style-two-tab').addEventListener('click', switchToStyleTwo)
       document.querySelector('.style-three-tab').addEventListener('click', switchToStyleThree)

//instant update of the user input into the design
       document.querySelector('.first-name-input').addEventListener('keyup', doFirstNameChange)
        document.querySelector('.second-name-input').addEventListener('keyup', doSecondNameChange)
        document.querySelector('.date-input').addEventListener('keyup', doDateChange)
        document.querySelector('.time-input').addEventListener('keyup', doTimeChange)
        document.querySelector('.location-input').addEventListener('keyup', doLocationChange)       
        document.querySelector('.RSVP-input').addEventListener('keyup', doRSVPChange)
    
    })
}
init()


//Calculate total price
function myFunction() {
    let price = document.getElementById("inputQuantity").value;
   
    let total = price *2.00;
    document.getElementById("totalPrice").innerHTML = total;   
}

//Currency - showing the $ sign before the calculated total
let x = document.querySelectorAll  (".currencyStyle");
        for (let i = 0, len = x.length; i < len; i++) {
            let num = Number(x[i].innerHTML)
                      .toLocaleString('en');
            x[i].innerHTML = num;
            x[i].classList.add("currencyStyle");
        }
//message to use - order details
document.addEventListener("click", function() {
    let outputMsg = document.getElementById("outputMsg");
    let quantity = document.getElementById("inputQuantity").value;
    let designType = document.getElementById("designType").value;
    let paperType = document.getElementById("paperType").value;
    
    outputMsg.innerText = (`Congratulations. You have chosen ${quantity} ${designType} invitations to be printed on ${paperType}. The total price, including postage and matching envelopes, is:`);
    })
