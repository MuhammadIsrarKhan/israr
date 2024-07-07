#!/usr/bin/env node

const welcome = require('cli-welcome')
const pkgJson = require('./package.json')

welcome({
    title : pkgJson.name,
    tagLine : `Howdy, nice to meet ya!`,
    description : pkgJson.description,
    version : pkgJson.version,
    bgColor : "#FADC00",
    color : "#000000",
    bold : true,
    clear : true,
})
console.log(`

Muhammad Israr Khan

Versatile Software Engineer, crafting challenging products
with extra attention to detail. 2+ years of experience.

Email - israruetp@gmail.com
Github - https://github.com/MuhammadIsrarKhan
LinkedIn - https://www.linkedin.com/in/muhammad-israr-khan-558300199/

`);
