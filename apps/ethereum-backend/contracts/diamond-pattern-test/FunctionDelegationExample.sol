// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract A {
  uint a;

  function setA(uint _a) public {
     a = _a;
  }

  function getA() public view returns (uint) {
    return a;
  }
}

contract B {
  uint a;
  address ContractA;

  constructor(address _A) {
    ContractA = _A;
  }

  function setB(uint _a) public {
     a = _a;
     // this is a type conversion address to contract
     A(ContractA).setA(_a + 1);
  }

  function getB() public view returns (uint) {
    return a;
  }
}

// Adding delegatecall function
contract B1 {
  uint b;
  address ContractA;

  constructor(address _A) {
    ContractA = _A;
  }

  function setB(uint _b) public returns (bool) {
     b = _b;
     (bool success, bytes memory bbb) = ContractA.delegatecall(
      abi.encodeWithSignature("setA(uint256)", _b + 1)
     );
     return success;
  }

  function getB() public view returns (uint) {
    return b;
  }
}