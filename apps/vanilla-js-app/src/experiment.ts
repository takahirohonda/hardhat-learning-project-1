import { ethers } from 'ethers'
import detectEthereumProvider from '@metamask/detect-provider';

const transferEther = async () => {


  const providerFromWindowEthereum = window.ethereum

  if (providerFromWindowEthereum.isConnected()) {
    console.log('This is provider from Window Ethereum')
    console.log(providerFromWindowEthereum)
  }

  // const providerWithEthersLib = new ethers.providers.W
  const providerWithMetamaskPackage = await detectEthereumProvider();
  if (providerWithMetamaskPackage) {
    console.log('This is provider from metamask lib detectEthereumProvider')
    console.log(providerWithMetamaskPackage)
    // request() method is the JSON-PRC API method name: https://docs.metamask.io/wallet/reference/json-rpc-api/)
  //https://docs.metamask.io/wallet/reference/provider-api/
    // providerWithMetamaskPackage?.request({ // not sure why request doesn't exist...
   
    // })
  }
}

transferEther()