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
      expect(await contract.online()).to.be.true
    })

    it('should determine winner', async () => {
      const Contract = await ethers.getContractFactory("Gaming")
      const contract = await Contract.deploy()

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
      const diff = balanceAfterBN - balanceBeforeBN
   
      // This needs to be updated.
      expect(diff).to.equal(10)
    })

  })
})