# Uint53 位操作

一个用于在 JavaScript 中对无符号 53 位整数执行位操作的实用工具库。该库提供了在遵循 JavaScript `Number` 限制的同时处理位操作的功能。

不要问为什么是`53`位，因为`Number.MAX_SAFE_INTEGER`是`9007199254740991`，也就是`53`位。

## 功能

- 将数字转换为 53 位二进制字符串，或从中还原。
- 对无符号 53 位整数执行位操作（`AND`、`OR`、`XOR`、`NOT`）。
- 在 53 位范围内对数字进行左移或右移操作。
- 提供用于切割二进制字符串的实用函数。

## 安装

您可以通过 npm 或 yarn 安装此库：

```bash
npm install @kuankuan/uint53
```

或

```bash
yarn add @kuankuan/uint53
```

## 使用方法

导入库并使用提供的函数：

```typescript
import Uint53BitOperations from '@kuankuan/uint53';

// 示例用法
const a = 42;
const b = 15;

console.log(Uint53BitOperations.uint53_and(a, b)); // 执行按位与操作
console.log(Uint53BitOperations.uint53_or(a, b)); // 执行按位或操作
console.log(Uint53BitOperations.uint53_xor(a, b)); // 执行按位异或操作
console.log(Uint53BitOperations.uint53_not(a)); // 执行按位取反操作
console.log(Uint53BitOperations.uint53_shift_left(a, 2)); // 左移操作
console.log(Uint53BitOperations.uint53_shift_right(a, 2)); // 右移操作
```

## API 参考

### 常量

- `JS_MAX_SAFE_INTEGER_LENGTH`：JavaScript 中的最大安全整数长度（53 位）。

### 函数

#### `to53binary(n: number): string`

将数字转换为 53 位二进制字符串。

#### `from53binary(n: string): number`

将 53 位二进制字符串转换回数字。

#### `slice_from_end(n: string, keep?: number): string`

从字符串末尾切割，保留指定数量的位。

#### `slice_from_start(n: string, keep?: number): string`

从字符串开头切割，保留指定数量的位。

#### `uint53_shift_left(n: number, shift: number): number`

将数字左移指定的位数。

#### `uint53_shift_right(n: number, shift: number): number`

将数字右移指定的位数。

#### `uint53_and(a: number, b: number): number`

对两个数字执行按位与操作。

#### `uint53_or(a: number, b: number): number`

对两个数字执行按位或操作。

#### `uint53_xor(a: number, b: number): number`

对两个数字执行按位异或操作。

#### `uint53_not(n: number): number`

对数字执行按位取反操作。

## 示例

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
} from '@kuankuan/uint53';

const a = 42;
const b = 15;

console.log(to53binary(a)); // 转换为二进制
console.log(from53binary('0000000000000000000000000000000000000000000000101010')); // 转换回数字
console.log(uint53_and(a, b)); // 执行按位与操作
console.log(uint53_or(a, b)); // 执行按位或操作
console.log(uint53_xor(a, b)); // 执行按位异或操作
console.log(uint53_not(a)); // 执行按位取反操作
console.log(uint53_shift_left(a, 2)); // 左移操作
console.log(uint53_shift_right(a, 2)); // 右移操作
```

## 许可证

本项目基于 MulanPSL-2.0 许可证授权。详情请参阅 [LICENSE](./LICENSE) 文件。
