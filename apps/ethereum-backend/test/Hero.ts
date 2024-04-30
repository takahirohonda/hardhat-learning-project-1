import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('Hero', () => {
  it('should not create Hero when not enough ether', async () => {
    const Contract = await ethers.getContractFactory("Hero")
    const contract = await Contract.deploy()

    await expect(contract.createHero(0)).to.be.revertedWith("Please send more money")

    // Sending exactly 0.05 ether should not revert
    await expect(contract.createHero(
      0,
      { value: ethers.parseEther("0.05") }
    )).to.not.be.reverted;
  })

  it('should return empty hero without creating them', async () => {
    const Contract = await ethers.getContractFactory("Hero")
    const contract = await Contract.deploy()

    expect(await contract.getHeroes()).to.deep.equal([])
  })

  it ('should create heroes', async () => {
    const Contract = await ethers.getContractFactory("TestHero")
    const contract = await Contract.deploy()

    await contract.setRandom(69);
    await contract.createHero(
      0,
      { value: ethers.parseEther("0.05") }
    )
    
    const createdHero = (await contract.getHeroes())[0];
    console.log(createdHero)

    expect(await contract.getMagic(createdHero)).to.equal(16);
    expect(await contract.getHealth(createdHero)).to.equal(2);
  
  })

  it ('should create heroes with createHero2 method', async () => {
    const Contract = await ethers.getContractFactory("TestHero")
    const contract = await Contract.deploy()

    await contract.setRandom(100);
    await contract.createHero2(
      0,
      { value: ethers.parseEther("0.05") }
    )
    
    const createdHero = (await contract.getHeroes())[0];
    console.log(createdHero)

    expect(await contract.getStrength(createdHero)).to.equal(5);
    expect(await contract.getHealth(createdHero)).to.equal(5);
    expect(await contract.getDex(createdHero)).to.equal(5);
    expect(await contract.getIntellect(createdHero)).to.equal(5);
    expect(await contract.getMagic(createdHero)).to.equal(5);
  })
})