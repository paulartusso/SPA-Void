//Crea tarjetas

const createDataRow = (item) => {
    let div = document.createElement("div");
    div.setAttribute("class", "card");
    
    let img = document.createElement("img");
    img.src = `img/${item.image}`;
    img.setAttribute("class", "card-img");
    
    let span = reusableFunction(item);
    
    div.appendChild(img);
    div.appendChild(span);
    return div;
}

const reusableFunction = (item) =>{
    let span = document.createElement("span");
    span.setAttribute("class", "span-button");
    
    
    let button = document.createElement("button");
    button.setAttribute("class", "add-button");
    button.innerText = "Agregar al carrito";
    button.addEventListener("click", () => addToCart(item.id));
    
    
    let moreButton = document.createElement("button");
    moreButton.setAttribute("class", "see-more-button");
    moreButton.innerText = "Info";
    moreButton.addEventListener("click", () => showInfo(item));

    span.appendChild(button);
    span.appendChild(moreButton);
    return span;
}

const createFirstRow = (item) =>{
    let firstCardContainer = document.getElementById("first-card-container");
    const div = createDataRow(item)
    firstCardContainer.appendChild(div);  
}


const createSecondRow = (item) =>{
    let secondCardContainer = document.getElementById("second-card-container");
    const div = createDataRow(item);
    secondCardContainer.appendChild(div); 
}

const createThirdRow = (item) =>{
    let thirdCardContainer = document.getElementById("third-card-container");
    const div = createDataRow(item);
    thirdCardContainer.appendChild(div); 
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
    xButton.addClass("x-button");
    xButton.click (function() {
        infoModal.toggleClass("hidden");
        $("#modal-container").toggleClass("hidden")});
    $("#modal-container").append(infoModal);
    let itemPrice = $("<p></p>");
    itemPrice.addClass("info");
    itemPrice.html(`Precio: ${item.price}`);
    let itemType = $("<p></p>");
    itemType.html(`Tipo: ${item.type}`);
    itemType.addClass("info");
    infoModal.append(itemPrice, itemType);
    return infoModal;
}

