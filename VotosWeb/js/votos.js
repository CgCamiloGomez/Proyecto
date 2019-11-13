
var candidato = new Object();

document.getElementById('candidatoUno').addEventListener('click', capturarDatosVoto);
document.getElementById('candidatoDos').addEventListener('click', capturarDatosVoto);
document.getElementById('candidatoTres').addEventListener('click', capturarDatosVoto);
document.getElementById('').addEventListener('click', sendData);

function capturarDatosVoto() {
    var Idcandidato;
    var IdPuestoVotacion;
    var idcandidatoEvent = event.currentTarget.id


    switch (idcandidatoEvent) {
        case 'candidatoUno':
            Idcandidato = 1;
            break;
        case 'candidatoDos':
            Idcandidato = 2;
            break;
        case 'candidatoTres':
            Idcandidato = 3;
            break;
    }


    candidato.nombre = event.currentTarget.children[1].children.nombre.innerHTML
    candidato.partido = event.currentTarget.children[1].children.partido.innerHTML
    //    var voto = event.currentTarget.id
    //document.getElementById(voto);

    alert(candidato.nombre + candidato.partido);
    alert(localStorage.getItem(document)); //https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
}

function body(){
    var bodyData = JSON.stringify({
        "IdPuestoVotacion":1,
        "IdCandidato": Idcandidato
    });

    return bodyData;
}


function sendData() {
   
    return new Promise((resolve,reject)=>{
        let url = 'http://localhost:4035/ApiVotos/api/Electores/'+valueInput;
        const api = new XMLHttpRequest(); 
        api.onreadystatechange = () => {
            //alert('ready');
            //console.log('estado',api.readyState);
            if (api.readyState === 4) { // 4 terminó el proceso.
              if (api.status === 200) {
                resolve('OK');
              } 
              else{
                alert("No se encontraron datos asociados a la identificación");
              }
              console.log(api.response);
              reject('error');
            }
          };
        api.open('POST', url);
        api.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        api.send(body());
    });
}
    

//Fin primera forma

//Segunda forma para tomar el click
//    var imagen = document.getElementById('imagenDos');
//    imagen.addEventListener('click', function(){
//        alert("Imagen Dos");
//    });