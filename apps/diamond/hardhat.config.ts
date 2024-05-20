
// We are going to move from hardhat waffle...
// https://hardhat.org/hardhat-runner/docs/advanced/migrating-from-hardhat-waffle
// require('@nomiclabs/hardhat-waffle')

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task('accounts', 'Prints the list of accounts', async () => {
//   const accounts = await ethers.getSigners()

//   for (const account of accounts) {
//     console.log(account.address)
//   }
// })

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter"

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  gasReporter: {
    enabled: (process.env.REPORT_GAS) ? true : false
  },
  networks: {
    hardhat: {
      chainId: 31337, // it's the default chain id, doesn't need to add it.
    }
  }
};

export default config;
