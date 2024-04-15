// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Counter {
  uint private counter;
  // This doesn't work. We need write and read separate
  // You cannot read with write function because it takes time to transaction to complete.
  // function count() public returns (uint) {
  //   counter++;
  //   console.log('counter', counter);
  //   return counter;
  // }

  function count() public {
    counter++;
    console.log('counter is now: ', counter);
  }

  function getCounter () public view returns (uint) {
    return counter;
  }
}