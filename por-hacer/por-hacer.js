
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

let listadoPorhacer=[];

const getListado = () =>{

   cargarDB();

    return listadoPorhacer;
}

const guardarDB = (tarea) => {

        data = JSON.stringify(tarea);


        fs.writeFile('./DB/data.json',data, (err) => {
            if (err) throw new Error('No se pudo crear Archivo',err)           
        } );

}

const cargarDB = () =>{

    try {

        listadoPorhacer = require('../DB/data.json');
        
    } catch (error) {
        listadoPorhacer = [];
    }

}

const crear = (descripcion) =>{

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorhacer.push(porHacer);

    guardarDB(listadoPorhacer);


    return porHacer;

}   

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorhacer.findIndex( tarea =>{
        return tarea.descripcion === descripcion;
    } );


    if( index >= 0 ){
        listadoPorhacer[index].completado = completado;
        guardarDB(listadoPorhacer);
        return true;
    }
    else{
        return false;
    }
}

const borrarTarea = (descripcion) =>{

    cargarDB();

    let index = listadoPorhacer.findIndex( tarea =>{
        return tarea.descripcion === descripcion;
    } );

    if( index >= 0 ){

        listadoPorhacer.splice(index,1);

        console.log(`se borro tarea ${descripcion}`);

        guardarDB(listadoPorhacer);

        return true;
    }
    else{
        return false;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrarTarea
}