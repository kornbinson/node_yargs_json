
const argv = require('./config/yargs').argv;
const color = require('colors');

let  porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch(comando){
    case 'crear':        
        let ver  = porHacer.crear(argv.descripcion);                
        console.log(ver);
    break;

    case 'listar':

        let listado = porHacer.getListado();

        for( let tarea of listado ){

            console.log('===== Por Hacer ====='.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('====================='.green);

        }

        
    break;

    case 'actualizar': 
        let actulizado = porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(actulizado);
    break;

    case 'borrar':
        let chao = porHacer.borrarTarea(argv.descripcion);
        console.log(chao);
    break;        

    default: console.log('Comando no reconocido ');
}