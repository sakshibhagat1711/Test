// 1) perform buble sort algorithm for [6,4,7,3,6,2,5,1]  using while//

let arr = [6, 4, 7, 3, 6, 2, 5, 1];

function bubbleSort(arr) {
    let n = arr.length;
    let swapped = true;
  
    while (swapped) {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
      n--;
    }
    return arr;
  }
  
  let sorted_array = bubbleSort(arr);
  console.log(sorted_array);
  
// 2) Write a  program to find HCF (GCD) of two numbers.

function findHCF(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  let num1 = 35;
  let num2 = 75;
  let hcf = findHCF(num1, num2);
  console.log("The HCF (GCD) of " + num1 + " and " + num2 + " is: " + hcf);
  
//   3)Write a  program to find frequency of each digit in a given integer.


// 4)  
//     7 7 7 7 7 7 7
//     7 7       7 7
//     7 7       7 7
//     7 7       7 7
//     7 7       7 7 
//     7 7       7 7
//     7 7 7 7 7 7 7

function printPattern() {
    let rows = 7;
    for (let i = 0; i < rows; i++) {
      let row = '';
      for (let j = 0; j < rows; j++) {
        if (j == i || j == rows - 1 - i || j == 0 || j == rows - 1) {
          row += '7 ';
        } else {
          row += ' '
        }
      }
      console.log(row.trim());
    }
  }
  printPattern();
  
// 5)         *
//           * *
//          * * *
//        * * * * *
//       * * * * * *

function printStarTriangle() {
    let rows = 5; 
    for (let i = 1; i <= rows; i++) {
      let row = ''
      for (let j = 0; j < rows - i; j++) {
        row += ' '
      }
      for (let k = 0; k < i; k++) {
        row += '* '
      }
      console.log(row.trim());
    }
  }
  printStarTriangle();
