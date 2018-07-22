import * as R from 'ramda';

let sumOfSquares100 = R.range(1, 101).map(x => x * x).reduce(R.add, 0);

let sum100 = R.range(1, 101).reduce(R.add, 0);
let sum100Squared = sum100 * sum100;

console.log(sum100Squared - sumOfSquares100);