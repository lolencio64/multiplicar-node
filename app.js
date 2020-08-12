const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite)
            .then(listado => console.log(listado))
            .catch(e => console.log(e));
        console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.red(archivo)}`))
            .catch(e => console.log(e));
        console.log('Crear');
        break;

    default:
        console.log('comando no reconocido');


}

//let base = 'asd';


// 2* 1= 2

//let argv2 = process.argv;

//console.log(argv.base);
//console.log(argv2);

//console.log('Limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1]