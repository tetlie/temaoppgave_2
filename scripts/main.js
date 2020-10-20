import { PRODUCTCOLLECTION } from './products.js';
import { addToGrid } from './functions.js';

// Legg til produkter i produkt-griden når siden lastes
window.onload = PRODUCTCOLLECTION.forEach(el => addToGrid(el));

// Handlekurv-array
let CART_COLLECTION = [];

// Definere varaibler som skal brukes i handlekurv
let cartArticle = document.querySelector('#cart__products');
let cartButtonNumberOfItems = document.querySelector('#header__button__cart__count')
let cartNumberOfItems = document.querySelector('#total__products')
let cartTotalPrice = document.querySelector('#total__price');



// Oppdatere visning av handlekurv
function updateHTMLCart() {
    cartArticle.innerHTML = '';
    cartTotalPrice.innerHTML = '';
    cartButtonNumberOfItems.innerHTML = '';
    
    // Legg til produktlinjene i handlekurv
    CART_COLLECTION.forEach(product => {
        cartArticle.innerHTML += `
        <div id='product-line'><p>${product.Name}
        <p>${product.Price} NOK<p>
        <button id='remove-${product.Id}' class='button__remove'>Remove</button></div>`;
        // Legg til eventlistener på fjern-knapp
        document.querySelectorAll('.button__remove').forEach(el => {el.addEventListener('click', removeFromCart)});
    });

    // oppdater totalpris
    const total = CART_COLLECTION.reduce((currentTotal, el) => {
        return el.Price + currentTotal
    }, 0);
    cartTotalPrice.innerHTML = `${total} NOK`;    

    // oppdater antall produkter i header
    cartButtonNumberOfItems.innerHTML = `(${CART_COLLECTION.length})`;
    // oppdater antall produkter i handlekurv og juster product/products
    if (CART_COLLECTION.length === 1) {
        cartNumberOfItems.innerHTML = `${CART_COLLECTION.length} product`;
    } else {
        cartNumberOfItems.innerHTML = `${CART_COLLECTION.length} products`;
    }
}

// Legg til i handlekurv
document.querySelectorAll('.button__add').forEach(el => el.addEventListener('click', addToCart));
function addToCart(e) {
    PRODUCTCOLLECTION.forEach(el => {
        if (e.target.id === `add-${el.Id}`) {
            CART_COLLECTION.push(el)
        }
    });
    updateHTMLCart();
}

// Fjerne fra handlekurv
function removeFromCart(e) {
    CART_COLLECTION.forEach((el, i) => {
        if (e.target.id === `remove-${el.Id}`) {
            CART_COLLECTION.splice(i, 1);
            console.log(CART_COLLECTION);
        }
    });
    updateHTMLCart();
}

// vis / skjul handlekurv
document.querySelector('#header__button__cart').addEventListener('click', showCart);
function showCart() {
    const CART_SECTION = document.querySelector('#cart');
    if (CART_SECTION.style.display === 'none') {
        CART_SECTION.style.display = 'block';
    } else {
        CART_SECTION.style.display = 'none';
    }
}

