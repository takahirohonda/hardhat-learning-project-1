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

  event IncrementCounter(uint counter);

  function count() public {
    counter++;
    console.log('counter is now: ', counter);
    emit IncrementCounter(counter);
  }

  // unit is big number in js, unit 32 is just treated by a regular number in js.
  function getCounter() public view returns (uint) {
    return counter;
    // can cast but you'll run into a danger of overflow.
    // return unit32(counter); 
  }
}