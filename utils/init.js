const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled')
const welcome = require('cli-welcome')
const pkgJson = require('../package.json')


module.exports = () => {
unhandled();
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

checkNode(18,{fail:false})
}