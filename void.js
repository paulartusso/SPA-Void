const products = [
    
        {
            id: 1,
            image: "../assets/images/pescado.jpg",
            type: "Remera",
            title: "Reme Pescado",
            price: 600
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
            price: 550 
        }
];

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
    moreButton.innerText = "+";
    
    div.appendChild(img);
    div.appendChild(span);
    span.appendChild(button);
    span.appendChild(moreButton);
}

//agrega al carro de compras

cart = [];

const addToCart = (id) =>{
    for(let item of products){
        if(item.id === id){
        cart.push(item);
    }
}
    console.log(cart);
}

//muestra el carrito de compras

const createShoppingCart = (item) =>{
    let thead = document.createElement("thead");
    let th = document.createElement("th");
    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let secondTd = document.createElement("td");

    thead.appendChild(th);
    th.innerHTML = "Item";
    th.innerHTML = "Precio";
    tbody.appendChild(tr);
    tr.appendChild(td);
    td.innerHTML = item.title; 
    secondTd.innerHTML = item.price;  
    return tr;    
}

const showItems = () =>{
    showCartModal();
    let cartContainer = document.getElementById("cart-container");
    let table = document.getElementById("cart-items-table");
    cart.forEach(item => {
    let tr= createShoppingCart(item);
    cartContainer.appendChild(table);
    table.appendChild(tr);
    });
}

const showCartModal = () =>{
    let modalContainer = document.getElementById("modal-container");
    let cartContainer = document.getElementById("cart-container");
    modalContainer.classList.toggle("hidden");
    cartContainer.classList.toggle("hidden");
}


//Hace foco en el input para agregar un comentario

const getFocus = () =>{
    let textarea = document.getElementById("comments-textarea");
    textarea.setAttribute("class", "focusIn");
}


/*YOU KNOW event para comment
const createTable = () => {
    let td = document.createElement(td);
    let publishButton = getElementById("publish");
    publishButton.appendChild(td);
}
*/


