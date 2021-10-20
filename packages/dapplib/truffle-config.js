require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush strong response office clutch gesture pave army gaze'; 
let testAccounts = [
"0xcf3cc8a5d4aeec23452a14e6a78b0b46f09182bda7d15eb7db36fdcdbd0b0c98",
"0x6254d6a3c210e3e62ef0f1696216dad4571899aa7b7d6d8eb77a1bfbcef55809",
"0xc492071c1a31a4f3201ccb063788f062fe70080d151fa59756fe46d713cab508",
"0xd469484f17d84bf2ed476a73d23097827dc7b4d43ca3b7d8536cdf75115ed7eb",
"0xb0178acf005b8e2ba366e6266bdcf692109f389c71a401d078dfc4ac66ed0c8d",
"0x8aa26ca5b6eed3871208934fda295db6016f3aee995e96204857b841701a87f3",
"0x840e237f152cc54d59316da274b1cebe2b4da05b93f9ab75735f6e5f67f1db7a",
"0xcc38f59de6baf276fbb35276664f859e0cd1ca1aa8158171fc5428d1f3a72359",
"0xe4231565b3af02efa2eedc50bf14ccd8aeea1938b0bf5fe72d5c27a0f04b343e",
"0xd9542fe0f13a12399f42a9eee290bcbff34047fe6748c0198bcbf41722669a79"
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


