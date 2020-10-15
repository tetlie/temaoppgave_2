import { PRODUCTCOLLECTION } from "./products.js";

//——————————————————————————————————————— LEGG ARRAY-ELEMENTER I PRODUCT-GRID

PRODUCTCOLLECTION.forEach(el => {
    document.querySelector("#products-article-grid").innerHTML += `
    <div id="product-item">
        <img id="product-image"src="${el.Image}" alt="">
        <div id="product-info">
        <h1 id="product-title">${el.Name}</h1>
        <p id="product-price">${el.Price} NOK</p><br>
        <p id="product-origin">${el.Origin}</p><br>
        <p id="product-origin">${el.Notes.Note1} / ${el.Notes.Note2} / ${el.Notes.Note3}</p><br>
        <p id="product-origin">${el.Descritpion}</p><br>
    </div>
    <button id="${el.Id}" class="buy-button" type="">Buy</button>
    </div>`
});

//——————————————————————————————————————— FILTER

let originAll = [];
let filteredOrigin = [];
PRODUCTCOLLECTION.filter(el => {
    originAll.push(el.Origin);
    filteredOrigin = originAll.filter((el, i, ar) => ar.indexOf(el) === i);
});
filteredOrigin.forEach(el => {
    document.querySelector("#products-filter-origin").innerHTML += `<p class="filter-item">${el}</p>`
});
//———————————————————————————————————————
let brewAll = [];
let filteredBrew = [];
PRODUCTCOLLECTION.filter(el => {
    if (el.Brew.Brew1 !== undefined) { brewAll.push(el.Brew.Brew1); };
    if (el.Brew.Brew2 !== undefined) { brewAll.push(el.Brew.Brew2); };
    if (el.Brew.Brew3 !== undefined) { brewAll.push(el.Brew.Brew3); };
    if (el.Brew.Brew4 !== undefined) { brewAll.push(el.Brew.Brew4); };
    filteredBrew = brewAll.filter((el, i, ar) => ar.indexOf(el) === i);
});
filteredBrew.forEach(el => {
    document.querySelector("#products-filter-brew").innerHTML += `<p class="filter-item">${el}</p>`
});
//———————————————————————————————————————
let roastAll = [];
let filteredRoast = [];
PRODUCTCOLLECTION.filter(el => {
    roastAll.push(el.Roast);
    filteredRoast = roastAll.filter((el, i, ar) => ar.indexOf(el) === i);
});
filteredRoast.forEach(el => {
    document.querySelector("#products-filter-roast").innerHTML += `<p class="filter-item">${el}</p>`
});
//———————————————————————————————————————
let notesAll = [];
let filteredNotes = [];
PRODUCTCOLLECTION.filter(el => {
    notesAll.push(el.Notes.Note1);
    notesAll.push(el.Notes.Note2);
    notesAll.push(el.Notes.Note3);
    filteredNotes = notesAll.filter((el, i, ar) => ar.indexOf(el) === i);
});
filteredNotes.forEach(el => {
    document.querySelector("#products-filter-notes").innerHTML += `<p class="filter-item">${el}</p>`
});

//——————————————————————————————————————— klikke på filteret

document.querySelectorAll(".filter-button").forEach(el => el.addEventListener('click', filterProducts));

let FILTERED_COLLECTION = [];

function filterProducts(e) {
    PRODUCTCOLLECTION.forEach(el => {
        if (e.innerHTML === el.Origin) {
            FILTERED_COLLECTION.push(el);
        }
    });
}

//——————————————————————————————————————— ADD TO CART

// Handlekurv-array
let CART_COLLECTION = [];

// Handlekurv-section
let cartArticle = document.querySelector("#cart-article");
let cartNumberOfItems = document.querySelector("#number-of-items")

// legg til eventListener(click) for alle knapper med classe .buy-button
document.querySelectorAll(".buy-button").forEach(el => el.addEventListener('click', addToCart));

// legg til i handlekurv
function addToCart(e) {
    // refresh visning av aray
    cartArticle.innerHTML = "";
    // refresh antall produkter i header
    cartNumberOfItems.innerHTML = "";

    PRODUCTCOLLECTION.forEach(el => {
        // if knappens id er samme som elementets id
        // legg til elementet i handlekurv-arrayet
        if (e.target.id === el.Id) {
            CART_COLLECTION.push(el)
        }
    });

    // legg til produktlinjene
    CART_COLLECTION.forEach(el => {
        // For hvert av elementene i handlekurv-arrayet opprettes en div i handlekuv-sek
        cartArticle.innerHTML += `
        <div id="product-line"><p>${el.Name}
        <p>${el.Price} NOK<p>
        <button id="remove-${el.Id}" class="remove_button" type="">Remove</button></div>`;

        document.querySelectorAll(".remove_button").forEach(el => {
            console.log(el);
            el.addEventListener('click', removeFromCart)
        });

    });

    // oppdater antall produkter i header
    cartNumberOfItems.innerHTML = `(${CART_COLLECTION.length})`;


    // oppdater antall produkter i handlekurv og juster grammatikk etter antall (product/products)
    if (CART_COLLECTION.length === 1) {
        document.querySelector("#total-product").innerHTML = `${CART_COLLECTION.length} product`;
    } else {
        document.querySelector("#total-product").innerHTML = `${CART_COLLECTION.length} products`;
    }

    // oppdater totalpris

    let totalPrice = 0;
    CART_COLLECTION.forEach(el => {
        totalPrice += el.Price;
        document.querySelector("#total-sum").innerHTML = `${totalPrice} NOK`;
    })
}

// ——————————————————————————————————————— REMOVE FROM CART



function removeFromCart(e) {
    cartArticle.innerHTML = "";
    document.querySelector("#total-sum").innerHTML = "";
    document.querySelector("#total-product").innerHTML = "";
    CART_COLLECTION.forEach((el, i) => {
        if (e.target.id === `remove-${el.Id}`) {
            CART_COLLECTION.splice(i, 1);
            console.log(CART_COLLECTION);
        }

        
        console.log(CART_COLLECTION);
        cartArticle.innerHTML += `
        <div id="product-line"><p>${el.Name}
        <p>${el.Price} NOK<p>
        <button id="remove-${el.Id}" class="remove_button" type="">Remove</button></div>`;

        document.querySelectorAll(".remove_button").forEach(el => {
            console.log(el);
            el.addEventListener('click', removeFromCart)
        });

        cartNumberOfItems.innerHTML = `(${CART_COLLECTION.length})`;
        if (CART_COLLECTION.length === 1) {
            document.querySelector("#total-product").innerHTML = `${CART_COLLECTION.length} product`;
        } else {
            document.querySelector("#total-product").innerHTML = `${CART_COLLECTION.length} products`;
        }

        let totalPrice = 0;
        CART_COLLECTION.forEach(el => {
            totalPrice += el.Price;
            document.querySelector("#total-sum").innerHTML = `${totalPrice} NOK`;
        })

    });

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