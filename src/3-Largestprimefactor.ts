import * as R from 'ramda';

let num = 600851475143;

function factors(num : number) : Array<number> {
    let ret = [];
    for (let x = 1; x <= Math.sqrt(num); x ++) {
        if (num % x == 0) {
            ret = ret.concat([x, num / x]);
        }
    }
    return ret;
}

const isPrime = (x : number) => factors(x).length == 2;

const largest = R.reduce((x: number, y : number) => x > y ? x : y, -Infinity);

const solved = R.compose(largest, R.compose(R.filter(isPrime), factors));

console.log(R.applyTo(num, solved));