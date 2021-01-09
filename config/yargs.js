const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'describe la tarea '
}
const completado = {
    alias: 'c',        
    default: true,
    desc: 'marca como completada una tarea'
}


const argv = require('yargs')
.command('borrar','Comando para eliminar una tarea',{
    descripcion 
})
.command('crear','Comando para crear una tarea',{
    descripcion
})
.command('actualizar','Actualiza una tarea o varias tareas',{
    descripcion,
    completado
})
.help()
.argv;

module.exports = {
    argv
}