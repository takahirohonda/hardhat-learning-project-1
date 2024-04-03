
// import "@nomiclabs/hardhat-ethers" -> the instruction tells us to import, but we haven't installed it. For now, not bothering it.
import { ethers } from 'hardhat'
import { HelloWorld } from "../typechain-types"

const deploy = async () => {
  // When you call a getContractFactory("HelloWorld") it actually just loads the file from the json build file.
  const HelloWorld = await ethers.getContractFactory("HelloWorld")
  const hello = await HelloWorld.deploy()
  // await hello.deployed() -> the instruction has this line but deployed() doesn't exist...
  return hello
}

const sayHello = async (hello: HelloWorld) => {
  console.log("say hello", await hello.hello())
}

deploy().then(sayHello)