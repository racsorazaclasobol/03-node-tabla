const { crearArchivoTabla } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear();

//Sin Yargs
// const[ , , arg3 = 'base=5' ] = process.argv;
// const[ , base = 5 ] = arg3.split('=');



//Con Yargs

const { b,l, h } = argv;
// console.log( argv );

crearArchivoTabla( b, l, h )
    .then( nombreArchivo => console.log( nombreArchivo, ' creado' ) )
    .catch( err => console.log( err ) )
