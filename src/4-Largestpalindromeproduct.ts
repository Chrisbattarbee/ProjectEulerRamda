import * as R from 'ramda';

let isPalindrome = (x : number) => isPalindromePrime(x.toString());

function isPalindromePrime(num : string) {

    if (num.length <= 1) {
        return true;
    }

    let first = parseInt(num[0]);
    let last = parseInt(num[num.length - 1]);

    if (first != last) {
        return false;
    }

    return isPalindromePrime(num.slice(1, num.length - 1));
}

let nums = R.flatten(R.range(100, 1000).map(x => R.range(100, 1000).map(y => x * y)));

let max = R.reduce(R.max, -Infinity);

let solution = R.compose(max, R.flip(R.applyTo) (R.filter(isPalindrome)));

console.log(solution(nums));
