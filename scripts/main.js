import { PRODUCTCOLLECTION } from "./products.js";
import { addToGrid } from "./functions.js";


// Legg til produkter i produkt-griden når siden lastes
window.onload = PRODUCTCOLLECTION.forEach(el => addToGrid(el));


// Handlekurv-array
let CART_COLLECTION = [];

// Definere varaibler som skal brukes i handlekurv
let cartArticle = document.querySelector("#cart-article");
let cartButtonNumberOfItems = document.querySelector("#number-of-items")
let cartNumberOfItems = document.querySelector("#total-product")
let cartTotalPrice = document.querySelector("#total-sum")

// Oppdatere visning av handlekurv
function updateCart() {
    cartArticle.innerHTML = "";
    cartTotalPrice.innerHTML = "";

    cartButtonNumberOfItems.innerHTML = "";
    
    // Legg til produktlinjene i handlekurv
    CART_COLLECTION.forEach(product => {
        cartArticle.innerHTML += `
        <div id="product-line"><p>${product.Name}
        <p>${product.Price} NOK<p>
        <button id="remove-${product.Id}" class="remove_button" type="">Remove</button></div>`;
        // Legg til eventlistener på fjern-knapp
        document.querySelectorAll(".remove_button").forEach(el => {
            console.log(el);
            el.addEventListener('click', removeFromCart)
        });
    });
    // oppdater antall produkter i header
    cartButtonNumberOfItems.innerHTML = `(${CART_COLLECTION.length})`;
    // oppdater antall produkter i handlekurv og juster grammatikk etter antall (product/products)
    if (CART_COLLECTION.length === 1) {
        cartNumberOfItems.innerHTML = `${CART_COLLECTION.length} product`;
    } else {
        cartNumberOfItems.innerHTML = `${CART_COLLECTION.length} products`;
    }

    // // oppdater totalpris
    const total = CART_COLLECTION.reduce((currentTotal, el) => {
        return el.Price + currentTotal
    }, 0);
    cartTotalPrice.innerHTML = `${total} NOK`;
}

// ADD TO CART
document.querySelectorAll(".buy-button").forEach(el => el.addEventListener('click', addToCart));
function addToCart(e) {
    PRODUCTCOLLECTION.forEach(el => {
        if (e.target.id === `add-${el.Id}`) {
            CART_COLLECTION.push(el)
        }
    });
    updateCart();
}
// REMOVE FROM CART
function removeFromCart(e) {

    CART_COLLECTION.forEach((el, i) => {
        if (e.target.id === `remove-${el.Id}`) {
            CART_COLLECTION.splice(i, 1);
            console.log(CART_COLLECTION);
        }
    });
    updateCart();
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


// ————————————

const FILTER_BUTTON = document.querySelector("#filter-header");

function showFilter() {
    const FILTER_SECTION = document.querySelector("#filter");
    if (FILTER_SECTION.style.display === "none") {
        FILTER_SECTION.style.display = "block";
    } else {
        FILTER_SECTION.style.display = "none";
    }
}
FILTER_BUTTON.addEventListener("click", showFilter);