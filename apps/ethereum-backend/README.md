# 1. Right & Left shift operators

`>>`: It takes two integers and moves the bits of the first operand to the right by a number of positions specified by the second operand.

```js
a = 8; // a is 1000 in binary
b = a >> 1; // b is 0100 in binary, which is 4 in decimal
```

`<<`: It takes two integers and moves the bits of the first operand to the left by a number of positions specified by the second operand.

```js
a = 2; // a is 10 in binary
b = a << 1; // b is 100 in binary, which is 4 in decimal
```

2. Bitwise comparison operators

`&` -> bitwise And operator.

```js
a = 5; // a is 101 in binary
b = 3; // b is 011 in binary
c = a & b; // c is 001 in binary, which is 1 in decimal
```

`|=` operator is a bitwise OR assignment operator. It performs a bitwise OR operation between two integers and assigns the result to the left operand.

```js
a = 5; // a is 101 in binary
b = 3; // b is 011 in binary
a |= b; // a is now 111 in binary, which is 7 in decimal
```

Haven't really worked out yet...

```js

stats[0] = 2;
stats[1] = 7;
stats[2] = 12;
stats[3] = 17;
stats[4] = 22;

uint len = 5;
do {
      // 1st loop: modulo of 5 will give us 0, 1, 2, 3, 4
      // 2nd loop: modulo of 4 say give us 2
      uint pos = generateRandom() % len;

      // 1st loop: modulo of 19 give us 0 ~ 18 random number
      // 2nd loop, 2 again
      uint value = generateRandom() % (13 + len) + 1;

      // 1st loop, say hero is 00. and value is 2 (10). Pos = 1
      // 0000 00 | 10 -> 10 0000000 = 10000000 00

      // 2nd loop, pos = 2, value 2, 10000000 00 | 10 000000000000 =
      hero |= value << stats[pos];
      len--;
      // stats[4] = stats[4] (22)
      stats[pos] = stats[len];

    } while (len > 0);
```

### Notes

01100 01100 01100 01110 01 we right shift. This drops the first 2 digits.

00 01100 01100 01100 01110

0x1F is 11111

Then we do bitwise comparison

00 01100 01100 01100 01110
00 00000 00000 00000 11111

This results in 00 00000 000000 00000 01110 `parseInt('00000000000000000001110', 2) = 14`

```js
// strength
(hero >> 2) & 0x1f;
```

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
