//reduce() – runs a reducer function on each array element to produce a single value.
// The reducer function takes two arguments: the accumulator (previousValue) and the current value (currentValue).
// The result of the reducer function is stored in the accumulator for the next iteration.
// If no initial value is provided, the first element of the array is used as the initial accumulator value, and the iteration starts from the second element.

let arr = [10, 20, 30, 40, 50];
let sum = arr.reduce((prev, curr) => {
    console.log(prev, curr);
    
    return prev + curr;
})
console.log(sum); // 150

//(method) Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number (+2 overloads)


let str = 'hello';
let rev = str.split('').reduce((prev, curr) => {
    console.log(prev, curr);
    return curr + prev; });
console.log('reverse for ${str} is ${rev}  '); // olleh

//class 37min