import { isArray } from 'lodash';

// trim string
const str = ' deqode '.trim();
console.log('after the trimming :', str);

// slice string
const str1 = 'deqode'.slice(2, 4);
console.log('after the slice :', str1);

// substring string  :- gives the substring from the given index
const str2 = 'hi this javascript is awesome'.substring(5, 10);
console.log('after the substring :', str2);

// Split string :- gives the array of the string after splitting the string
const str3 = 'hi this javascript is awesome'.split(' ');
console.log('after the split :', str3);

// Repeat string :- gives the string after repeating the given string
const str4 = 'hi this javascript is awesome'.repeat(3);
console.log('after the repeat :', str4);

// charAt string :- gives the character at the given index
const str5 = 'hi this javascript is awesome'.charAt(5);
console.log('after the charAt :', str5);

// Array fucntions

// isArray function :- gives the boolean value if the given value is an array or not
const arr6 = [1, 2, 3, 4, 5];
console.log('after the isArray :', isArray(arr6));

// foreach function :- gives the array after applying the given function on each element of the array
const fruitArr = ['banana', 'apple', 'mango', 'orange', 'grapes'];
fruitArr.forEach((value, index) => {
  console.log(value, index);
});

// map function :- gives the array after applying the given function on each element of the array
const fruitArr1 = ['banana', 'apple', 'mango', 'orange', 'grapes'];
const newArr = fruitArr1.map((value) => value.toUpperCase());
console.log('after the map :', newArr);

// filter function :- gives the array after applying the given function on each element of the array
const fruitArr2 = ['banana', 'apple', 'mango', 'orange', 'grapes'];
const newArr1 = fruitArr2.filter((value) => value.length > 5);
console.log('after the filter :', newArr1);

// reduceright function:- givs
const fruitArr3 = ['banana', 'apple', 'mango', 'orange', 'grapes'];
const newArr2 = fruitArr3.reduceRight((value, index) => {
  console.log(value, index);
  return value.length >= 5;
});
console.log('after the reduceRight :', newArr2);

// every function :- gives the boolean value if the given value is an array or not
const digit = [0, 2, 3, 4, 5];
const newArr3 = digit.every((value) => value >= 0);

console.log('after the every :', newArr3);

// some()
const digit1 = [0, 2, 3, 4, 5];
const newArr4 = digit1.some((value) => value >= 0);
console.log('after the some :', newArr4);

// indexOf() :- gives the index of the given value in the array

const digit2 = [0, 2, 3, 4, 5];
const newArr5 = digit2.indexOf(2);
console.log('after the indexOf :', newArr5);

// lastIndexOf() :- gives the last index of the given value in the array

const digit3 = [0, 2, 3, 2, 4, 5];
const newArr6 = digit3.lastIndexOf(2);
console.log('after the lastIndexOf :', newArr6);

// Json parse() :- gives the object after parsing the given string
const str6 = '{"name":"deqode","age":25}';
const newArr7 = JSON.parse(str6);
console.log('after the json parse :', newArr7);

// stringify() :- gives the string after parsing the given object
const obj = { name: 'deqode', age: 25 };
const newArr8 = JSON.stringify(obj);
console.log('after the json stringify :', newArr8);

console.log('---------------------------------');

// reduceright with array of objects
const arr1 = [
  { name: 'jim', age: 26 },
  { name: 'john', age: 25 },
  { name: 'lib', age: 25 },
];
const newArr9 = arr1.reduceRight((acc, curr, index, arr) => {
  console.log(acc, curr, index, arr);
  return acc.age > curr.age;
});
console.log('after the reduceRight :', newArr9);
