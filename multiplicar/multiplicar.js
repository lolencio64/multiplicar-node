//requireds
const fs = require('fs');
const colors = require('colors');
//const fs = require('express');
//const fs = require('./fs');

let listarTabla = async(base, limite) => {

    let data = '';
    if (!Number(base)) {
        throw new Error(`El valor introducido ${base} no es un numero`);
        return;
    } else if (!Number(limite)) {
        throw new Error(`El valor introducido ${limite} no es un numero`);
        return;
    }

    console.log('================='.green);
    console.log(`tabla de ${base} `.green);
    console.log('================='.green);
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }

    return data;


}


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}