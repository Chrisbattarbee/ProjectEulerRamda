import * as R from 'ramda';

function fib(n) {
    const state = [1, 2];

    R.range(2, n).forEach(x => state.push(state[x - 1] + state[x - 2]));
    return state[n - 1];
}


var sum = 0;
var x = 2;

while (true) {
    let fibx = fib(x);

    if (fibx >= 4000000) {
        break;
    }

    if (fibx % 2 == 0) {
        sum += fibx;
    }
    x += 1;
}

console.log(sum);