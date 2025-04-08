# Uint53 Bit Operations

A utility library for performing bitwise operations on unsigned 53-bit integers in JavaScript.

Don't ask me why it's `53`. Because `Number.MAX_SAFE_INTEGER` is `9007199254740991`, which is `53` bits.

## Translation

[Chinese](./README.zh-cn.md)

## Features

- Convert numbers to and from 53-bit binary strings.
- Perform bitwise operations (`AND`, `OR`, `XOR`, `NOT`) on unsigned 53-bit integers.
- Shift numbers left or right within the 53-bit range.
- Utility functions for slicing binary strings.

## Installation

You can install this library via npm or yarn:

```bash
npm install uint53-bit-operations
```

or

```bash
yarn add uint53-bit-operations
```

## Usage

Import the library and use the provided functions:

```typescript
import Uint53BitOperations from 'uint53-bit-operations';

// Example usage
const a = 42;
const b = 15;

console.log(Uint53BitOperations.uint53_and(a, b)); // Perform bitwise AND
console.log(Uint53BitOperations.uint53_or(a, b)); // Perform bitwise OR
console.log(Uint53BitOperations.uint53_xor(a, b)); // Perform bitwise XOR
console.log(Uint53BitOperations.uint53_not(a)); // Perform bitwise NOT
console.log(Uint53BitOperations.uint53_shift_left(a, 2)); // Shift left
console.log(Uint53BitOperations.uint53_shift_right(a, 2)); // Shift right
```

## API Reference

### Constants

- `JS_MAX_SAFE_INTEGER_LENGTH`: The maximum safe integer length in JavaScript (53 bits).

### Functions

#### `to53binary(n: number): string`

Converts a number to a 53-bit binary string.

#### `from53binary(n: string): number`

Converts a 53-bit binary string back to a number.

#### `slice_from_end(n: string, keep?: number): string`

Slices a binary string from the end, keeping the specified number of bits.

#### `slice_from_start(n: string, keep?: number): string`

Slices a binary string from the start, keeping the specified number of bits.

#### `uint53_shift_left(n: number, shift: number): number`

Shifts a number left by the specified number of bits.

#### `uint53_shift_right(n: number, shift: number): number`

Shifts a number right by the specified number of bits.

#### `uint53_and(a: number, b: number): number`

Performs a bitwise AND operation on two numbers.

#### `uint53_or(a: number, b: number): number`

Performs a bitwise OR operation on two numbers.

#### `uint53_xor(a: number, b: number): number`

Performs a bitwise XOR operation on two numbers.

#### `uint53_not(n: number): number`

Performs a bitwise NOT operation on a number.

## Example

```typescript
import {
  to53binary,
  from53binary,
  uint53_and,
  uint53_or,
  uint53_xor,
  uint53_not,
  uint53_shift_left,
  uint53_shift_right,
} from 'uint53-bit-operations';

const a = 42;
const b = 15;

console.log(to53binary(a)); // Convert to binary
console.log(from53binary('0000000000000000000000000000000000000000000000101010')); // Convert back to number
console.log(uint53_and(a, b)); // Perform bitwise AND
console.log(uint53_or(a, b)); // Perform bitwise OR
console.log(uint53_xor(a, b)); // Perform bitwise XOR
console.log(uint53_not(a)); // Perform bitwise NOT
console.log(uint53_shift_left(a, 2)); // Shift left
console.log(uint53_shift_right(a, 2)); // Shift right
```

## License

This project is licensed under the MulanPSL-2.0 License. See the [LICENSE](./LICENSE) file for details.
