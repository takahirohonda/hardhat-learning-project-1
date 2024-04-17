// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Gaming {
  function determineWinner(uint display, uint guess) public pure returns(bool) {
    if (guess == display) {
      return true;
    }
    return false;
  }
}