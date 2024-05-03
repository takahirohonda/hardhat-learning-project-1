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
