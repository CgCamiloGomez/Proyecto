
var btn = document.getElementById('btnCedula');
var imput = document.getElementById('inputCedula');
var valueInput;
btn.addEventListener('click', function () {
    valueInput = imput.value
    if (valueInput == "") {
        alert("Por favor ingresar un valor");
    }
    else {
        //Es esta parte se invoca al metodo que realiza la petición al servidor
        // para validar que el usuairo que ingresa tiene número de cedula
        alert(valueInput);
        window.open("votos.html");
    }
});
