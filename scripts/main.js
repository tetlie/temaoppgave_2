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
    if (el.Origin !== el.Origin) {
        document.querySelector("#products-filter-origin").innerHTML += `<a href="">${el.Origin}</a>`
    }
    if (el.Brew !== el.Brew) {
        document.querySelector("#products-filter-brew").innerHTML += `<a href="">${el.Brew}</a>`
    }
    if (el.Roast !== el.Roast) {
        document.querySelector("#products-filter-roast").innerHTML += `<a href="">${el.Roast}</a>`
    }
});

//——————————————————————————————————————— ADD TO CART

let CART_COLLECTION = [];

document.querySelectorAll(".buy-button").forEach(el => el.addEventListener('click', addToCart));

function addToCart(e) {
    PRODUCTCOLLECTION.forEach(el => {
        if (e.target.id === el.Id) {
            console.log(el.Id)
            CART_COLLECTION.push(el)
        }
    });
    CART_COLLECTION.forEach(el => {
        document.querySelector("#cart-section").innerHTML += `
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
    console.log(CART_COLLECTION);
}

//———————————————————————————————————————

/*
// show-hide cart-section
const CART_BUTTON = document.querySelector("#cart-button");
const CART_SECTION = document.querySelector("#cart-section");

// boleean
function showCart() {
    if (CART_SECTION.style.display === "none") {
        CART_SECTION.style.display === "block";
    } else {
        CART_SECTION.style.display === "none";
    }
}

CART_BUTTON.addEventListener("click", showCart);
*/