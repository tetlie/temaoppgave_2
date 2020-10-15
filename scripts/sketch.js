    //if (el.Origin !== el.Origin) {
        document.querySelector("#products-filter-origin").innerHTML += `<p class="filter-item">${el.Origin}</p>`
        //}
    
        if (el.Brew.Brew1 !== undefined) {
            document.querySelector("#products-filter-brew").innerHTML += `<p class="filter-item">${el.Brew.Brew1}</p>`
        }
        if (el.Brew.Brew2 !== undefined) {
            document.querySelector("#products-filter-brew").innerHTML += `<p class="filter-item">${el.Brew.Brew2}</p>`
        }
        if (el.Brew.Brew3 !== undefined) {
            document.querySelector("#products-filter-brew").innerHTML += `<p class="filter-item">${el.Brew.Brew3}</p>`
        }
        if (el.Brew.Brew4 !== undefined) {
            document.querySelector("#products-filter-brew").innerHTML += `<p class="filter-item">${el.Brew.Brew4}</p>`
        }
    
        document.querySelector("#products-filter-roast").innerHTML += `<p class="filter-item">${el.Roast}</p>`
    
        document.querySelector("#products-filter-notes").innerHTML += `<p class="filter-item">${el.Notes.Note1}</p>`
        document.querySelector("#products-filter-notes").innerHTML += `<p class="filter-item">${el.Notes.Note2}</p>`
        document.querySelector("#products-filter-notes").innerHTML += `<p class="filter-item">${el.Notes.Note3}</p>`