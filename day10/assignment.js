/*  1. Print the occurence of each character in a string
   input: 'entertainment'
   output: { e:3 , n:2 , t: 3 ....}

2. Print the character which is repeated max no of times
   input: 'hello world'
   output : 'L'

3. Swap The case for Each Character in a string 
   input: 'Hello World'
   output: 'hELLO wORLD'

4. Print the Abbreviation for a string
   input: 'Rabindra Nath Tagore'
   output: 'R. N. tagore'

5. Shift the characters by the next character
   input:  'abcxyz'
   output: 'bcdyza'

6. Ask user to enter a sequence of parantheses and validate 
   input: '([{ }])'
   output : true

7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
    input: 'ABC'
    output: ABC , ACB , BCA, BAC ...

8. Ask user to enter a number and convert that to Roman value
   input:   9    12
   output : IX   XII

9. Ask user to enter a roman string and convert that to integer value
   input:   IX    XII
   output : 9     12

10. Ask user to enter a  string , and display in below format
    input: aaabbc
    output : a3b2c1
*/
/*
1.
const str = 'entertainment';
const Count = {};
for (let char of str) {
    if(Count[char]) 
{
    Count[char] = Count[char] + 1;
}
else 
{
    Count[char]=1;
}
}

console.log(Count);
/*
 
2./*
const str = "hello world".toLowerCase();
const freq = {};
for (let char of str)
{
    if(char !== "")
    {
        if(freq[char])
        {
            freq[char] = freq[char] + 1;
        }
        else 
        {
            freq[char] =1;

        }
        }
    }
let maxChar ="";
let maxCount =0;
for (let char in freq)
{
    if (freq[ch]>maxCount)
    {
        maxCount = freq[ch];
        maxChar = ch;
    }
}
console.log(maxChar.toUpperCase());
*/ 
/*
3.
const str = "Hello World";
let swapped = "";

for (let char of str)
{
if(char === char.toUpperCase());
{
swapped += char.toLowerCase();
}
else
{
    swapped += char.toUpperCase();
}
}


console.log(swapped);
/*

/*
4.
const fullName = "Madala Bharath";
const parts = fullName.split("");

const abbreviation = parts.map((word, index) =>{
    if(index < parts.length -1)
    {
        return word[0].toUpperCase() + ".";
    }
    else {
        return word.toLowerCase();
    }
}).join(" ");

console.log(abbreviation);



/*
5.
const input = "abcxyz";
let shifted = "";
for(let char of input)
{
    if (char ==="z")
    {
        shifted +="a"
    }
    else{
        shifted += String.fromCharCode(char.charCodeAt(0) + 1);
    }
}
console.log(shifted);
*/



/*
//10
const s = "aaabbc";
let compressed = "";
let count =1;
for(let i =0; i<s.length; i++)
{
    if (s[i] === s[i+1])
    {
        count++;
    }
    else 
    {
        compressed += s[i] + count;
        count =1;
    }
    }
console.log(compressed);
*/
/*
//6
function isBalanced(str)
{
    let stack = [];

    for(let char of str)
    {
        if (char ==="(" || char ==="{" || char ==="[")
        {
            stack.push(char);

        }
        else if (char ===")" || char ==="}" || char ==="]")
        {
            let last = stack.pop();
    
            if((char ===")" && last !=="(") ||
               (char ==="}" && last !=="{") ||
               (char ==="]" && last !=="["))
               {
                return false;
               }
        }
    }
    return stack.length ===0;

}
const brackets = "([{ }])";
console.log(isBalanced(brackets));
*/

//8
function toRoman(num)
{
    const values = [1000, 900, 500, 400, 100, 90, 50, 40 ,10, 9, 5, 4, 1];
    const symbols = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "I"];

    let result = "";
    for (let i =0; i<values.length;i++)
    {
        while(num>=values[i])
        {
            result+= symbols[i];
            num -=values[i];
        }
    }
    return result;
}
console.log(toRoman(9));
console.log(toRoman(12));






