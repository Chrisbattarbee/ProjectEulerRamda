import * as R from 'ramda';


let isDivisibleByAll20 = (x : number) => R.range(2, 20).map(y => x % y == 0).reduce(R.and, true);

let smallestMultiple = () => {
    let x = 20;
    while (true)  {
        if (isDivisibleByAll20(x)) {
            break;
        }
        x += 20;
    }
    return x;
};

console.log(smallestMultiple());


