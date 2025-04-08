const JS_MAX_SAFE_INTEGER_LENGTH = 53;
const max = (...args: number[]) => Math.max(...args);
const min = (...args: number[]) => Math.min(...args);
type Bit = '0' | '1';

function to53binary(n: number) {
  return slice_from_end(
    parseInt(n.toString()).toString(2).replace('-', '').padStart(JS_MAX_SAFE_INTEGER_LENGTH, '0')
  );
}
function from53binary(n: string) {
  if (n === '') {
    return 0;
  }
  return parseInt(slice_from_end(n.replace('-', '')), 2);
}
function slice_from_end(n: string, keep: number = JS_MAX_SAFE_INTEGER_LENGTH) {
  return n.slice(-keep);
}
function slice_from_start(n: string, keep: number = JS_MAX_SAFE_INTEGER_LENGTH) {
  return n.slice(0, keep);
}
function uint53_shift_left(n: number, shift: number) {
  return from53binary(to53binary(n) + '0'.repeat(shift));
}
function uint53_shift_right(n: number, shift: number) {
  return from53binary(to53binary(n).slice(0, -shift));
}
function _bitwise_binary_operation(
  a: number,
  b: number,
  op: (a_bit: Bit, b_bit: Bit, index: number) => Bit
) {
  const a_bin = to53binary(a);
  const b_bin = to53binary(b);
  return from53binary(
    new Array(53).map((_, i) => op(a_bin[i] as Bit, b_bin[i] as Bit, i)).join('')
  );
}
function _bitwise_unary_operation(n: number, op: (bit: Bit, index: number) => Bit) {
  const n_bin = to53binary(n);
  return from53binary(new Array(53).map((_, i) => op(n_bin[i] as Bit, i)).join(''));
}
function uint53_and(a: number, b: number) {
  return _bitwise_binary_operation(a, b, (a_bit, b_bit) =>
    a_bit === '1' && b_bit === '1' ? '1' : '0'
  );
}
function uint53_or(a: number, b: number) {
  return _bitwise_binary_operation(a, b, (a_bit, b_bit) =>
    a_bit === '1' || b_bit === '1' ? '1' : '0'
  );
}
function uint53_xor(a: number, b: number) {
  return _bitwise_binary_operation(a, b, (a_bit, b_bit) => (a_bit !== b_bit ? '1' : '0'));
}
function uint53_not(n: number) {
  return _bitwise_unary_operation(n, (bit) => (bit === '1' ? '0' : '1'));
}

const Uint53BitOperations = {
  JS_MAX_SAFE_INTEGER_LENGTH,
  max,
  min,
  to53binary,
  from53binary,
  slice_from_end,
  slice_from_start,
  uint53_shift_left,
  uint53_shift_right,
  uint53_and,
  uint53_or,
  uint53_xor,
  uint53_not,
};
export default Uint53BitOperations;
export {
  JS_MAX_SAFE_INTEGER_LENGTH,
  max,
  min,
  to53binary,
  from53binary,
  slice_from_end,
  slice_from_start,
  uint53_shift_left,
  uint53_shift_right,
  uint53_and,
  uint53_or,
  uint53_xor,
  uint53_not,
};
