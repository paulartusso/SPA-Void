
const slide = () => {
    let ig = document.getElementById("ig-icon");
    ig.setAttribute("class", "bounce");
}

//Hace foco en el input para agregar un comentario

const getFocus = () =>{
    let textarea = document.getElementById("comments-textarea");
    textarea.setAttribute("class", "focusIn");
}