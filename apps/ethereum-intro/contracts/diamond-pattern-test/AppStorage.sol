// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

struct AppStorage {
  uint a;
  uint b;
  uint8 c;
  uint8 d;
  address ContactA;
}

library Storage {
  bytes32 constant KEY = keccak256('my-storage-location');
  function get() internal pure returns (AppStorage storage s) {
    bytes32 k = KEY;
    assembly {
    // This loads the value from the storage slot identified by KEY into the s variable.
    // := used to assign a value to a variable or a storage slot within the assembly block.
      s.slot := k
    }
  }
}
