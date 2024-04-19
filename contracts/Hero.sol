// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import "hardhat/console.sol";
/*
We want to be able to generate random Hereos.
1. The user gets to put in their class of hereo on generation
 - classes: Mage, Healer, Barbarian
2. Class will not influence stats created, therefore getting an epic hero will be hard.
  - I want to be paid... 0.05 eth per hero!
  - I should be able to get my heroes I have generated.
  - Heroes should be stored on the chain.
  - stats are strength, health, intellect, magic, dexterity
  - stats are randomly generated
  - A scale of 1 - 18
3. The stats are randomly picked and their amplitude is randomly determined according to the following:
  - Stat 1 can max at 18
  - Stat 2 can max at 17
  - Stat 3 can max at 16
...
You could imagine these being an NFT
4. They are non divisable
*/

contract Hero {

  enum Class { Mage, Healer, Barbarian }

  mapping(address => uint[]) addressToHeroes;

  function generateRandom() public view returns (uint) {
    return uint(keccak256(abi.encodePacked(block.prevrandao, block.timestamp)));
  }

  function getHeroes() public view returns (uint[] memory) {
    return addressToHeroes[msg.sender];
  }

  function createHero() public payable {
    require(msg.value >= 0.05 ether, 'Please send more money');
   
  }

  
}
