# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

## Library used
```
Truffle v5.7.0 (core: 5.7.0)
Ganache v7.5.0
Solidity v0.5.16 (solc-js)
Node v18.12.1
Web3.js v1.7.4
```

## Installing

```
# installing
npm install
```


## Run test 
!! make sure that ganache are running on port **7545**
```
cd eth-contracts
truffle test
```

Test result : 

![test_result.png](images%2Ftest_result.png)


## Contract Address & ABI
The smart contract is deployed in the `goerli`-Network with following addresses:

### Verifier
[link](https://goerli.etherscan.io/address/0x0bEB3a87AEF10c8c9799029f7A871038d28bbA9f)
```
transaction hash:     0x78a420479b0468c640846b5b4f5aa14a1056c8b150fb2121169df2574176e972
contract address:     0x0bEB3a87AEF10c8c9799029f7A871038d28bbA9f
```

### SolnSquareVerifier
[link](https://goerli.etherscan.io/address/0x0D3f2Ae34572128103662B69D3f5A8dD2162693D)
```
transaction hash:     0xf5382558e964fcff0e382cf9b7398c2dd930679e079da9a8fa38351e0e9a23b1
contract address:     0x0D3f2Ae34572128103662B69D3f5A8dD2162693D
```

The abi are located in `eth-contracts/build/contracts`

### Minted token 
Minted Token 0 with Tx Hash : 0xbf1b5f24a3c9536b774428ac67f7e4df83ded27ee5eeedf7dd0ecd2426eee409
Minted Token 1 with Tx Hash : 0x2992b5c763933616daa41dfe9bfab46ee1bb2f4fc059b368809ed9668e67249f
Minted Token 2 with Tx Hash : 0xa1d5e47d4d7200fed2c9611c4247bfd88d39a491a53bed9e050f6c5a19fb4d61
Minted Token 3 with Tx Hash : 0x60f76296e0ff7da78bcc4c2e227c37b1a36e99b3fd6bfb1839e27c7b04fb8604
Minted Token 4 with Tx Hash : 0x693c690c84f7af5755910eb4b7aa004ee7b52891ed90061834b0df4cbde467a3
Minted Token 5 with Tx Hash : 0x0b5bcc0e2869d71e7df376b5c54ad78bc2ebc0ad4245b9709c7c2d4c216da9c8
Minted Token 6 with Tx Hash : 0x031e3d1747d7342585fddca1b9ec875d88b6b9142ee593509e2550fc96fc232c
Minted Token 7 with Tx Hash : 0x057881524aa495b5f5603ce0a77b4226293e2755d8e597f7642004178c9c7179
Minted Token 8 with Tx Hash : 0xe040efb7b6ac5cdb7e18ab1b2ca231f13db9c35a595e3217f4ed3aa3b824c088
Minted Token 9 with Tx Hash : 0x2e144d56a7e8c4292b8c1a2005b4230f76cefa7b6f94613a468d051dd38fa055

### Storefront 
[Storefront address](https://testnets.opensea.io/collection/unidentified-contract-ywyb7mk3u1?search[sortAscending]=true&search[sortBy]=UNIT_PRICE)

### Buyer Address
Following address buy tokens 0, 1, 2, 3, 4: `0x250758067192a5415CFA8987DD72C6B20eE528B6` with transaction `https://goerli.etherscan.io/tx/0x6afba2986aafe0eaa814a458dbd11ce4d2a8bce93516f3c147b9c8f124d3ad65`

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
