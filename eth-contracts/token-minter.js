const Web3 = require("web3");
const fs = require("fs");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Proof = require("../zokrates/code/square/proof.json");

const SolnSquareVerifier = "0x0D3f2Ae34572128103662B69D3f5A8dD2162693D";
const contractOwner = "0x49cf66095e573b3596a295d5af92776eC02ebB23";
const SolnSquareInterface = JSON.parse(
    fs.readFileSync("./build/contracts/SolnSquareVerifier.json")
);

const infuraKey = "2f8bb";
const mnemonic = fs.readFileSync(".secret").toString().trim();
const provider = new HDWalletProvider(
    mnemonic,
    `https://goerli.infura.io/v3/${infuraKey}`
);
const web3 = new Web3(provider);

const main = async () => {
    const contract = new web3.eth.Contract(
        SolnSquareInterface.abi,
        SolnSquareVerifier,
        {
            from: contractOwner,
        }
    );

    const amount_of_tokens = 7;
    console.log('Minting');

    for (let i = 0; i < amount_of_tokens; i++) {
        const result = await contract.methods
            .mintProperty(
                contractOwner,
                i,
                Proof.proof.a,
                Proof.proof.b,
                Proof.proof.c,
                Proof.inputs
            )
            .send({ from: contractOwner });

        console.log(`Minted Token ${i} with Tx Hash : ${result.transactionHash}`);
    }
};

main().then(console.log).catch(console.error);