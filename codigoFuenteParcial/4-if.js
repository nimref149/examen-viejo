//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var numero1;
    var numero2;
    var resultado;
    numero1=parseInt(prompt("Ingrese el numero1"));
    numero2=parseInt(prompt("Ingrese el numero2"));

    if( numero1 == numero2 ){
        resultado=numero1*numero2;
    }
	else if(numero1>numero2) {
        resultado=numero1-numero2;}
        else {
            resultado=numero1+numero2;
        }
    document.write(resultado);
    }
   

