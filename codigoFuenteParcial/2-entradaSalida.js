//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
    var importefinal;
    var iva;

    importe  = parseInt ( prompt("Escriba el importe: "));
while(importe<=0 || isNaN(importe)) {
     importe=parseInt(prompt("Error Reingrese importe: "))

} 
    iva=importe * 21 / 100;
    importefinal=iva+importe;
    document.getElementById("importe").value=importefinal;

}

