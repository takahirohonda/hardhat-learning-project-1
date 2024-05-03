**Hexadecimal**

It always starts with `0x`. This is a 16 bit system. Base 16. Binary is base 2. Each hexadecimal digit represents four binary digits (bits), so two hexadecimal digits can represent a byte (8 bits). The digits are 0-9 followed by the letters A-F, where A represents 10, B represents 11, and so on up to F, which represents 15.

`0x45` -> 4 x 16 to the one + 5 x 16 to the zero. this is 64 + 5 = 69. That's why it has a to f.

`0x7FFF` -> `15 + 15*16**1 + 15*16**2 + 7*16**3 = 32767`

`0x1F` -> `15 + 1*16**1 = 31` Converting this to binary is: `parseInt(31).toString(2)`, hexadecimal is `parseInt(31).toString(16)`

Convert hexadecimal to decimal is by using the radix argument in parseInt -> `parseInt('1F', 16)`

`FF` in hex is equal to `(15 x 161) + (15 x 160) = 240 + 15 = 255` in decimal.

**Binary**

compute 101110 into base 10 number.

Calculated as `2**0*0 + 2**1*1 + 2**2*1 + 2**3*1 + 2**4*0 + 2**5*1`

```bash
1 0 1 1 1 0
32 8 4 2 = 46
```

Convert 23 into binary.

```bash
23 = 16 + 4 + 2 + 1

16 8 4 2 1
1 0 1 1 1
```

```
<<3 <- left shift binary adding 0 0 0.
```

| boolean | bitwise | Meaning |
| ------- | ------- | ------- |
| &&      | &       | And     |
| !       | ~       | Not     |

# Bitwise operation

```ts
let a = 5; // binary: 101
let b = 3; // binary: 011
console.log(a | b); // Outputs: 7 (binary: 111)
```

a bitwise XOR operation: each bit in the result is set to 1 if the corresponding bits of the two operands are different, and 0 otherwise.

```ts
a = 1001;
b = 0101;

a = a ^ b; // a = 1100
b = a ^ b; // b = 1001
a = a ^ b; // a = 0101 -> we can swap the value of a and b without creating a temporary variable.
```

```ts
// does a contain b?
a & (b === b);

a = 1001;
b = 0101;

a & b; // 0011 -> false

a = 1100;
b = 0101;

a & b; // 0101 -> true
```
