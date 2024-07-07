#!/usr/bin/env node

const welcome = require('cli-welcome')
const pkgJson = require('./package.json')
const chalk = require('chalk');

welcome({
    title : "Muhammad Israr Khan",
    tagLine : `Howdy, nice to meet ya!`,
    description : pkgJson.description,
    version : pkgJson.version,
    bgColor : "#FADC00",
    color : "#000000",
    bold : true,
    clear : true,
})
console.log(`
${chalk.italic('Versatile Software Engineer, crafting challenging products with extra attention to detail. 2+ years of experience.')}

${chalk.hex('#4c00ff').bold.inverse(' Email ')} -    ${chalk.dim(`israruetp@gmail.com`)}
${chalk.hex('#6cc644').bold.inverse(' Github ')} -   ${chalk.dim(`https://github.com/MuhammadIsrarKhan`)}
${chalk.hex('#1da1f2').bold.inverse(' LinkedIn ')} - ${chalk.dim(`https://www.linkedin.com/in/muhammad-israr-khan-558300199/`)}

`);
