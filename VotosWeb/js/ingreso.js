
var btn = document.getElementById('btnCedula');
var imput = document.getElementById('inputCedula');
var valueInput;
btn.addEventListener('click', function () {
    valueInput = imput.value
    console.log('input',valueInput);
    if (valueInput != "") {
        alert();
        obtenerDatosB(valueInput).then((data)=>{
            alert(data);
        });
    }
    else {
        alert("Por favor ingresar un valor");
    }
    
    // else {
    //     //Es esta parte se invoca al metodo que realiza la petición al servidor
    //     // para validar que el usuairo que ingresa tiene número de cedula
    //     alert(valueInput);
    //     window.open("votos.html");
    //     //var newUrl = "votos.html";
    //     //document.location.href = newUrl;
    //     //window.open (location.assign("file:///D:/Proyecto/VotosWeb/votos.html"));
    //     //document.location.replace("file:///D:/Proyecto/VotosWeb/votos.html");    
    // }
});

function obtenerDatosB(valueInput) {
return new Promise((resolve,reject)=>{
    let url = 'http://localhost:4035/ApiVotos/api/Electores/'+valueInput;
    const api = new XMLHttpRequest(); 
    api.onreadystatechange = () => {
        alert('ready');
        console.log('estado',api.readyState);
        if (api.readyState === 4) { // 4 terminó el proceso.
          if (api.status === 200) {
            console.log(api.response);
            resolve('OK');
          } 
          console.log(api.response);
          reject('error');
        }
      };
    api.open('GET', url);
    api.send();

});
}

function obtenerDatos(valueInput){
    let url = 'http://localhost:4035/ApiVotos/api/Electores/1024542204';
    const api = new XMLHttpRequest();
   // api.onreadystatechange = callback;
    
    //api.setRequestHeader("Content-type", "application/json"); //Cuando se haga la petición POST SE AGREGA ESTA LÍNEA
    
    // var respuesta = api.response;
    // console.log(respuesta);
    // api.onreadystatechange = function(){
    //     if (this.status == 200 && this.readyState == 4){
    //         let datos = JSON.parse(api.responseText);

    //     }
    // }

    api.onreadystatechange = () => {
        alert('ready');
        console.log(api.readyState);
        if (api.readyState === 4) { // 4 terminó el proceso.
          if (api.status === 200) {
            console.log(api.response);
          } 
          console.log(api.response);
        }
      };
    api.open('GET', url);
    api.send();

    // api.onload = function() {
    //     if (api.status != 200) { // analyze HTTP status of the response
    //       alert(`Error ${api.status}: ${api.statusText}`); // e.g. 404: Not Found
    //     } else { // show the result
    //       alert(`Done, got ${api.response.length} bytes`); // responseText is the server
    //     }
    //   };

    //   api.onprogress = function(event) {
    //     if (event.lengthComputable) {
    //       alert(`Received ${event.loaded} of ${event.total} bytes`);
    //     } else {
    //       alert(`Received ${event.loaded} bytes`); // no Content-Length
    //     }
      
    //   };
      
    //   api.onerror = function() {
    //     alert("Request failed");
    //   };
}



// // 1. Create a new XMLHttpRequest object
// let xhr = new XMLHttpRequest();

// // 2. Configure it: GET-request for the URL /article/.../load
// xhr.open('GET', '/article/xmlhttprequest/example/load');

// // 3. Send the request over the network
// xhr.send();

// // 4. This will be called after the response is received
// xhr.onload = function() {
//   if (xhr.status != 200) { // analyze HTTP status of the response
//     alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
//   } else { // show the result
//     alert(`Done, got ${xhr.response.length} bytes`); // responseText is the server
//   }
// };

// xhr.onprogress = function(event) {
//   if (event.lengthComputable) {
//     alert(`Received ${event.loaded} of ${event.total} bytes`);
//   } else {
//     alert(`Received ${event.loaded} bytes`); // no Content-Length
//   }

// };

// xhr.onerror = function() {
//   alert("Request failed");
// };
