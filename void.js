//agrega al carro de compras

cart = [];

const addToCart = (id) =>{
    let allProducts = [...products, ...more];
    for(let item of allProducts){
        if(item.id === id){
            let index = cart.findIndex(item => item.id == id);
            if(index >= 0){
                cart[index].quantity += 1;
                let quantity = document.getElementById(`data-${item.id}-quantity`);
                let price = document.getElementById(`data-${item.id}-price`);
                quantity.innerHTML = cart[index].quantity;
                price.innerHTML = cart[index].quantity * cart[index].price;
            } else {
                item.quantity = 1;
                cart.push(item);
                let cartContainer = document.getElementById("table-container");
                let table = document.getElementById("cart-items-table");
                let tr= createShoppingCart(item);
                cartContainer.appendChild(table);
                table.appendChild(tr);
                let message = document.getElementById("message");
                message.setAttribute("class", "hidden");
            }
        }
    }
}


const createShoppingCart = (item) =>{
    let tr = document.createElement("tr");
    tr.id = `data-${item.id}`;
    let td = document.createElement("td");
    td.setAttribute("class", "tr");
    let secondTd = document.createElement("td");
    secondTd.setAttribute("class", "tr");
    secondTd.id = `data-${item.id}-quantity`;
    let thirdTd = document.createElement("td");
    thirdTd.setAttribute("class", "tr");
    thirdTd.id = `data-${item.id}-price`;
    let button = document.createElement("button");
    
    td.innerHTML = item.title; 
    secondTd.innerHTML = 1;
    thirdTd.innerHTML = item.price;
    
    tr.appendChild(td);
    tr.appendChild(secondTd);
    tr.appendChild(thirdTd);
    tr.appendChild(button);

    button.innerText = "x";  
    button.setAttribute("class", "x-button");
    button.addEventListener("click", () => removeProductfromCart(item.id));
    return tr;    
}

const removeProductfromCart = id =>{
    let index = cart.findIndex(item => item.id == id);
    if(index >= 0){
        cart.splice(index, 1);
        let tr = document.getElementById(`data-${id}`);
        tr.remove();
    }
}

const showSearchInput = () =>{
    $("#search-input").toggleClass("hidden").addClass("focusIn");
    $("li").toggleClass("color");  
}



const searchByKeyWord = () =>{
    let allProducts = [...products, ...more];
    let filteredProducts = [];
    let search = document.getElementById("search-input").value.toLowerCase();
    for (let item of allProducts){
        if(item.title.toLowerCase().indexOf(search) >= 0){
            filteredProducts.push(item);     
        }
    }
    showSearchResult(filteredProducts);
}

const showSearchResult = (filteredProducts) =>{
    $("#modal-container").toggleClass("hidden");
    let resultsContainer = $("<div></div>");
    $("#modal-container").append(resultsContainer);
    let div = $("<div></div>");
    div.addClass("cart-container results-container")
    resultsContainer.append(div);
    let button = $("<button></button>");
    button.html("x");
    button.addClass("x-button x");
    div.append(button);
    button.click (function() {
        $("#modal-container").toggleClass("hidden");
        resultsContainer.toggleClass("hidden").html("");
    });
    filteredProducts.forEach(item =>{
        div.append(createDataRow(item));
    })
}

//Muestra tabla de talles

const showSizes = () =>{
    $("#modal-container").toggleClass("hidden");
    let sizesModal = $("#sizes-modal");
    sizesModal.toggleClass("hidden");
    let xButton = $("#x-button");
    xButton.toggleClass("hidden");
    $("#modal-container").append(sizesModal, xButton);
}

//Muestra el modal de registro

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

