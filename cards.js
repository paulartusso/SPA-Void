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
    let header = $("<header></header>");
    infoModal.addClass("info-modal");
    infoModal.append(header);
    header.addClass("modal-header");
    header.html(`${item.title}`);
    let xButton = $("<button> x </button>");
    header.append(xButton);
    xButton.click (function() {
        infoModal.toggleClass("hidden");
        $("#modal-container").toggleClass("hidden")});
    $("#modal-container").append(infoModal);
    let itemPrice = $("<p></p>");
    itemPrice.html(`Precio: ${item.price}`);
    let itemType = $("<p></p>");
    itemType.html(`Tipo: ${item.type}`);
    infoModal.append(itemPrice, itemType);
    return infoModal;
}

