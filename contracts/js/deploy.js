const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {abi, bytecode } = require('./compile');

const mnemonic = 'grit network unlock note acoustic cherry occur fall spike question couch side';
const provider = new HDWalletProvider(mnemonic, 'http://localhos:8545');

const web3 = new Web3(provider);
const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    
    const argumentsConstructor = [
        'Dario Coin', 'DRC', 18, 21000000
    ]

    const gasEstimate = await new web3.eth.Contract(Abi).deploy({data: bytecode, argumentsConstructor}.gasEstimate({ from: accounts[0]}));
    const result = await new web3.eth.Contract(Abi).deploy({data: bytecode, argumentsConstructor}.send({ gas: gasEstimate, from: accounts[0]}))
};

deploy();