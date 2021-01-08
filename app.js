const argv = require('yargs').argv;

console.log(argv);

let comando = argv._[0];

console.log(comando);


switch(comando){
    case 'crear':
        console.log('crear tarea');
    break;

    case 'listar':
        console.log('listar tareas');
    break;

    case 'actulizar':
        console.log('actuliza tareas');
    break;

    default: console.log('Comando no reconocido ');
}