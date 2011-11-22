$(function() {

var jugador = '<div id="jugador"></div>';
$("#map").append(jugador);

var globin = '<div id="globin"></div>';
$("#map").append(globin);

var orco = '<div id="orco"></div>';
$("#map").append(orco);




 /*! Ubicar al luchador dentro del escenario */

/*! Movimientos del teclado*/
/*! 38 = Up*/
/*! 40 = down */
/*! 37 = left*/
/*! 39 = right*/
//alert(e.keyCode);  MENSAJE



$(document).keydown(function(e){


var position = $("#jugador").position();
var mapPosition = $("#map").position();


switch (e.keyCode)
{
case 37:     				//Izquierda
	if(position.left>=mapPosition.left)
	$("#jugador").css('left',position.left -10 + 'px' );
	break;

case 38:	 				//Arriba
	if(position.top>=mapPosition.top-60)
	$("#jugador").css('top',position.top -10 + 'px' );
	break;     
	
case 39:					//Derecha
	if(position.left<=mapPosition.left+700)
    $("#jugador").css('left',position.left +10 + 'px' );
	break;
	
case 40:					//Abajo
	if(position.top<=mapPosition.top+440)
	$("#jugador").css('top',position.top +10 + 'px' );

	break;


}

});

});