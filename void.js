//agrega al carro de compras

cart = [];


const addToCart = (id) =>{
    let allProducts = [...products, ...more];
    for(let item of allProducts){
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

const createShoppingCart = (item) =>{
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let secondTd = document.createElement("td");
    let thirdTd = document.createElement("td");
    let button = document.createElement("button");

    tr.appendChild(td);
    tr.appendChild(secondTd);
    tr.appendChild(thirdTd);
    tr.appendChild(button);
    
    td.innerHTML = item.title; 
    thirdTd.innerHTML = item.price;
    button.innerText = "x";  
    button.addEventListener("click", removeProductfromCart);
    return tr;    
}

const removeProductfromCart = event =>{
    event.target.parentElement.remove();
}

const showSearchInput = () =>{
    $("#search-input").toggleClass("hidden");
    $("li").toggleClass("color");  
}

const showRegisterModal = () => {
    $("#modal-container").toggleClass("hidden");
    let logInModal = $("#log-in");
    logInModal.toggleClass("hidden");
    $("#modal-container").append(logInModal);    
}

//muestra el carrito de compras

const showCartModal = () =>{
    let modalContainer = $("#modal-container");
    let cartContainer = $("#cart-container");
    modalContainer.toggleClass("hidden");
    cartContainer.toggleClass("hidden");
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
