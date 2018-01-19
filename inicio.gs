//Aplicación para probar la extensión de GAS con GitHub
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp. -> Creamos el menu con submenu
  ui.createMenu('Actualizar datos')
      .addItem('Empezar ahora!!', 'menuItem1')
      .addItem('Función 2', 'menuItem2')
      .addToUi();
}

function menuItem1() {
  //Definimos una variable donde vamos a registrar un input:
  var input = Browser.inputBox("Por favor, introduce tu nombre:");
  
  //Esta linea muestra un mensaje de hola mundo!! al ejecutar el menuItem1
  Browser.msgBox('Bienvenido a tu primer Script con GAS '+input);
  //Añado este nuevo comentario sobre el código desde Github!!!
  
  //Para usar el log de GAS solo tenemos que hacer CTRL+Enter y añadir esta linea
  Logger.log("Es una prueba de Log para el nombre: "+input);
}

//Esta función mostrará el nombre de la hoja de cálculo
function menuItem2() {
 
  //Obtenemos en una variable el nombre de la hoja de cálculo
  var name = SpreadsheetApp.getActive().getName();
  //Mostramos la variable en el log
  Logger.log('Estás en la hoja llamada '+name);
  //Obtenemos el nombre de otra hoja con el id
  var name2 = SpreadsheetApp.openById('1Wjt9BVhgtmt6b2WKMV9uF9VGSRTRRKdBai09Ca3X8yg').getName();
  //Mostramos la variable en el log
  Logger.log('Estás en la hoja llamada '+name2);
}
