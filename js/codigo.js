var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

// pincel.fillStyle = "lightgrey"; // propiedad
// pincel.fillRect(0,0,600,400); //funcion

// pincel.fillStyle = "green"; // propiedad
// pincel.fillRect(0,0,200,400); //funcion

// pincel.fillStyle = "red"; // propiedad
// pincel.fillRect(400,0,200,400); //funcion

// pincel.fillStyle = "yellow"; // propiedad
// pincel.beginPath();
// pincel.moveTo(300, 200);
// pincel.lineTo(200,400);
// pincel.lineTo(400,400);
// pincel.fill();

// pincel.fillStyle = "blue"; // propiedad
// pincel.beginPath();
// pincel.arc(300,200,50,0,2*3.14);
// pincel.fill();

var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    //cabeza
    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(200, 50, 350 ,300);
    //ojos
    pincel.fillStyle = 'black';
    pincel.fillRect(250, 110, 90, 90);
    pincel.fillRect(410, 110, 90, 90);
    //nariz
    pincel.fillRect(340, 200, 70, 100);
     //boca
    pincel.fillRect(300, 240, 40, 110);
    pincel.fillRect(410, 240, 40, 110);




