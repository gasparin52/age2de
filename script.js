//variables para envio de comentario

/*
let textoImput = document.getElementById("enviar_comentarios");
let botonComentario = document.getElementById("boton_comentarios");
let comentario = document.getElementById("contendor_comentarios");

botonComentario.addEventListener("click", function(){
    let contenidoTexto = textoImput.value;
    let nuevoP = document.createElement("div");
    let texto = document.createTextNode(contenidoTexto);
    nuevoP.appendChild(texto);
    comentario.appendChild(nuevoP);
}); */

// juego

// variables

function atack(atackUsuario, atackMaquina, vidaMaquina, vidaUsuario) {
    let valorAtackUsuario = parseInt(atackUsuario.value);
    let valorAtackMaquina = atackMaquina;
    let valorVidaUsuario = parseInt(vidaUsuario.value);
    let valorVidaMaquina = parseInt(vidaMaquina.value);
    if(valorAtackUsuario >= 0){
        if(valorAtackUsuario === valorAtackMaquina){
            valorVidaUsuario += 40;
            valorVidaMaquina -= 10;
            if(valorVidaMaquina > 0) {
                vidaUsuario.value = valorVidaUsuario;
                vidaMaquina.value = valorVidaMaquina;
                console.log(valorVidaMaquina);
            }else {
                vidaMaquina.value = 0;
            }
        }
        else {
            valorVidaUsuario -= 10;
            if(valorVidaUsuario > 0){
                vidaUsuario.value = valorVidaUsuario;
                console.log(vidaUsuario);
            }else {
                vidaUsuario.value = 0;
            }
        }
    } 
    if(valorVidaMaquina < 100 && valorVidaMaquina > 0) {
        imagenDerecha.src = "../assets/torres/torre_llamas.gif";
    } else if (valorVidaMaquina <= 0){
        imagenDerecha.src = "../assets/torres/torre_destruida.gif";
        alert("¡Felicidades! ¡Has derrotado al enemigo! :)");
    }
    if(valorVidaUsuario < 100 && valorVidaUsuario > 0) {
        imagenIzquierda.src = "../assets/torres/torre_llamas.gif";
    } else if (valorVidaUsuario <= 0){
        imagenIzquierda.src = "../assets/torres/torre_destruida.gif";
        alert("¡Perdiste! Tu torre fue destruida... :(");
    }
}

    let vidaUsuario = document.getElementById("vida_usuario");
    let vidaMaquina = document.getElementById("vida_maquina");
    let atackUsuario = document.getElementById("atack_usuario");
    let atackMaquinaDom = document.getElementById("atack_maquina");
    let imagenDerecha = document.getElementById("img_t_derecha");
    let imagenIzquierda = document.getElementById("img_t_izquierda");
    
  

document.getElementById("atacar").addEventListener("click", function() {
    let atackMaquina = Math.floor(Math.random() * 37);
    atack(atackUsuario, atackMaquina, vidaMaquina, vidaUsuario, imagenDerecha, imagenIzquierda);
    atackMaquinaDom.value = atackMaquina;
    atackUsuario.value = "";
});

document.getElementById("reinicio").addEventListener("click", function(){
    vidaMaquina.value = 100;
    vidaUsuario.value = 100;
    imagenDerecha.src = "../assets/torres/torre.gif";
    imagenIzquierda.src = "../assets/torres/torre.gif";
    atackMaquinaDom.value = "";
    atackUsuario.value = "";
});
