//Crea tarjetas

const createFirstRow = (item) =>{
    let firstCardContainer = document.getElementById("first-card-container");
    let div = document.createElement("div");
    div.setAttribute("class", "card");
    firstCardContainer.appendChild(div);
    
    let img = document.createElement("img");
    img.src = `img/${item.image}`;
    img.setAttribute("class", "card-img");
    
    let span = document.createElement("span");
    span.setAttribute("class", "span-button-container");
    
    
    let button = document.createElement("button");
    button.setAttribute("class", "add-button");
    button.innerText = "Agregar al carrito";
    button.addEventListener("click", () => addToCart(item.id));
    
    
    let moreButton = document.createElement("button");
    moreButton.setAttribute("class", "see-more-button");
    moreButton.innerText = "Info";
    moreButton.addEventListener("click", () => showInfo(item));
    
    div.appendChild(img);
    div.appendChild(span);
    span.appendChild(button);
    span.appendChild(moreButton);
}


//muestra mas info sobre el artículo 
const showInfo = (item) =>{
    $("#modal-container").toggleClass("hidden");
    let infoModal = $("<div></div>");
    infoModal.addClass("info-modal");
    let xButton = $("<button> x </button>");
    infoModal.append(xButton);
    xButton.click (function() {
        infoModal.toggleClass("hidden");
        $("#modal-container").toggleClass("hidden")});
    $("#modal-container").append(infoModal);
    let priceItem = $("<p></p>");
    priceItem.html(`Precio: ${item.price}`);
    infoModal.append(priceItem);
    return infoModal;
}

