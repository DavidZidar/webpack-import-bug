import memoize from "memoizee";

const memoized = memoize(number => number * 2);

console.log(memoized(2));
