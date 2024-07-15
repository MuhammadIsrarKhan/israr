const alert = require('cli-alert');
const cli = require('./cli');

const input = cli.input;
const flags = cli.flags; 
module.exports = (isDebug) => {
    if(!isDebug) {
        return;
    }
    alert({
        type:'warning',msg : `DEBUGGING INFO`
    });
    console.log(`cli.input`,input)
    console.log(`cli.flag`,flags)
}