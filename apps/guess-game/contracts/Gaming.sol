// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

/*
* block.number -> Ethereum miners are always confirming transactions, writing them to blocks,
* then adding those blocks to the blockchain. This is the current block number from that operation.
* used to keep track of the block currently being minted.
* block.timestamp -> the timestamp for the current block.
* msg.value -> the amount of currency sent along with the message.
* msg.sender -> Ethereum address of the current caller.
*/

contract Gaming {

  address public owner;
  bool public online;

  struct Player {
    address player;
    string playerName;
    uint playerBalance;
    uint wins;
    uint losses;
  }

  mapping (uint => Player) public players;

  constructor() payable {
    // This makes whoever deploys the game, own it.
    owner = payable(msg.sender);
    online = true;
    players[0] = Player(msg.sender, 'Test Player', 0, 1, 2);
  }

  function winOrLose(uint display, bool guess, uint wager) external payable returns (bool) {
    require(online == true);
    require(msg.sender.balance > msg.value, "Insufficient funds");
    
    uint mysteryNumber_ =  mysteryNumber();

    bool isWinner = determineWinner(mysteryNumber_, display, guess);
    if (isWinner == true) {
        /* Player won */
        payable(msg.sender).transfer(wager * 2);
        return true;
    } else if (isWinner == false) {
        /* Player lost */
        return false;
    }
    return false;
  
  }

  function mysteryNumber() internal view returns (uint) {
    uint randomNumber = uint(blockhash(block.number-1))%10 + 1;
    return randomNumber;
  }

  function determineWinner(uint number, uint display, bool guess) public pure returns(bool) {
    if (guess == true) {
      if (number > display) {
        return true;    
      }
    } else if (guess == false) {
      if (number > display) {
        return false;
      }
    }
    return false;
  }

  function hello() public pure returns (string memory) {
    return "Hello World";
  }
}