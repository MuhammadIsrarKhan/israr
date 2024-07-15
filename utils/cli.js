const meow = require('meow');
const {green,yellow,cyan} = require('chalk');


const helpText = `
Usage
${green('npx israri')} ${yellow('[--option]')} ${cyan('<command>')}
Options
${yellow('--social')}                    Show the social info
${yellow('--no-social')}                 Don't show social info
${yellow('-d')}, ${yellow('--debug')}     Print debug informations
${yellow('-v')}, ${yellow('--version')}   Print CLI version

Commands
${cyan('<help>')}                        Print CLI help information

Examples
${green('npx israri')} --no-social
`
const options = {
    flags : {
        social : {
            type : 'boolean',
            default : true
        },
        debug : {
            type : 'boolean',
            default : false,
            alias : 'd'
        },
        version : {
            type : 'boolean',
            default : false,
            alias : 'v'
        },
    }
}
module.exports = meow(helpText,options);