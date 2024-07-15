#!/usr/bin/env node

const init = require('./utils/init');
const { bio, social } = require('./utils/data');
const cli = require('./utils/cli');
const debug = require('./utils/debug');
const stats = require('./utils/stats');

const input = cli.input;
const flags = cli.flags; 

(async () => {
init(flags.minimal);
input.includes('help') && cli.showHelp(0);
console.log(bio);
if(flags.social) {
    console.log(social);
}
await stats()

debug(flags.debug);
})()
