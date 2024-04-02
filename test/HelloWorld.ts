import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('HelloWorld', () => {
  it('should return Hello World', async () => {
    const HelloWorldContract = await ethers.getContractFactory("HelloWorld")
    const hello = await HelloWorldContract.deploy()

    expect(await hello.hello()).to.equal("Hello World")
  })
})