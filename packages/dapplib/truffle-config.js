require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remain mistake good entire front sense'; 
let testAccounts = [
"0x46d8a58e57d0307ab6df79c0d7e957bdaa3ef607ff10145a4a04915492e889ae",
"0xca178fcb7d5fcd2a6ffaff5f1430fc8d9de4f4edf8f20b48233ad516065175ac",
"0xc368f6517ce549cd07aa540cf167e5319835c89b294ce731d435644764d17cf7",
"0x29dda15f48cdbb62a7003e1962bb4547ffdb9e6bffcdd3f4c2fd492f94739757",
"0x2a4aafa198becf4ac2da16c56b0b416e26594feed14e3fdb9ddd944072b25f96",
"0x4ade3acf4931cb9a1f2d04ce085f545f9fbd097b31627b6c786c930b082644bd",
"0x6430c62333cf35347b0575d34a1dcd77f4512237239f5e5a43455e65c29b8cb7",
"0xb6112d606e1a14d73190c4ab863e8604bd3a1c90dc5d04ceead8dfe35b4efe2d",
"0x487e4a33eab7ea4b6eeea45aa53fa368b0809c11fae24193965e9eee44756f8e",
"0x110e3b7f0730f7e0c38e5a36aefa87cfe6c84c982ad4d76bea12369d622544ba"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


