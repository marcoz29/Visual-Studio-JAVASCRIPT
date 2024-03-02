function cargarReloj(){
    //uso de la función Date(), se obtiene la hora

    //declaración de variables
    var fechaHora = new Date();
    var hora = fechaHora.getHours();
    var minuto = fechaHora.getMinutes();
    var segundo = fechaHora.getSeconds();

    //esta variable es para el "AM"
    var meridiano = "AM";

    //si la hora es igual a 0, declaramos la hora con el valor "12"
    if(hora == 0){
        hora = 12;
    }

    //si la hora es mayor a 12, restamos la hora -12 y mostramos la variable meridino con el valor PM
    if(hora >12){
        hora = hora - 12;
        meridiano = "PM";
    }

    //se formatea los "0" del reloj
    hora = (hora < 10) ? "0" + hora : hora;
    minuto = (minuto < 10) ? "0" + minuto : minuto;
    segundo = (segundo < 10) ? "0" + segundo : segundo;

    //se pasa la hora al HTML
    var tiempo = hora + ":" + minuto + ":" + segundo + " " + meridiano;
    document.getElementById("relojNumerico").innerText = tiempo;
    document.getElementById("relojNumerico").textContent = tiempo;

    //se carga el reloj a los 500 milisegundos
    setTimeout(cargarReloj, 500);
  
 }

 cargarReloj();