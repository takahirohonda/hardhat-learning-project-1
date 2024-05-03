# Assembly

`assembly` is a keyword that allows you to write low-level assembly code within your Solidity contracts. Assembly blocks give you direct access to the Ethereum Virtual Machine (EVM) instructions, providing fine-grained control over contract behavior and efficiency optimizations that may not be possible with higher-level Solidity code.

`:=` is used to assign a value to a variable or a storage slop within the assembly block.

```js
assembly {
  // Assign 42 to the variable x
  x := 42
}

assembly {
  // Assign the value stored at slot 0 to variable y
  y := sload(0)
}
```

Example from `AppStorage.sol`

```js
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
```
