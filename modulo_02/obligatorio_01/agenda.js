/* 
 * Tarea practica módulo 2 curso MiriadaX Nodejs
 * 
 * @author Gaston Nina <gastonnina@gmail.com>
 * La Paz - Bolivia
 */

function agenda(titulo, inic) {
    var _titulo = titulo;
    var _contenido = inic;

    return {
        /**
         * Función que lista todo el contenido de agenda
         * @returns {String}
         */
        listar: function () {
            var i, c = 0,
                    cad = 'Agenda de "' + this.titulo() + '"\n\n';

            for (i in _contenido) {
                c++;
                cad += c + '. ' + i + ', ' + _contenido[i] + '\n';
            }
            return cad;
        },
        /**
         * Funcion que ingresa Registros masivos a agenda
         * @param {obj} nuevos, Array objeto json
         */
        ingresoMasivo: function (nuevos) {
            var i;
            for (i in nuevos) {
                this.meter(nuevos[i].nombre, nuevos[i].tf);
            }
        },
        /**
         * Funcion get que devuelve el titulo
         * @returns {agenda._titulo}
         */
        titulo: function () {
            return _titulo;
        },
        /**
         * Funcion de adicion unitaria
         * @param {string} nombre
         * @param {number} tf
         */
        meter: function (nombre, tf) {
            _contenido[nombre] = tf;
        },
        /**
         * Devuelve el numero de telefono de un miembro en agenda
         * @param {string} nombre
         * @returns {agenda._contenido|tf}
         */
        tf: function (nombre) {
            return _contenido[nombre];
        },
        /**
         * Elimina una persona de la agenda
         * @param {string} nombre
         */
        borrar: function (nombre) {
            delete _contenido[nombre];
        },
        /**
         * Funcion devuelve el objeto de almacenaje como cadena de texto plano
         * @returns {String}
         */
        toJSON: function () {
            return JSON.stringify(_contenido);
        }
    }
}

var amigos = agenda("Amigos",
        {Pepe: 113278561,
            José: 157845123,
            Jesús: 178512355
        });

// proceso para poder enviar parametros desde consola
// @example node agenda.js listar
switch (process.argv[2]) {
    // @example node agenda.js listar
    case 'listar':
        console.log(amigos.listar());
        break

        //@example1  node agenda.js adicion "[{nombre:'Gaston',tf:123}]"
        //@example2  node agenda.js adicion "[{nombre:'Gaston',tf:123},{nombre:'Nina',tf:456}]"
    case 'adicion':
        //console.log('-->' + process.argv[3]);
        var nuevos = eval(process.argv[3]);
        amigos.ingresoMasivo(nuevos);
        console.log(amigos.listar());
        break;
    default:
        // opcion por defecto cuando no se pasa parametros
        console.log(amigos.listar());
        break;
}


// Funcion que despliega todas los parametros pasados por consola
//process.argv.forEach(function (val, index, array) {
//  console.log(index + ': ' + val);
//});