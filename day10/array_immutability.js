const a = 10;
// a = 15;

const arr = [10, 20];
arr[0] = 15;
arr.push(30);
delete arr[1];
console.log(arr);
// arr = [100, 200]; //cannt assign a new array to a const variable

// How to make an array immutable : Object.freeze()
// It prevents modification to existing elements and structure of the array.
let cars = ['Tata', 'Honda'];
Object.freeze(cars);
delete cars[1];
// cars.push('Maruti'); // object is not extensible
console.log(cars)// [ 'Tata', 'Honda' ]