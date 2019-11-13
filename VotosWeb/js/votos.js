var candidato = new Object();

// function eventosImg(){
    var candidatoUno = document.getElementById('candidatoUno');
    var candidatoDos = document.getElementById('candidatoDos');
    var candidatoTres = document.getElementById('candidatoTres');
// }
candidatoUno.addEventListener('click',hola);
candidatoDos.addEventListener('click',hola);
candidatoTres.addEventListener('click',hola);
//Una forma de tomar el evento del click sobre la imagen.
function hola(){

candidato.nombre = event.currentTarget.children[1].children.nombre.innerHTML
candidato.partido = event.currentTarget.children[1].children.partido.innerHTML
//    var voto = event.currentTarget.id
    //document.getElementById(voto);

   alert(candidato.nombre + candidato.partido);
   alert(localStorage.getItem(document));
}

function sendData(){
   JSON.stringify({

   });
}
//Fin primera forma

//Segunda forma para tomar el click
//    var imagen = document.getElementById('imagenDos');
//    imagen.addEventListener('click', function(){
//        alert("Imagen Dos");
//    });
