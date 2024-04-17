import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('GuessGame', () => {
  describe('determineWinner', () => {
    it('should determine winner correctly', async () => {
      const Contract = await ethers.getContractFactory("Gaming")
      const contract = await Contract.deploy()
      expect(await contract.determineWinner(2, 2)).to.be.true
      expect(await contract.determineWinner(4, 5)).to.be.false
    })
  })
})