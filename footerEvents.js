
const slide = () => {
    let ig = document.getElementById("ig-icon");
    ig.setAttribute("class", "bounce");
    setTimeout(function(){ 
        let fb = document.getElementById("fb-icon");
        fb.setAttribute("class", "bounce");
     }, 2000);
}

//Hace foco en el input para agregar un comentario

const getFocus = () =>{
    let textarea = document.getElementById("comments-textarea");
    textarea.setAttribute("class", "focusIn");
}

const addComment = () =>{
    let text = document.getElementById("comments-textarea").value;
    let li = document.createElement("li");
    li.setAttribute("class", "li");
    let button = document.createElement("button");
    button.innerText = "Eliminar";
    button.setAttribute("class", "comment-buttons delete-button")
    li.appendChild(document.createTextNode(text));
    document.getElementById("here-goes-your-comment").appendChild(li);
    li.appendChild(button);
    button.addEventListener("click", remove);
}

const remove = event =>{
    event.target.parentElement.remove();
}