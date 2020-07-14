
const slide = () => {
    let ig = document.getElementById("ig-icon");
    ig.setAttribute("class", "bounce");
}

//Hace foco en el input para agregar un comentario

const getFocus = () =>{
    let textarea = document.getElementById("comments-textarea");
    textarea.setAttribute("class", "focusIn");
}

const addComment = () =>{
    let text = document.getElementById("comments-textarea").value;
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = "Eliminar";
    button.setAttribute("class", "cancel-button")
    li.appendChild(document.createTextNode(text));
    document.getElementById("here-goes-your-comment").appendChild(li);
    li.appendChild(button);

    console.log(text);
}