// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract GasFeeTest {

  uint private a;
  uint private b;
  uint private c;

  function incrementOnce() public {
    a++;
  }

  function incrementTwice() public {
    a++;
    b++;
  }

  function incrementThrice() public {
    a++;
    b++;
    c++;
  }

  function addVariables() public {
    c = a + b;
  }
}