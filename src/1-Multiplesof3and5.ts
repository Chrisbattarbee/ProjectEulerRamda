import * as R from 'ramda';

const data = R.range(1, 1000);

const fil = R.filter((x : number) => x % 3 == 0 || x % 5 == 0);
const sum = R.reduce((x : number, y : number) => x + y, 0);

const final = R.compose(sum, fil);

console.log(final(data));
