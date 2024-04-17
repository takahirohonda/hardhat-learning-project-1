import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('GasFeeTest', () => {
  it('testing GasFee', async () => {
    const Contract = await ethers.getContractFactory("GasFeeTest")
    const contract = await Contract.deploy()

    await contract.incrementOnce()
    await contract.incrementTwice()
    await contract.incrementThrice()
    await contract.addVariables()
  })
})