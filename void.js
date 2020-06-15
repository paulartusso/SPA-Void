const products = [
    
        {
            id: 1,
            image: "../assets/images/pescado.jpg",
            type: "Remera",
            title: "Reme Pescado",
            price: 700
        },
        {
            id: 2,
            image: "../assets/images/octopus.jpg",
            type: "Remera",
            title: "Reme Vinilo",
            price: 700
        },
        {
            id: 3,
            image: "../assets/images/vinyl.jpg",
            type: "Musculosa",
            title: "Musculosa Pulpo",
            price: 700 
        }
];

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
    
    let moreButton = document.createElement("button");
    moreButton.setAttribute("class", "see-more-button");
    moreButton.innerText = "+";
    
    div.appendChild(img);
    div.appendChild(span);
    span.appendChild(button);
    span.appendChild(moreButton);
}



const getFocus = () =>{
    let textarea = document.getElementById("comments-textarea");
    textarea.setAttribute("class", "focusIn");
}



/**
 * <3
 * 
 * Hoy le tenés que mandar evento onclick al boton de agregar al carrite
 * y pushearle al mismo, pa crear la nueva lista (carrito).
 * Después evento al boton con el changuito pa desplegar un modal que les 
 * muestre a estos malditos consumistas en que innecesario producto están 
 * gastando su dinero.
 * THEN un contador en rojito para llevar el conteo de la cantidad de 
 * items. Asumo que con un return listaCarrito(?) should be enough.
 * El contadorcito posicionado según el carrite, ia tu sa, ahí arribita.

 */
