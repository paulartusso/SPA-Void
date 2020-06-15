const products ={
    
    remeras: [
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
    ],

    varios: [
        {
            id: 4,
            image: "../assets/images/mate.jpg",
            title: "Mate Cortazar",
            price: 400
        },
        {
            id: 5,
            image: "../assets/images/gorra.jpg",
            title: "Gorra Ramas",
            price: 550
        }
    ]
};

const createFirstRow = (item) =>{
    let firstCardContainer = document.getElementById("first-card-container");
    let div = document.createElement("div");
    div.setAttribute("class", "card");
    firstCardContainer.appendChild(div);
    
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


const getFocus = () =>{
    let textarea = document.getElementById("comments-textarea");
    textarea.setAttribute("class", "focusIn");
}



