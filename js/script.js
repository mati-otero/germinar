const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navMenu") 

hamburger.addEventListener("click", mobileMenu )

function mobileMenu() {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  function validarFormulario(evento) {
    evento.preventDefault();
    let nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito tu nombre todavia');
    
    }
    let email = document.getElementById('email').value;
    if (email.length < 6) {
      alert('El correo no es válido');
      
    }
    let comentarios = document.getElementById('comentarios').value;
    if (comentarios.length < 1) {
      alert('Dejanos un comentario');
      return;
    }
    this.submit();
    alert('Mensaje enviado correctamente Muchas Gracias!!!');
  }
  