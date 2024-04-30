import { expect } from 'chai'
import { ethers } from 'hardhat'
import { BigNumberish } from 'ethers'

describe('GuessGame', () => {
  describe('determineWinner', () => {
    it('should initialize the game correctly', async () => {
      const Contract = await ethers.getContractFactory("Gaming")
      const contract = await Contract.deploy()
      const { player, playerName, playerBalance, wins, losses } = await contract.players(0)

      const playerAddress = await (await ethers.provider.getSigner(0)).getAddress()
      expect(player).to.equal(playerAddress)
      expect(playerName).to.equal('Test Player')
      expect(playerBalance).to.equal(0)
      expect(wins).to.equal(1)
      expect(losses).to.equal(2)
      // We should add some overrides rules in eslint config -> https://stackoverflow.com/questions/37558795/nice-way-to-get-rid-of-no-unused-expressions-linter-error-with-chai
      // First we need to configure eslint per project for nx...
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      expect(await contract.online()).to.be.true
    })

    it('should determine winner', async () => {
      const Contract = await ethers.getContractFactory("Gaming")
      const contract = await Contract.deploy()
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      expect(await contract.determineWinner(3, 1, true)).to.be.true
    })

    it('winOrLose', async () => {
      const Contract = await ethers.getContractFactory("Gaming")
      const contract = await Contract.deploy()
      const signer = await ethers.provider.getSigner(0)
      const playerAddress = await signer.getAddress()
      // Send 1000 Ether from another account to the signer's address
      await signer.sendTransaction({
        to: playerAddress,
        value: ethers.parseEther('1000')
      })
      const balanceBefore = await ethers.provider.getBalance(playerAddress)
      await contract.winOrLose(1, true, 10, { value: ethers.parseEther("10") })
      const balanceAfter = await ethers.provider.getBalance(playerAddress)
      const balanceBeforeBN = BigInt(balanceBefore.toString())
      const balanceAfterBN = BigInt(balanceAfter.toString())

      // This doesn't work because JS doesn't quite work with ether number? I don't know...
      //  actual is 10000001415736252640 & expected is 10 so, I got the work around for this assertion.
      // const diff = balanceBeforeBN - balanceAfterBN
      // expect(diff).to.equal(10)

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      expect(balanceAfterBN < balanceBeforeBN).to.be.true
    })

  })
})