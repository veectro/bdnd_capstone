var ERC721MintableComplete = artifacts.require('VeectroPropertyToken');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];
    const account_four = accounts[3];
    const account_five = accounts[4];

    const name = "Veectro Property";
    const symbol = "VCTP";

    describe('match erc721 spec', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new(name, symbol, {from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_two, 1, {from: account_one});
            await this.contract.mint(account_four, 2, {from: account_one});
            await this.contract.mint(account_two, 3, {from: account_one});
            await this.contract.mint(account_five, 4, {from: account_one});
        })

        it('should return total supply', async function () {
            let total = await this.contract.totalSupply();
            assert.equal(total, 4, 'The total supply is incorrect');
        })

        it('should get token balance', async function () {
            let balance = await this.contract.balanceOf(account_two);
            assert.equal(balance, 2, 'Incorrect token balance for account[1]');
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
            let tokenURI = await this.contract.tokenURI(4);
            assert.equal(tokenURI, 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/4',
                'the tokenURI is incorrect for account 4');
        })

        it('should transfer token from one owner to another', async function () {
            const tokenId = 1
            await this.contract.transferFrom(account_two, account_three, tokenId, {
                from: account_two,
            });

            const newOwner = await this.contract.ownerOf(tokenId)
            assert.equal(newOwner, account_three);
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new(name, symbol, {from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () {
            try {
                await this.contract.mint(account_one, 5, {from: account_two});
                assert.fail("The transaction should have thrown an error");
            }
            catch (err) {
                assert.include(err.message, "revert", "Ownable: caller is not the owner");
            }
        })

        it('should return contract owner', async function () {
            const contractOwner = await this.contract.getOwner();
            assert.equal(contractOwner, account_one);
        })

    });
})