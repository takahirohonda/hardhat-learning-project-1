import { ethers } from "ethers";

async function hasSigners(): Promise<boolean> {
    const metamask = window.ethereum;
    const signers = await (metamask.request({method: 'eth_accounts'}) as Promise<string[]>);
    return signers.length > 0;
}

async function requestAccess(): Promise<boolean> {
    const result = (await window.ethereum.request({ method: 'eth_requestAccounts' })) as string[];
    return result && result.length > 0;
}

async function getContract() {
    const address = process.env.HELLO_WORLD_CONTRACT_ADDRESS as string;

    if (!(await hasSigners()) && !(await requestAccess())) {
        console.log("You are in trouble, no one wants to play");
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(
        address,
        [
            "function hello() public pure returns(string memory)",
        ], // abi
        provider
    );

    console.log("We have done it, time to call");
    console.log(await contract.hello());
}

const incrementCounter = async () => {
    const counter = process.env.COUNTER_CONTRACT_ADDRESS
    if (!(await hasSigners()) && !(await requestAccess())) {
        console.log("You are in trouble, no one wants to play");
    }

    const provider = new ethers.BrowserProvider(window.ethereum);

    if (counter) {
        const contract = new ethers.Contract(
            counter,
            [
                "function count() public returns (uint)",
            ],
            provider
        )
        console.log(await contract.count());
        return await contract.getCounter()
    }
    
}


getContract();
incrementCounter();
