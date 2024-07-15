#!/usr/bin/env node

const init = require('./utils/init');
const { bio, social } = require('./utils/data');
const cli = require('./utils/cli');
const debug = require('./utils/debug');

const input = cli.input;
const flags = cli.flags; 

(() => {
init();
input.includes('help') && cli.showHelp(0);
console.log(bio);
if(flags.social) {
    console.log(social);
}

debug(flags.debug);
})()
