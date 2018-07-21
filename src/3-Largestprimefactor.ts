import * as R from 'ramda';

let num = 600851475143;

let max = R.reduce((x : number, y : number) => x > y ? x : y);

let primeCandidates = (x : number) =>
    R.range(1, Math.sqrt(x))
    .map(x => [x, num % x == 0])
    .filter(x => x[1])
    .map(x => x[0]);

console.log(primeCandidates(num));

let prime = R.compose(
    max
    ,R.compose(
    R.map(x => x[0])
    ,R.compose(
    R.filter(x => x[1] == 1),
    R.map((x : number) => [x, primeCandidates(x)])
)));

console.log(prime(primeCandidates((num))));
