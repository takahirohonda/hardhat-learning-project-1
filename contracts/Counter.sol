// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Counter {
  uint private counter;
  function count() public returns (uint) {
    counter++;
    console.log('counter', counter);
    return counter;
  }

  function getCounter () public view returns (uint) {
    return counter;
  }
}