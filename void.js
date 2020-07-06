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
            type: "Musculosa",
            title: "Musculosa Pulpo",
            price: 700
        },
        {
            id: 3,
            image: "../assets/images/vinyl.jpg",
            type: "Remera",
            title: "Reme Vinilo",
            price: 550 
        }
];

//agrega al carro de compras

cart = [];

const addToCart = (id) =>{
    for(let item of products){
        if(item.id === id){
            cart.push(item);
            let cartContainer = document.getElementById("cart-container");
            let table = document.getElementById("cart-items-table");
            let tr= createShoppingCart(item);
            cartContainer.appendChild(table);
            table.appendChild(tr);
            let message = document.getElementById("message");
            message.setAttribute("class", "hidden");
        }
    }
}

const showSearchInput = () =>{
    $("#search-input").toggleClass("hidden");
    $("li").toggleClass("color");  
}

//muestra el carrito de compras

const showCartModal = () =>{
    let modalContainer = $("#modal-container");
    let cartContainer = $("#cart-container");
    modalContainer.toggleClass("hidden");
    cartContainer.toggleClass("hidden");
}

const createShoppingCart = (item) =>{
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let secondTd = document.createElement("td");

    tr.appendChild(td);
    tr.appendChild(secondTd);
    td.innerHTML = item.title; 
    secondTd.innerHTML = item.price;  
    return tr;    
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



const searchByKeyWord = (item) =>{
    let input = document.getElementById("search-input").value;
    let filteredSearch = cart.filter(item => cart.item.type == input);
    console.log(filteredSearch.title);
}
