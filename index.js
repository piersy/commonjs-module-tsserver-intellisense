// Using this module import provides typing for 'Web3' and instances
// constructed throught it.
// import Web3 from 'web3' 

// Using this module require, only provides typing for the var 'Web3' but not
// for any instances constructed through it.
let Web3 = require('web3') 
let web3 = new Web3(Web3.givenProvider);
