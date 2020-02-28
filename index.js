const Mocha = require('mocha')

const mocha = new Mocha()
mocha.addFile('./spec/botium.spec.js')

console.log('running')
mocha.run(failures => process.exitCode = failures ? 1 : 0)
console.log('ready')
