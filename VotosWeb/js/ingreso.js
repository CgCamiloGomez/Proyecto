
var btn = document.getElementById('btnCedula');
var imput = document.getElementById('inputCedula');
var valueInput;
btn.addEventListener('click', function () {
    valueInput = imput.value
    obtenerDatos(valueInput);
    // if (valueInput == "") {
    //     alert("Por favor ingresar un valor");
    // }
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

function obtenerDatos(valueInput){
    let url = `http://localhost:4035/ApiVotos/api/Electores/`+ valueInput;

    const api = new XMLHttpRequest();
    api.open('GET', URL, true)
    api.send();
    
    api.onreadystatechange = function(){
        if (this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText);
        }
    }
}
