import "@nomicfoundation/hardhat-toolbox";
import { ethers } from 'hardhat'
import { Fallback, IFallback } from '../../../typechain-types'

const deploy = async () => {

  const Fallback = await ethers.getContractFactory('Fallback')
  const fallback = await Fallback.deploy()
  await fallback.waitForDeployment()

  console.log(await fallback.getAddress())

  return fallback
}

const fallback = async (fallback: Fallback) => {
  const f = await ethers.getContractAt('IFallback', await fallback.getAddress())
  await f.count()
}

deploy().then(fallback)