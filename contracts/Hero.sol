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

  // Mapping to store the integer value corresponding to each enum
  mapping(uint => Class) public classByIndex;

  constructor() {
      // Initialize the mapping with the enum values
      classByIndex[0] = Class.Mage;
      classByIndex[1] = Class.Healer;
      classByIndex[2] = Class.Barbarian;
  }

  mapping(address => uint[]) addressToHeroes;

  function getClassByIndex(uint index) public view returns (Class) {
        return classByIndex[index];
    }
  function generateRandom() public virtual view returns (uint) {
    return uint(keccak256(abi.encodePacked(block.prevrandao, block.timestamp)));
  }

  function getHeroes() public view returns (uint[] memory) {
    return addressToHeroes[msg.sender];
  }

  function getStrength (uint hero) public pure returns (uint) {
    return (hero >> 2) & 0x1F;
  }

  function getHealth (uint hero) public pure returns (uint) {
    return (hero >> 7) & 0x1F;
  }

  function getDex (uint hero) public pure returns (uint) {
    return (hero >> 12) & 0x1F;
  }

    function getIntellect (uint hero) public pure returns (uint) {
    return (hero >> 17) & 0x1F;
  }

    function getMagic (uint hero) public pure returns (uint) {
    return (hero >> 22) & 0x1F;
  }

  // Passing Enum (Class class) in the argument doesn't work.
  function createHero(uint index) public payable {
    require(msg.value >= 0.05 ether, 'Please send more money');

    // stats are strenth, health, dexterity, intellect, magic
    uint[] memory stats = new uint[](5);
    stats[0] = 2;
    stats[1] = 7;
    stats[2] = 12;
    stats[3] = 17;
    stats[4] = 22;

    uint len = 5;
    // casting hero to uint, 0, 1, 10, 11 100 (become bits)
    uint hero = uint(getClassByIndex(index)); 

    do {
      uint pos = generateRandom() % len;
      uint value = generateRandom() % (13 + len) + 1;

      hero |= value << stats[pos];
      len--;
      stats[pos] = stats[len];

    } while (len > 0);

    addressToHeroes[msg.sender].push(hero); 
  }
}

/*
*
* [ S, H, D, I, M ]
* randomNumber % (13 + len) + 1
*/