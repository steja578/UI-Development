/*find() and filter() method difference: 
// find() returns the first element that satisfies the condition, 
// while filter() returns all elements that satisfy the condition as an array.
*/


let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
]

// Pick the first female employee in the list
// find() returns undefined if no match found
let first_female_emp = employees.find((emp) => emp.gender === 'female');
console.log(first_female_emp);

// at what index the first female employee is present
let first_female_emp_ind = employees.findIndex((emp) => emp.gender === 'female');
console.log(first_female_emp_ind);

// Pick the last female employee in the list
let last_female_emp = employees.findLast((emp) => emp.gender === 'female');
console.log(last_female_emp);

// at what index the last female employee is present
let last_female_emp_ind = employees.findLastIndex((emp) => emp.gender === 'female');
console.log(last_female_emp_ind);

// pick all the female employees
// filter() alway returns an empty array if no match found
let all_female_emp = employees.filter((emp) => emp.gender === 'female');
console.log(all_female_emp);
