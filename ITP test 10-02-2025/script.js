// 2.find the second largest number in an array, write a function to find the second largest
//  number in an array without sorting it.

let arr = [50, 55, 60, 65, 70,75];

function largest_num(arr) {
    let largest = -Infinity;
    let largest_num = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            largest_num = largest;
            largest = num;
        } else if (num > largest_num && num !== largest) {
            largest_num = num;
        }
    }
    return largest_num;
}
console.log("Second largest number:", largest_num(arr));


// 4.find the common elements in two arrays, write a function to return  an array of
//  common elements between two given arrays,
 
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

function commonElements(arr1, arr2) {
    
    let number = new Set(arr1);
    
    let common = arr2.filter(element => number.has(element));
    
    return common;
}
console.log("Common elements:", commonElements(arr1, arr2));
