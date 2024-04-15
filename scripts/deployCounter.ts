import "@nomicfoundation/hardhat-toolbox";
import { ethers } from 'hardhat'
import { Counter } from "../typechain-types"

const deployCounter = async () => {
  const Counter = await ethers.getContractFactory('Counter')
  const counter = await Counter.deploy()
  await counter.waitForDeployment()
  return counter
}

const getCounter = async (counter: Counter) => {
  await counter.count()
  console.log("Counter deployed with: ", await counter.getCounter())
}

deployCounter().then(getCounter)