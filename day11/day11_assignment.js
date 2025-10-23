/*
let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

1. declare array of employees & sort them in ascending order (empId)

2. declare array of employees & sort them in ascending order by name.

3. declare array of employees & filter the employees whose sal>6000;

4. declare array of employees & increase sal of every employee by 500;

5. declare array of employees & add "comp:ibm" to every employee;

6. convert array of letters to array of words
		const inputArr = [ 
				'b', 'a', 'k', 'e', '',
				'c', 'a', 'k', 'e', '',
				'e', 'a', 't'
				];
	   output = ['bake','cake','eat'];
	   
7. add Dept info for each employee
    employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
				{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
	departments = [{ eId: 101, dept: "sales" },
				{ eId: 104, dept: "marketing" }]

8. declare array of employees & groupBy employees-name
    sample output: {
		'sanjay' : [{},{}],
		'alok' : [{}]
	}

9. intersection of 2 number arrays

10. WAP to print the occurance of each elements 
    input = [10,20,30,40,50,10,30,50]
	output = {10:2, 20:1, 30:2 , 40:1, 50:2}

*/

let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

 /* 
  employees.sort(function (a,b)
{
	return a.eId - b.eId;
});
console.log(employees);

/*
//2.sorting employess by name asec
employees.sort(function (a,b)
{
	if(a.name < b.name)
		return -1;
	if(a.name > b.name)
		return 0;
});
console.log(employees);

*/

/*
//filtering employees whose salary > 6000

let highSalary = employees.filter(function(emp)
{
	return emp.salary>6000;
});
console.log(highSalary);
*/


/*
//4. increase salary of every employee by 500

let updatedSal = employees.map(function(emp)
{
	emp.sal = emp.sal + 500;
	return emp;
});
console.log(updatedSal);

*/

/*
//5. adding company : ibm to every employee in the array

let addCompany = employees.map(function(emp)
{
emp.comp = "ibm";
return emp;
});

console.log(addCompany);


*/

/*
//6. converting array of letters into words

const inputArray = [ 'b', 'a', 'k', 'e', '',
				'c', 'a', 'k', 'e', '',
				'e', 'a', 't'];

	let words = [];
	let word = "";

	for(let i=0; i<inputArray.length;i++)
	{
		if(inputArray[i] !== '')
		{
			word = word + inputArray[i];
		}
		else {
			if(word !=="")
			{
				words.push(word);
				word = "";
			}
		}
	}

	if (word !== "")
	{
		words.push(word);
	}
				console.log(words);

	*/
/*
	// 7.adding the department for each employee

	let employees2 = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
				{ eId: 104, name: "reena", sal: 8000, gender: "female" }];

	let departments = [{ eId: 101, dept: "sales" },
				{ eId: 104, dept: "marketing" }];

	for(let emp of employees2)
	{
		for ( let dept of departments)
		{
			if(emp.eId === dept.eId)
			{
				emp.dept = dept.dept;
			}
		}
	}
console.log(employees2);
*/

//9. Intersection of 2 number arrays
/*
let array1 = [1,2,3,4,5];
let array2 = [3,4,5,6,7];

let intersection = array1.filter(function(num)
{
	return array2.includes(num);
});
console.log(intersection);
*/

10.
let input = [10,20,30,40,50,10,30,50];

let count = input.reduce((acc, num) =>
{
	acc[num] = (acc[num] ||0) +1;
	return acc;
});

console.log(count);