//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes;
    
    mes=prompt("Ingrese el mes:").toLowerCase();
    switch(mes){
        case "enero":
        case "febrero":
        alert("Veranito!!!!");
        break;
        default:
        alert("extraño enero y febrero!!!");
    }


    

}

