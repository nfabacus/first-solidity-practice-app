const path = require('path') // used to make sure to get the right path (cross platform compatibility eg. windows or unix-based system)
const fs = require('fs')
const solc = require('solc') // solidity compiler

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol')
const source = fs.readFileSync(inboxPath, 'utf8')

module.exports = solc.compile(source, 1).contracts[':Inbox']  //specify the source code and number of contracts to be compiled


