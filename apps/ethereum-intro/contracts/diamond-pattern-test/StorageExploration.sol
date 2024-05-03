// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract A2 {
  uint a;

  function setA(uint _a) public {
     a = _a;
  }

  function getA() public view returns (uint) {
    return a;
  }
}

contract B2 {
  // in ethereum, each variable takes up a 256 bytes memory slot if they are uint.
  uint b; // This takes up the entire 256 bytes (2 to the 256 - 1)
  uint8 c; // This is only 8 byte
  uint8 d;  // This is also 8 byte
  address ContractA; // so, ethereum compact this contract address to be stored in one of those uint 8 memeory slot.

  constructor(address _A) {
    ContractA = _A;
    b = 4;
    c = 0x45;
    d = 0x5f;
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

/*
printing storage 0 0x0000000000000000000000000000000000000000000000000000000000000004
printing storage 1 0x00000000000000000000610178da211fef7d417bc0e6fed39f05609ad7885f45
printing storage 2 0x0000000000000000000000000000000000000000000000000000000000000000

storage 1 has the address for A2: 0x610178da211fef7d417bc0e6fed39f05609ad788 plus variabe b and c
because they are uint 8 and ethereum make it compact.
*/