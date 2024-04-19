import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('Hero', () => {
  it('should create Hero', async () => {
    const Contract = await ethers.getContractFactory("Hero")
    const contract = await Contract.deploy()

    await expect(contract.createHero()).to.be.revertedWith("Please send more money")

    // Sending exactly 0.05 ether should not revert
    await expect(contract.createHero({ value: ethers.parseEther("0.05") })).to.not.be.reverted;
  })

  it('should return Heros', async () => {
    const Contract = await ethers.getContractFactory("Hero")
    const contract = await Contract.deploy()

    expect(await contract.getHeroes()).to.deep.equal([])
  })
})