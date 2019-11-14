
var btn = document.getElementById('btnCedula');
var imput = document.getElementById('inputCedula');
var valueInput;
btn.addEventListener('click', function () {
    valueInput = imput.value
    console.log('input',valueInput);
    if (valueInput != "") {
        //alert();
        obtenerDatosB(valueInput).then((data)=>{
            alert(data);
        });
        //obtenerDatos(valueInput);
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
    let url = 'http://localhost:52861/api/Electores/'+valueInput;
    const api = new XMLHttpRequest(); 
    api.onreadystatechange = () => {
        //alert('ready');
        //console.log('estado',api.readyState);
        if (api.readyState === 4) { // 4 terminó el proceso.
          if (api.status === 200) {
            let datos = JSON.parse(api.responseText);
            if (datos!=null){
                window.open("votos.html");
                imput.value = "";
                //var document = datos.Documento;
                localStorage.setItem(document,datos.Id);//https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
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




function obtenerDatos(valueInput){
    // let url = 'http://localhost:4035/ApiVotos/api/Electores/'+valueInput;
    let url = 'http://localhost:52861/api/Electores/'+valueInput;
    const api = new XMLHttpRequest();
   //api.onreadystatechange = callback;
    //api.setRequestHeader("Content-type", "application/json"); //Cuando se haga la petición POST SE AGREGA ESTA LÍNEA
    //var respuesta = api.response;
    //console.log(respuesta);
    api.onreadystatechange = function(){
        if (this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(api.responseText);
            if (datos!=null){
                window.open("votos.html");
            }
            //console.log(datos);
        }
        else {
            alert("No se encontraron datos asociados a la identificación");
        }
    }
    api.open('GET', url);
    api.send();
}




