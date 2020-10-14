import { PRODUCTCOLLECTION } from "./products.js";

//——————————————————————————————————————— PRODUCT GRID

PRODUCTCOLLECTION.forEach(el => {
    document.querySelector("#products-article-grid").innerHTML += `
    <div id="product-item">
        <img id="product-image"src="${el.Image}" alt="">
        <div id="product-info">
        <p id="product-
        title">${el.Name}</p>
        <p id="product-price">${el.Price} NOK</p>
        <p id="product-origin">${el.Origin}</p>
        <p id="product-origin">${el.Descritpion}</p>
        </div>
        <button id="${el.Id}" class="buy-button" type="">Buy</button>
        </div>`
});

//——————————————————————————————————————— FILTER


PRODUCTCOLLECTION.forEach(el => {
    //if (el.Origin !== el.Origin) {
        document.querySelector("#products-filter-origin").innerHTML += `<a href="">${el.Origin}</a>`
    //}
    //if (el.Brew !== el.Brew) {
        document.querySelector("#products-filter-brew").innerHTML += `<a href="">${el.Brew}</a>`
    //}
    //if (el.Roast !== el.Roast) {
        document.querySelector("#products-filter-roast").innerHTML += `<a href="">${el.Roast}</a>`
    //}
});


//——————————————————————————————————————— ADD TO CART

// Handlekurv-array
let CART_COLLECTION = [];

// Handlekurv-section
let cartSection = document.querySelector("#cart-section");

// legg til eventListener(click) for alle knapper med classe .buy-button
document.querySelectorAll(".buy-button").forEach(el => el.addEventListener('click', addToCart));

// legg til i handlekurv
function addToCart(e) {
    cartSection.innerHTML = "";
    PRODUCTCOLLECTION.forEach(el => {
        // if knappens id er samme som elementets id
        // legg til elementet i handlekurv-arrayet
        if (e.target.id === el.Id) {
            CART_COLLECTION.push(el)
        }
    });

    CART_COLLECTION.forEach(el => {
        // For hvert av elementene i handlekurv-arrayet opprettes en div i handlekuv-sek
        cartSection.innerHTML += `
        <div id="product-line"><p>${el.Name}
        <p>NOK ${el.Price}<p>
        <button id="${el.Id}" class="remove-button" type="">Remove</button></div>`;
    });
}

// ——————————————————————————————————————— REMOVE FROM CART

document.querySelectorAll(".remove-button").forEach(el => el.addEventListener('click', removeFromCart));

function removeFromCart(e) {
    CART_COLLECTION.forEach((el, i) => {
        if (e.target.id === el.Id) {
            CART_COLLECTION.splice(i,1)
        }
    });
    // console.log(CART_COLLECTION);
}

//———————————————————————————————————————

// show-hide cart-section
const CART_BUTTON = document.querySelector("#cart-button");


// boleean
function showCart() {
    const CART_SECTION = document.querySelector("#cart-section");
    if (CART_SECTION.style.display === "none") {
        CART_SECTION.style.display = "block";
    } else {
        CART_SECTION.style.display = "none";
    }
}

CART_BUTTON.addEventListener("click", showCart);
