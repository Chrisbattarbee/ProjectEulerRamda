import * as R from 'ramda';
import * as Tuple from 'named-tuple';

let double = Tuple('double', 'a', 'b');

let verify = (a : number, b : number, c : number) : boolean => c >= 0 && a < b && b < c && (a * a) + (b * b) == (c * c);

let data = R.range(1, 1001).map(a => R.range(1, 1001 - a).map(b => new double(a, b)));

let answer = R.flatten(data).filter(x => verify(x.a, x.b, 1000 - x.a - x.b))[0];
console.log(answer.a * answer.b * (1000 - answer.a - answer.b))
