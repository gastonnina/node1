/* 
 * Tarea practica módulo 1 curso MiriadaX Nodejs
 * Mostrar el numero PI con 8 decimales
 * 
 * @author Gaston Nina <gastonnina@gmail.com>
 * La Paz - Bolivia
 */
// Se almacena el numero PI
var pi =Math.PI;
// Se recorta a 8 decimales
pi=pi.toFixed(8);
// 2 saltos de carro
pi+='\n\n';
// Listado caracteres especiales
pi+='\u55e8\uff0c\u4f60\u597d\u5417';
// impresion por pantalla
console.log(pi);
