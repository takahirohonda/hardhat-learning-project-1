
import "@nomicfoundation/hardhat-toolbox"; // see https://hardhat.org/hardhat-runner/docs/advanced/migrating-from-hardhat-waffle

import { ethers } from 'hardhat'
import { Gaming } from "../typechain-types"

const deploy = async () => {
  const HelloWorld = await ethers.getContractFactory("Gaming")
  const hello = await HelloWorld.deploy()

  await hello.waitForDeployment() 
  return hello
}

const sayHello = async (gaming: Gaming) => {
  console.log("say hello", await gaming.hello())
}

deploy().then(sayHello)