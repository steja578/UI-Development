/* split() → turns a string → array
It splits a string into parts, using a separator (like space, comma, etc.).
split() breaks the string wherever it finds the separator and returns an array of those parts.*/

const text = "apple,banana,grape";
const fruits = text.split(",");  // split by comma
console.log(fruits); // ["apple", "banana", "grape"]

const sentence = "I love JavaScript";
const words = sentence.split(" ");  // split by space
console.log(words); // ["I", "love", "JavaScript"]


/*join() → turns an array → string
It joins all array elements into a single string, using the separator you give.
join() takes all the elements of the array and combines them into one string, placing the separator between each element.*/
const fruits = ["apple", "banana", "grape"];
const text = fruits.join(", ");  // join with comma and space
console.log(text); // "apple, banana, grape"


/*| Method    | Works On | Output Type | Example                              |
| --------- | -------- | ----------- | ------------------------------------ |
| `split()` | String   | Array       | `"a,b,c".split(",") → ["a","b","c"]` |
| `join()`  | Array    | String      | `["a","b","c"].join(",") → "a,b,c"`  |
*/

// Example of reversing words in a sentence using split() and join()
/*const sentence = "I love coding"; //
const reversed = sentence.split(" ").reverse().join(" "); // Split into words, reverse the array, join back
console.log(reversed); // "coding love I"
*/