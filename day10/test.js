let arr3 = [[10, 20] ,30, 31];
let arr4 = [...arr3]; // spread operator : shallow copy
// a new array is created, elements from old array are copied to new array
arr4.push(40, 50); //if you push anything to outer array array 3 is not impacted
arr4[2].push(32, 33);//if you push anything to inner array both arrays are impacted
console.log('arr3:: ', arr3); // [ 10, 20, [ 30, 31, 32, 33 ] ]
console.log('arr4:: ', arr4);// [ 10, 20, [ 30, 31, 32, 33 ], 40, 50 ]





/*
push to arr4
arr3= [10,20,[30,31]];  so i am getting even 32,33 here [30,31,32,33]
arr4= [10,20,[30,31,32,33]40,50]
*/