const path = require('path'); //to access of rute 
const fs = require('fs'); // to read code
const solc = require('solc'); // to compile

const MyCoinPath = path.join(__dirname, '../MyCoin.sol');
const code = fs.readFileSync(MyCoinPath, 'utf8'); //To read all the code first

const input = {
    language: 'Solidity',
    sources: {
        'MyCoin.sol': {
            content: code
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
//return .abi file and the compilated code (bytecode)
//web3 require the .abi and the contracts address

console.log(output);

module.exports = {
    abi: output.contracts['MyCoin.sol'].MyCoin.abi,
    bytecode: output.contracts['MyCoin.sol'].MyCoin.evm.bytecode.object
}