const chalk = require('chalk');

const bio = `${chalk.italic('Versatile Software Engineer, crafting challenging products with extra attention to detail. 2+ years of experience.')}`;

const social = `
${chalk.hex('#4c00ff').bold.inverse(' Email ')} -    ${chalk.dim(`israruetp@gmail.com`)}
${chalk.hex('#6cc644').bold.inverse(' Github ')} -   ${chalk.dim(`https://github.com/MuhammadIsrarKhan`)}
${chalk.hex('#1da1f2').bold.inverse(' LinkedIn ')} - ${chalk.dim(`https://www.linkedin.com/in/muhammad-israr-khan-558300199/`)}
`

module.exports = {
    social,
    bio
}