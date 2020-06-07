/*const products = [

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
*/

let products = [];

const listOfProducts = (id, image, type, title, price) => {
    products.push({id, image, type, title, price})
    return listOfProducts;
}

listOfProducts(1, "../assets/images/pescado.jpg", "Remera", "Reme Pescado", 700);
listOfProducts( 2, "../assets/images/octopus.jpg", "Remera", "Reme Pulpo", 700);
listOfProducts( 3, "../assets/images/vinyl.jpg", "Remera", "Reme Vinilo", 700);

const createElement = (item) =>{
    let cardContainer = document.getElementById("card-container");
    let div = document.createElement("div");
    div.setAttribute("class", "card")
    cardContainer.appendChild(div);

    let img = document.createElement("img");
    img.src = `img/${item.image}`;

    let title = document.createElement("h2");
    title.innerText = item.title;
    title.setAttribute("class", "h2");
    
    let button = document.createElement("button");
    button.setAttribute("class", "add-button");
    button.innerText = "Agregar al carrito";
    
    div.appendChild(img);
   div.appendChild(title);
    title.appendChild(button);
}

   
    
