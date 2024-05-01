import "@nomicfoundation/hardhat-toolbox";
import { ethers } from 'hardhat'
import { A, B } from "../typechain-types"

const deploy = async () => {

  const A = await ethers.getContractFactory('A')
  const B = await ethers.getContractFactory('B')

  const a = await A.deploy()
  await a.waitForDeployment()

  const b = await B.deploy(await a.getAddress())
  await b.waitForDeployment()

  console.log('A', await a.getA())
  console.log('B', await b.getB())
  console.log('-------------------')

  await a.setA(42)
  console.log('A', await a.getA())
  console.log('B', await b.getB())
  console.log('-------------------')

  await b.setB(60)
  console.log('A', await a.getA())
  console.log('B', await b.getB())
  console.log('-------------------')
}
/*
A 0n
B 0n
-------------------
A 42n
B 0n
-------------------
A 60n
B 61n
*/
// deploy();

const deploy2 = async () => {

  const A = await ethers.getContractFactory('A')
  const B1 = await ethers.getContractFactory('B1')

  const a = await A.deploy()
  await a.waitForDeployment()

  const b1 = await B1.deploy(await a.getAddress())
  await b1.waitForDeployment()

  console.log('A', await a.getA())
  console.log('B', await b1.getB())
  console.log('-------------------')

  await a.setA(42)
  console.log('A', await a.getA())
  console.log('B', await b1.getB())
  console.log('-------------------')

  await b1.setB(60)
  console.log('A', await a.getA())
  console.log('B', await b1.getB())
  console.log('-------------------')
}

/*
A 0n
B 0n
-------------------
A 42n
B 0n
-------------------
A 42n
B 61n
*/
deploy2()