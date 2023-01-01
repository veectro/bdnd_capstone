pragma solidity >=0.4.21 <0.6.0;

import 'openzeppelin-solidity/contracts/math/SafeMath.sol';

import "./ERC721Mintable.sol";
import "./Verifier.sol";

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is VeectroPropertyToken {
    // TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
    Verifier verifier;
    address private _owner;

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address clientAddress;
    }

    // TODO define an array of the above struct
    Solution[] private solutions;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) uniqueSolutions;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(uint256 index, address client);

    // Constructor of the SolnSquareVerifier
    constructor () public VeectroPropertyToken("Veectro Property", "VCTP") {
        _owner = msg.sender;
        verifier = new Verifier();
    }

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(uint256 index, address clientAddress) internal {
        Solution memory solution = Solution(
        {
        index : index,
        clientAddress : clientAddress
        });

        solutions.push(solution);

        bytes32 key = keccak256(abi.encodePacked(index, clientAddress));

        uniqueSolutions[key] = solution;

        emit SolutionAdded(index, clientAddress);
    }


    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintProperty(
        address to,
        uint256 tokenId,
        uint[2] calldata a,
        uint[2][2] calldata b,
        uint[2] calldata c,
        uint[2] calldata input
    ) external onlyOwner {
        bytes32 key = keccak256(abi.encodePacked(tokenId, to));

        require(uniqueSolutions[key].clientAddress == address(0), "Solution exists");
        require(verifier.verifyTx(a, b, c, input), "Invalid while verifying. Invalid Proof");

        super.mint(to, tokenId);
        addSolution(tokenId, to);
    }
}
