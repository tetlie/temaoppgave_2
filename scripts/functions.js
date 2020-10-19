function addToGrid(x) {
    document.querySelector("#products-article-grid").innerHTML += `
    <div id="product-item">
        <img id="product-image"src="${x.Image}" alt="">
        <div id="product-info">
        <h1 id="product-title">${x.Name}</h1>
        <p id="product-origin">${x.Origin}</p><br>
        <p id="product-price">${x.Price} NOK</p><br>
        <p>Notes</p>
        <p id="product-notes">${x.Notes.Note1} / ${x.Notes.Note2} / ${x.Notes.Note3}</p><br>
        <p>Brew</p>
        <p id="product-brew">${x.Brew.Brew1} / ${x.Brew.Brew2} / ${x.Brew.Brew3}</p><br>
    </div>
    <button id="add-${x.Id}" class="buy-button" type="">Buy</button>
    </div>`;
}

export {addToGrid};
