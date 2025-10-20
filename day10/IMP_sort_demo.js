
//sort(): 
//if you want numaric sort dont use plain sort method, you have to pass callback function.

let arr1 = [20, 50, 10, 40, 30];
arr1.sort();
console.log(arr1);// [10, 20, 30, 40, 50] string type sort

let cars = ['Tata', 'Honda', 'Maruti', 'Audi'];
cars.sort();
console.log(cars); // [ 'Audi', 'Honda', 'Maruti', 'Tata' ] alphabetical sort

let numArr = [10, 9, 7, 8, 91, 92, 93, 6, 5, 101, 102, 103, 104, 105];
numArr.sort(); // string type sort same as above
console.log(numArr); // [ 101, 102, 103, 104, 105, 5, 6, 7, 8, 9, 10, 91, 92, 93 ]

numArr.sort((a, b) => a - b); // Numeric sort
console.log(numArr);// [ 5, 6, 7, 8, 9, 10, 91, 92, 93, 101, 102, 103, 104, 105 ]
// use callback function to sort in ascending order

//A callback function is a function that you pass as an argument to another function — and it gets called back (executed) inside that function.

/*Long form:
function(a, b) {
  return a - b;
}

Short arrow form:
(a, b) => a - b
Both mean the same thing here.*/