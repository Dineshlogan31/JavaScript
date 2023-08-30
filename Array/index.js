//1.concat method
/*
The concat() method of Array instances is used to merge two or more arrays. This method does
 not change the existing arrays, but instead returns a new array.
*/
//syntax(values1,values2,......valuesN)

var array1 = ["a", "b", "c"];
var array2 = ["d", "e", "f"];
var array3 = array1.concat(array2);
console.log(array3);

var letters = ["a", "b", "c"];
var alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric);

var num1 = [[1]];
var num2 = [2, [3]];
var numbers = num1.concat(num2);
console.log(numbers);

//2.copywithin
/*
The copyWithin() method of Array instances shallow copies part of this array to another location 
in the same array and returns this array without modifying its length.
*/
//syntax=====>copywithin(target,start,end)
var array1 = ["a", "b", "c", "d", "e"];
console.log(array1.copyWithin(0, 3, 4));
console.log(array1.copyWithin(0, 3));
console.log(array1.copyWithin(0));
