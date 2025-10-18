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