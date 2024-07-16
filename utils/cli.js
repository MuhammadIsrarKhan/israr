const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
    minimal : {
        type : 'boolean',
        alias : 'm',
        desc : 'Print minimal information'
    },
    social : {
        type : 'boolean',
        default : true,
        desc : 'Show the social info'
    },
    debug : {
        type : 'boolean',
        default : false,
        alias : 'd',
        desc : 'Print debug informations'
    },
    version : {
        type : 'boolean',
        default : false,
        alias : 'v',
        desc : 'Print CLI version'
    },
}

const commands = {
	help: {
		desc: `Print the help info`,
	},
};

const helpText = meowHelp({
	name: `npx awais`,
	flags,
	commands,
});

const options = {
	inferType: true,
	hardRejection: false,
	flags,
};

module.exports = meow(helpText, options);