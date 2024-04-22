
// import "@nomiclabs/hardhat-ethers" -> the instruction tells us to import, but we haven't installed it. For now, not bothering it.
import "@nomicfoundation/hardhat-toolbox"; // see https://hardhat.org/hardhat-runner/docs/advanced/migrating-from-hardhat-waffle

import { ethers } from 'hardhat'
import { HelloWorld } from "../../../typechain-types"

const deploy = async () => {
  // When you call a getContractFactory("HelloWorld") it actually just loads the file from the json build file.
  const HelloWorld = await ethers.getContractFactory("HelloWorld")
  const hello = await HelloWorld.deploy()
  // await hello.deployed() -> the instruction has this line but deployed() doesn't exist...
  // deployed() is deprecated for hardhat-toolbox. The course is using hardhat-waffle, but it is now moved to hardhat-toolbox.
  // https://hardhat.org/hardhat-runner/docs/advanced/migrating-from-hardhat-waffle
  await hello.waitForDeployment() 
  return hello
}

const sayHello = async (hello: HelloWorld) => {
  console.log("say hello", await hello.hello())
}

deploy().then(sayHello)