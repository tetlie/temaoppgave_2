// lagre i localstorage
/*
let CART_COLLECTION_STRING = JSON.stringify(CART_COLLECTION);
localStorage.setItem("cart", CART_COLLECTION_STRING);
// hente fra localstorage
let data = localStorage.getItem("cart");
let returnedCart = JSON.parse(data);
*/

/*
let notesAll = [];
let filteredNotes = [];
PRODUCTCOLLECTION.filter(el => {
    notesAll.push(el.Notes.Note1);
    notesAll.push(el.Notes.Note2);
    notesAll.push(el.Notes.Note3);
    filteredNotes = notesAll.filter((el, i, ar) => ar.indexOf(el) === i);
});
filteredNotes.forEach(el => {document.querySelector("#products-filter-notes").innerHTML += `<p class="filter-item notes" id="Notes">${el}</p>`});
*/

/*
function filterProductsNotes(e) {
    document.querySelector("#products-article-grid").innerHTML = "";
    let filteredItems = PRODUCTCOLLECTION.filter(el => {
        return el.Notes.Note1 == e.target.innerHTML || el.Notes.Note2 == e.target.innerHTML || el.Notes.Note3 == e.target.innerHTML ;
    }); 
    filteredItems.forEach(el => addToGrid(el));
}
*/