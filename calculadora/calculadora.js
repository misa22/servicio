if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}

var operandoa;
var operandob;
var operacion;
  function dos (){
  if(resultado.value==0){
    limpiar();
  }
  resultado.value = resultado.value  + "2";
}
function tres (){
  if(resultado.value==0){
    limpiar();
  }
  resultado.value = resultado.value  + "3";
}
function cuatro (){
  if(resultado.value==0){
    limpiar();
  }
  resultado.value = resultado.value  + "4";
}
function cinco (){
  if(resultado.value==0){
    limpiar();
  }
  resultado.value =resultado.value  + "5";
}
function seis(){
  if(resultado.value==0){
    limpiar();
  }
  resultado.value = resultado.value  + "6";
}
function siete(){
  if(resultado.value==0){
    limpiar();
  }
  resultado.value = resultado.value  + "7";
}
function ocho(){
  if(resultado.value==0){
    limpiar();
  }
  resultado.value = resultado.value  + "8";
}
function nueve(){
  if(resultado.value==0){
    limpiar();
  }
  resultado.value = resultado.value  + "9";
}
function cero(){
  if(resultado.value==0){
    limpiar();
  }
  resultado.value = resultado.value  + 0;
}
function punto(){
  resultado.value = resultado.value + ".";
}
function suma(){
  resultado.value = resultado.value  + "+";
}
function resta(){
  resultado.value = resultado.value  + "-";
}
function multiplicacion (){
  resultado.value = resultado.value  + "*";
}
function division() {
  resultado.value = resultado.value  + "/";
}
function reset (){
    resetear();
}
function igual(){
  resultado.value=eval(resultado.value);
}
function agregar(){
  resultado.value=eval(resultado.value);
  var memoria = document.getElementById('memoriadisplay')
  memoria.value=eval(resultado.value);
}
function memori(){
  var memoria = document.getElementById('memoriadisplay')
  if(memoria.value==="M"){
  }else{

    resultado.value = resultado.value  + memoria.value;
  }
}
function borrar(){
  var memoria = document.getElementById('memoriadisplay')
  memoria.value = "M";
}
function limpiar(){
  resultado.value = "";
}

function resetear(){
  resultado.value = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}


function uno(){
  if(resultado.value==0){
    limpiar();
  }
  resultado.value= resultado.value + "1";
}