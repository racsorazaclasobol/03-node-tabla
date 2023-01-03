const fs = require('node:fs')
const colors = require('colors');


const crearArchivoTabla = async( base = 1, listar = false, hasta ) => {
    
    try {

        let salida = '';
        const nombreArchivo = `./salida/Tabla-${ base }.txt`

        
        for (let i = 1; i <= hasta; i++) {
            salida += `    ${ base } x ${ i } = ${ base * i }\n`
        }
    
        fs.writeFileSync( nombreArchivo, salida );

        if( listar ) {
            console.log('==================='.rainbow)
            console.log('   Tabla del'.white.bold, base)
            console.log('==================='.rainbow)
            console.log( salida );
        }

        return nombreArchivo;


    } catch (error) {
        console.log(error)
        throw error;
    }

}

module.exports = {
    crearArchivoTabla
}