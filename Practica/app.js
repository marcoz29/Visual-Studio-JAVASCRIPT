function cargarReloj(){
    //Uso de la funcion Date(), se obtiene la hora.

    //Declaracion de variables.
    var fechaHora = new Date();
    var hora = fechaHora.getHours();
    var minuto = fechaHora.getUTCMinutes();
    var segundo = fechaHora.getSeconds();

    //esta variable es para el "AM"
    var meridiano = "AM";

    //Si hora es igual a "0", declaramos la hora con el valor "12"
    if(hora == 0){
        hora = 12;
    }

    //Si hora es mayor a 12, restamos la hora "-12" y mostramos la variable meridiano con el valor "PM"
    if(hora >12){
        hora = hora - 12;
        meridiano = "PM";
    }

    //Se formatea los "0" del reloj
    hora = (hora < 10) ? "0" + hora : hora;
    minuto = (minuto < 10) ? "0" + minuto : minuto;
    segundo = (segundo < 10) ? "0" + segundo : segundo;

    //Se pasa la hora al HTML
    var tiempo = hora + ":" + minuto + ":" + segundo + " " + meridiano;
    document.getElementById("relojNumerico").innerText = tiempo;
    document.getElementById("relojNumerico").textContent = tiempo;

    //Se carga el reloj a 500 milisegundos
    setTimeout(cargarReloj, 500);

}

cargarReloj();
