// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep)=>{
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((eachMush)=>{
    if (state.mushrooms) {
      eachMush.style.visibility = 'visible';
    } else {
      eachMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((eachPepper)=>{
    if (state.greenPeppers) {
      eachPepper.style.visibility = 'visible';
    } else {
      eachPepper.style.visibility = 'hidden';
    }
  });

}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let buttonNode = document.querySelector(".sauce")
buttonNode.classList.toggle(".sauce-white")
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let buttonNode = document.querySelector(".crust")
buttonNode.classList.toggle(".crust-gluten-free")
}

function renderButtons() {
  Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let buttonNodePep = document.querySelector(".panel.controls")
  buttonNodePep.classList.toggle(".btn.btn-pepperoni.active");
  let buttonNodeGreen = document.querySelector(".panel.controls")
  buttonNodePep.classList.toggle(".btn.btn-green-peppers.active")
  let buttonNodeMush = document.querySelector(".panel.controls")
  buttonNodePep.classList.toggle(".btn.btn-mushrooms.active")
  let buttonNodesauce = document.querySelector(".panel.controls")
  buttonNodePep.classList.toggle(".btn.btn-sauce.active")
  let buttonNodegluten = document.querySelector(".panel.controls")
  buttonNodePep.classList.toggle(".btn.btn-crustactive")

let buttonNode = document.querySelector(".panel.controls")
buttonNode.classList.toggle("active")

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = document.querySelector(".panel");
  totalPrice.classList.remove("active");
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", function () {
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-sauce").addEventListener("click", function(){
  state.whiteSauce = !state.whiteSauce;
  renderWhiteSauce();
})
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-green-peppers").addEventListener("click", function(){
  state.greenPeppers = !state.greenPeppers;
  renderGreenPeppers();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", function(){
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
})
