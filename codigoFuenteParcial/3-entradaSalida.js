//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
    var largo;
    var alambre;
    var perimetro;

ancho = parseInt(document.getElementById("ancho").value);
largo = parseInt(document.getElementById("largo").value);

perimetro= ancho*2 + largo * 2;
alambre=perimetro*6;
alert("Se nesesitan " + alambre + "metros de alambre");











	
}

