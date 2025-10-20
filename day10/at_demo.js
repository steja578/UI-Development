/*at() - takes an integer and returns the item at that index.allows negative index aswell.

indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.

includes(value) – returns true if the array has value, otherwise false.

*/

let cars = ['Tata', 'Honda', 'Maruti', 'Hyundai'];
console.log(cars.at(1)); // Honda

console.log(cars.includes('Maruti')); // true
console.log(cars.includes('Mahindra')); // false