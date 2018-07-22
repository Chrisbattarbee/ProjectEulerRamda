import * as R from 'ramda';
import {isPrime} from "./3-Largestprimefactor";

let answer = R.range(2, 2000001).filter(isPrime).reduce(R.add, 0);
console.log(answer);
