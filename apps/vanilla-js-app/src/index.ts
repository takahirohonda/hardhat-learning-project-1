import { ethers } from 'ethers';

import Counter from '../../ethereum-intro/artifacts/contracts/Counter.sol/Counter.json';

async function hasSigners(): Promise<boolean> {
  const metamask = window.ethereum;
  const signers = await (metamask.request({
    method: 'eth_accounts',
  }) as Promise<string[]>);
  return signers.length > 0;
}

async function requestAccess(): Promise<boolean> {
  const result = (await window.ethereum.request({
    method: 'eth_requestAccounts',
  })) as string[];
  return result && result.length > 0;
}

/*
 ** This is use for `HelloWorld.sol` contract.
 ** We can deploy the contract and check to see if we can interact with the ethereum backend.
 */
async function getHelloWorldContract() {
  const address = process.env.HELLO_WORLD_CONTRACT_ADDRESS as string;

  if (!(await hasSigners()) && !(await requestAccess())) {
    console.log('You are in trouble, no one wants to play');
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const helloContract = new ethers.Contract(
    address,
    ['function hello() public pure returns(string memory)'], // abi
    provider,
  );

  console.log('We have done it, time to call');
  console.log(await helloContract.hello());
  createHelloElement(await helloContract.hello());
}

/*
 * This is used for `Counter.sol` contract.
 */
const incrementCounter = async () => {
  const contractAddress = process.env.COUNTER_CONTRACT_ADDRESS;

  console.log(`Checking contract address: ${contractAddress}`);
  if (!(await hasSigners()) && !(await requestAccess())) {
    console.log('You are in trouble, no one wants to play');
  }

  const provider = new ethers.BrowserProvider(window.ethereum);

  // troubleshooting...
  const signer = await provider.getSigner();

  console.log(`Checking signer: ${JSON.stringify(signer)}`);

  const permissions = await window.ethereum.request({
    method: 'wallet_getPermissions',
  });
  console.log('MetaMask permissions:', permissions);

  if (contractAddress && signer) {
    // Note that to reference a contract, we use (1) Address and (2) Interface.
    // We can get the code, but to interact with a contract,
    // we just use and address and interface.
    const counterContract = new ethers.Contract(
      contractAddress,
      // [
      //     "function count() public",
      //     "function getCounter() public view returns (uint)",
      //     "event IncrementCounter(uint counter)"
      // ],
      // The Contract Application Binary Interface (ABI) can be imported
      Counter.abi,

      signer,
    );
    console.log(`checking ABI: ${JSON.stringify(Counter.abi)}`);

    const button = document.createElement('button');
    const btnText = document.createTextNode('Increment count');
    button.appendChild(btnText);
    button.onclick = async () => {
      await counterContract.count();
      // If we make contract to emit event, we don't need to call getCounter and wait
      //   const counterOutput = await counterContract.getCounter();
      //   createCounterElement(counterOutput);
    };

    // Listening to the event.
    counterContract.on(counterContract.filters.IncrementCounter(), (event) => {
      console.log(`event emitted: ${event.args.counter}`);
      createCounterElement(event.args.counter);
    });

    document.querySelector('.counter-display')?.appendChild(button);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // getHelloWorldContract();
  incrementCounter();
});

function createCounterElement(count: string) {
  const newH3 = document.createElement('h3');
  const countText = document.createTextNode(count);
  newH3.appendChild(countText);
  document.querySelector('.counter-display')?.appendChild(newH3);
}

function createHelloElement(message: string) {
  const newH2 = document.createElement('h2');
  const messageText = document.createTextNode(message);
  newH2.appendChild(messageText);
  document.querySelector('.message-display')?.appendChild(newH2);
}
