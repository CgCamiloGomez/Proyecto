
var candidato = new Object();
var bodyData;
var documento;
var divcandidatoUno;
var divcandidatoDos;
var divcandidatoTres;

divcandidatoUno = document.getElementById('candidatoUno').addEventListener('click', capturarDatosVoto);
divcandidatoDos = document.getElementById('candidatoDos').addEventListener('click', capturarDatosVoto);
divcandidatoTres = document.getElementById('candidatoTres').addEventListener('click', capturarDatosVoto);

//https://norfipc.com/inf/javascript-como-cambiar-modificar-estilo-css-paginas-web.html

document.getElementById('btnVoto').addEventListener('click', sendData);


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
    documento = localStorage.getItem(document);
    alert(documento); //https://developer.mozilla.org/es/docs/Web/API/Window/localStorage

    bodyData = JSON.stringify({
        "IdPuestoVotacion":1,
        "IdCandidato": Idcandidato,
        "IdElector": documento
    });
}

// function body(){
    // var bodyData = JSON.stringify({
    //     "IdPuestoVotacion":1,
    //     "IdCandidato": Idcandidato,
    //     "IdElector": documento
    // });

    // return bodyData;
// }


function sendData() {
   
    return new Promise((resolve,reject)=>{
        // let url = 'http://localhost:4035/ApiVotos/api/Electores/;
        let url = 'http://localhost:52861/api/Votos';
        const api = new XMLHttpRequest(); 
        api.onreadystatechange = () => {
            //alert('ready');
            //console.log('estado',api.readyState);
            if (api.readyState === 4) { // 4 terminó el proceso.
              if (api.status === 200) {
                resolve('OK');
                consultarVotosPuestoVotacion();
                clearlocalStorage();
                alert("Su voto se registro con exito");
                window.close();
              } 
              else{
                alert("No se encontraron datos asociados a la identificación");
              }
              console.log(api.response);
              reject('error');
            }
          };
        api.open('POST', url);
        api.setRequestHeader('Content-Type', 'application/json');
        api.send(bodyData);
    });
    
}
 
function consultarVotosPuestoVotacion(){
    return new Promise((resolve,reject)=>{
        let url = 'http://localhost:52861/api/Votos/'+1;
        const api = new XMLHttpRequest(); 
        api.onreadystatechange = () => {
            //alert('ready');
            //console.log('estado',api.readyState);
            if (api.readyState === 4) { // 4 terminó el proceso.
              if (api.status === 200) {
                let datos = JSON.parse(api.responseText);
                if (datos!=null){
                    //window.open("votos.html");
                    //imput.value = "";
                }
                //resolve('OK');
              } 
              else{
                alert("No se encontraron datos asociados a la identificación");
              }
              console.log(api.response);
              reject('error');
            }
          };
        api.open('GET', url);
        api.send();
    
    });
}

function consultarVotosCandidatos(){
    return new Promise((resolve,reject)=>{
        let url = 'http://localhost:52861/api/Votos/';
        const api = new XMLHttpRequest(); 
        api.onreadystatechange = () => {
            //alert('ready');
            //console.log('estado',api.readyState);
            if (api.readyState === 4) { // 4 terminó el proceso.
              if (api.status === 200) {
                let datos = JSON.parse(api.responseText);
                if (datos!=null){
                    //window.open("votos.html");
                    //imput.value = "";
                }
                //resolve('OK');
              } 
              else{
                alert("No se encontraron datos asociados a la identificación");
              }
              console.log(api.response);
              reject('error');
            }
          };
        api.open('GET', url);
        api.send();
    
    });
}

function clearlocalStorage(){
    localStorage.removeItem(document);
    localStorage.clear();
}

//Fin primera forma

//Segunda forma para tomar el click
//    var imagen = document.getElementById('imagenDos');
//    imagen.addEventListener('click', function(){
//        alert("Imagen Dos");
//    });
