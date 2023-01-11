const minimist = require('minimist');

const args = minimist(process.argv.slice(2), {
    alias:{        
        /* p: 'port', */
        m: 'modo'
    },
    default:{
        modo: 'FORK',
        /* port:8080 */
    }
});

console.log(args);

module.exports = { 
  HOST: '127.0.0.1',
  /* PORT: args.port, */ 
  MODO: args.modo,
  ARGS: args
}