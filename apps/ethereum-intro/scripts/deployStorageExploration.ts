import "@nomicfoundation/hardhat-toolbox";
import { ethers } from 'hardhat'
import { A, B } from "../typechain-types"
import { AddressLike } from "ethers";

const printStorage = async (contract: any, name: any, count: number) => {
  const contractAddress = await contract.getAddress()
  for (let i = 0; i < count; ++i) {
    console.log(name, i, await ethers.provider.getStorage(contractAddress, i));
  }

}

const deploy = async () => {

  const A = await ethers.getContractFactory('A2')
  const B = await ethers.getContractFactory('B2')

  const a = await A.deploy()
  await a.waitForDeployment()

  const b = await B.deploy(await a.getAddress())
  await b.waitForDeployment()

  await printStorage(b, 'printing storage', 3)

}

deploy()