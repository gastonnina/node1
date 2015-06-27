/** 
 * Tarea practica módulo 3 curso MiriadaX Nodejs
 * 
 * @author Gaston Nina <gastonnina@gmail.com>
 * La Paz - Bolivia
 */

// Invocamos al modulo de ficheros
var fs = require('fs');

// Validacion para ver si tenemos parametros minimos
if (process.argv.length < 4) {
    console.log('La sintaxis debe ser: node merge.js <dest> <f1> <f2> .. <fn>');
    process.exit(); // obliga salida
}
var dest, fn, i;
try {
    // Lo que leemos se
    dest = fs.createWriteStream(process.argv[2]);
    for (i = 3; i < process.argv.length; i++) {
        fn = fs.createReadStream(process.argv[i]);
        fn.pipe(dest);
    }

} catch (err) {
    console.log("OCURRIO UN ERROR: \n ->" + err);
} finally {
    console.log('Se unieron el contenido de ' + (process.argv.length - 3) + ' archivos a "' + process.argv[2] + '" el contenido es: \n');
    // Se muestra el nuevo contenido del archivo
    fs.readFile(
            process.argv[2], // nombre de destino
            'ascii', // tipo de contenido
            function (err, data) {
                if (err) {
                    console.log("OCURRIO UN ERROR: \n ->" + err);
                }
                console.log(data);// impresion
            }
    );
}