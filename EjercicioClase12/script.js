
var nombre;


function saludo(nombre) {
   nombre = prompt("Por favor ingrese su nombre");
  
   while (nombre == "") {
    nombre = prompt("Por favor ingrese su nombre");
   }
   
    console.log("Bienvenido " + nombre + "!");
}

saludo (nombre);