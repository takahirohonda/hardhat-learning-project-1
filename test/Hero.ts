import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('Hero', () => {
  it('should return Hero', async () => {
    const Contract = await ethers.getContractFactory("Hero")
    const contract = await Contract.deploy()

    await contract.createHero()
  })
})