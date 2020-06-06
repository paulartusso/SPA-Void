const cards = [

        {
            id: 1,
            image: "pescado.jpg",
            type: "Remera",
            title: "Reme Pescado Rabioso",
            price: 700
        },
        {
            id: 2,
            image: "vinyl.jpg",
            type: "Remera",
            title: "Reme Vinilo",
            price: 700
        },
        {
            id: 3,
            image: "octopus.jpg",
            type: "Musculosa",
            title: "Musculosa Pulpo",
            price: 700 
        }
    ];


const createElement = () =>{
    let cardContainer = document.getElementById("#card-container");
    let div = document.createElement("div");
    cardContainer.appendChild(div);
    let title = document.createElement("h2");
    let description = document.createElement("p");
    let button = document.createElement("button");
    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(button);
    button.innerText = "asdsfsdfsd";
}