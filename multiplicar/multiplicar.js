// requireds

const fs = require('fs'); // Esta librería ya existe en node
const colors = require('colors');
//const fs = require('express'); // No viene en node, hay que instalarlo a parte
//const fs = require('./fs'); // archivos que nosotros escribimos y están en el path indicado

let listarTabla = (base, limite = 10) => {
    if(!Number(base)){
        console.log(`La base introducida '${base}' no es un número`);
        return;
    }
    if(!Number(limite)){
        console.log(`El límite introducido '${limite}' no es un número`);
        return;
    }

    console.log('----------------------'.blue);
    console.log(`Tabla de ${base}`.blue);
    console.log('----------------------'.blue);


    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base * index}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`La base introducida '${base}' no es un número`);
            return;
        }

        if(!Number(limite)){
            reject(`El límite introducido '${limite}' no es un número`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }

        let nombreArchivo = `tabla-${base}-al-${limite}.txt`;

        fs.writeFile('tablas/' + nombreArchivo, data, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(`${nombreArchivo}`);
            }
        });
    });
}

module.exports = {
    crearArchivo, listarTabla
}