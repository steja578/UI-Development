1. //WAP to reverse a string
	//input:- 'sachin'
	//output:- 'nihcas'

let str = 'sachin';
let revStr = '';
for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
}
console.log(revStr);

//WAP to reverse words
//input:- 'This is javascript class'
//output:- 'class javascript is this'

let str2 = 'This is javascript class';
let words = str2.split(' ');
let revWords = '';
for (let i = words.length - 1; i >= 0; i--) {
    revWords += words[i] + ' ';
}
console.log(revWords);  

//3. WAP to print the first non-repeated character in a string
  // input:- 'entertainment'
   //output:- r

   let str = 'entertainment';
for (let char of str) {
  if (str.indexOf(char) === str.lastIndexOf(char)) {
    console.log(char); // r
    break;
  }
}

  
4.// WAP to print a string in title case
	//input:- 'this is javascript class'
   //output:- 'This Is Javascript Class'

let str = 'this is javascript class';
let titleCase = str
  .split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ');
console.log(titleCase); // This Is Javascript Class


5. //WAP to find longest word in a sentence
	//input:- 'this is javascript class'
    //output:- javascript
let str = 'this is javascript class';
let words = str.split(' ');
let longestWord = '';   
for (let word of words) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}
console.log(longestWord); // javascript 

//6. WAP to print Account number
  // input:- '12345678987'
   //output:- '12*******87'

let accountNumber = '12345678987';
let maskedAccountNumber = accountNumber.slice(0, 2) + '*'.repeat(accountNumber.length - 4) + accountNumber.slice(-2);
console.log(maskedAccountNumber); // 12*******87

//7. WAP to print Credit-card number
  // input:- '1111222233334444'
   //output:- '1111-2222-3333-4444'
let card = '1111222233334444';
let formatted = card.match(/.{1,4}/g).join('-');
console.log(formatted); // 1111-2222-3333-4444

//8. WAP to check if 2 strings are anagram or not
//	'listen' - 'silent'    anagram(every char of str1 should be there in str2)
let str1 = 'listen';
let str2 = 'silent';
let isAnagram = str1.split('').sort().join('') === str2.split('').sort().join('');
console.log(isAnagram ? 'Anagram' : 'Not Anagram'); // Anagram

//9. WAP to remove special character from a string
  // input:- 'hello@#hi&'
   //output:- 'hellohi'
   let str = 'hello@#hi&';
let clean = str.replace(/[^a-zA-Z0-9]/g, '');
console.log(clean); // hellohi

//10. WAP to move all the special characters to the end of the string
//	input:- 'hello@#hi&'
  // output:- 'hellohi@#&'
let str = 'hello@#hi&';
let letters = str.replace(/[^a-zA-Z0-9]/g, '');
let specials = str.replace(/[a-zA-Z0-9]/g, '');
let result = letters + specials;
console.log(result); // hellohi@#&


