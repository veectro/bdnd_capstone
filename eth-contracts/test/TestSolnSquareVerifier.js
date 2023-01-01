const SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
const Proof = require("../../zokrates/code/square/proof.json");

contract("TestSolnSquareVerifier", (accounts) => {
    const account_one = accounts[0];
    const account_two = accounts[1];

    beforeEach(async () => {
        this.contract = await SolnSquareVerifier.new({
            from: account_one
        });
        const eventEmitted = false
    });

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it("should solution added in contract", async () => {
        await this.contract.SolutionAdded((err, res) => {
            eventEmitted = true
        })

        await this.contract.addSolution(
            0,
            account_two,
            {
                from: account_one
            }
        );
        assert.equal(eventEmitted, true, 'Invalid event emitted')
    });

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it("should token minted for contract ", async () => {
        await this.contract.SolutionAdded((err, res) => {
            eventEmitted = true
        })

        tokenId = 4;

        await this.contract.mintProperty(
            account_two,
            tokenId,
            Proof.proof.a,
            Proof.proof.b,
            Proof.proof.c,
            Proof.inputs,
            {
                from: account_one
            }
        );

        ownerId = await this.contract.ownerOf(tokenId)
        assert.equal(ownerId, account_two, 'Invalid owner id')

        assert.equal(eventEmitted, true, 'Invalid event emitted')
    });
});
