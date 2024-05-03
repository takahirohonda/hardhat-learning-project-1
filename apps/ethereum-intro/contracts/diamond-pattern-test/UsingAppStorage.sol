// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import 'hardhat/console.sol';
import './AppStorage.sol';

// Refactoring StorageExploration.sol code with the AppStorage for Diamond pattern.
contract A3 {
  AppStorage s;

  constructor() {
    s = Storage.get();
  }

  function setA(uint _a) public {
    s.a = _a;
  }

  function getA() public view returns (uint) {
    return s.a;
  }
}

contract B3 {

  address ContractA;
  AppStorage s;

  constructor(address _A) {
    ContractA = _A;
    s = Storage.get();
  }

  function setB(uint _b) public returns (bool) {
     s.b = _b;
     (bool success, bytes memory bbb) = ContractA.delegatecall(
      abi.encodeWithSignature("setA(uint256)", _b + 1)
     );
     return success;
  }

  function getB() public view returns (uint) {
    return s.b;
  }
}