export function addToGrid(product) {
    document.querySelector('#products__filter').innerHTML += `
    <div id='product-item'>
        <img id='product-image'src='${product.Image}' alt=''>
        <div id='product-info'>
        <h1 id='product-title'>${product.Name}</h1>
        <p id='product-origin'>${product.Origin}</p><br>
        <p id='product-price'>${product.Price} NOK</p><br>
        <p>Notes</p>
        <p id='product-notes'>${product.Notes.Note1} / ${product.Notes.Note2} / ${product.Notes.Note3}</p><br>
        <p>Brew</p>
        <p id='product-brew'>${product.Brew.Brew1} / ${product.Brew.Brew2}</p><br>
    </div>
    <button id='add-${product.Id}' class='button__add' type=''>Add to cart</button>
    </div>`;
}

// LAGE FILTERLISTER

import { PRODUCTCOLLECTION } from './products.js';

// price
document.querySelector('#filter--notes').innerHTML += `
<p class='filter__item price' id='125'>Under 125 NOK</p>
<p class='filter__item price' id='150'>Under 150 NOK</p>
<p class='filter__item price' id='175'>Under 175 NOK</p>`;

// origin
let mappedOrigin = PRODUCTCOLLECTION.map(el => el.Origin); 
mappedOrigin = mappedOrigin.filter((el, i, ar) => ar.indexOf(el) === i);
mappedOrigin.forEach(el => {document.querySelector('#filter--origin').innerHTML += `<p class='filter__item origin'>${el}</p>`});

// roast
let mappedRoast = PRODUCTCOLLECTION.map(el => el.Roast); 
mappedRoast = mappedRoast.filter((el, i, ar) => ar.indexOf(el) === i);
mappedRoast.forEach(el => {document.querySelector('#filter--roast').innerHTML += `<p class='filter__item roast'>${el}</p>`});

// Brew
let brewAll = [];
let filteredBrew = [];
PRODUCTCOLLECTION.filter(el => {
    if (el.Brew.Brew1 !== undefined) { brewAll.push(el.Brew.Brew1); };
    if (el.Brew.Brew2 !== undefined) { brewAll.push(el.Brew.Brew2); };
    if (el.Brew.Brew3 !== undefined) { brewAll.push(el.Brew.Brew3); };
    if (el.Brew.Brew4 !== undefined) { brewAll.push(el.Brew.Brew4); };
    filteredBrew = brewAll.filter((el, i, ar) => ar.indexOf(el) === i);
});
filteredBrew.forEach(el => {document.querySelector('#filter--brew').innerHTML += `<p class='filter__item brew'>${el}</p>`});


//  KLIKKE PÅ FILTERET

document.querySelectorAll('.origin').forEach(el => el.addEventListener('click', filterProductsOrigin));
document.querySelectorAll('.roast').forEach(el => el.addEventListener('click', filterProductsRoast));
document.querySelectorAll('.brew').forEach(el => el.addEventListener('click', filterProductsBrew));
document.querySelectorAll('.price').forEach(el => el.addEventListener('click', filterProductsPrice));

function filterProductsOrigin(e) {
    document.querySelector('#products__filter').innerHTML = '';
    let filteredItems = PRODUCTCOLLECTION.filter(el => {
        return el.Origin == e.target.innerHTML;
    }); 
    filteredItems.forEach(el => addToGrid(el));
}

function filterProductsRoast(e) {
    document.querySelector('#products__filter').innerHTML = '';
    let filteredItems = PRODUCTCOLLECTION.filter(el => {
        return el.Roast == e.target.innerHTML;
    }); 
    filteredItems.forEach(el => addToGrid(el));
}

function filterProductsBrew(e) {
    document.querySelector('#products__filter').innerHTML = '';
    let filteredItems = PRODUCTCOLLECTION.filter(el => {
        return el.Brew.Brew1 == e.target.innerHTML || el.Brew.Brew2 == e.target.innerHTML || el.Brew.Brew3 == e.target.innerHTML || el.Brew.Brew4 == e.target.innerHTML;
    }); 
    filteredItems.forEach(el => addToGrid(el));
}

function filterProductsPrice(e) {
    document.querySelector('#products__filter').innerHTML = '';
    let filteredItems = PRODUCTCOLLECTION.filter(el => {
        return Number(el.Price) <= Number(e.target.id);
    }); 
    filteredItems.forEach(el => addToGrid(el));
}