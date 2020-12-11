// day-1 
// find the two entries that sum to 2020 and then multiply those two numbers together.
const fs = require('fs');
const input = './input.txt'
const sum = 2020;
let answer;
// const input = [1, 4, 45, 6, 10, 8]
// const sum = 16

// part 1
// sort and 2 pointers
// fs.readFile(input, 'utf-8', (err, data) => {
//   if (err) throw err;
//   let dataArr = data.split('\n');
//   const sorted = dataArr.sort();
//   let l = 0;
//   let r = sorted.length - 1;
//   let currL, currR; 
//   while (l < r) {
//     currL = parseInt(sorted[l]);
//     currR = parseInt(sorted[r]);
//     // check if match is found
//     if ((currL + currR) == sum) {
//       console.log(currL * currR)
//       return [currL, currR]
//     } else if ((currL + currR) < sum) { 
//       l += 1;
//     } else {
//       r -= 1;
//     }
//   }
// });


// part 2
fs.readFile(input, 'utf-8', (err, data) => {
  if (err) throw err;
  let dataArr = data.split('\n');
  const sorted = dataArr.sort();
  let l, r;
  let currL, currR;
  for (let i = 0; i < sorted.length - 2; i++) {
    let currM = parseInt(sorted[i]);
    l = i;
    r = sorted.length - 1;
    while (l < r) {
      currL = parseInt(sorted[l]);
      currR = parseInt(sorted[r]);
      // check if match is found
      if ((currL + currM + currR) == sum) {
        console.log(currL * currM * currR)
        return [currL, currR]
      } else if ((currL + currR) < sum) { 
        l += 1;
      } else {
        r -= 1;
      }
    }
  }
});







// const getSum2020 = (arr, sum) => {  
//   const s = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     let temp = sum-arr[i]
//     if (s.has(temp)) {
//       return [arr[i], temp];
//     }
//     s.add(arr[i]);
//   }
//   console.log('nope')
//   return 0;
// }

// day-1 
// find the two entries that sum to 2020 and then multiply those two numbers together.
const fs = require('fs');
const input = './input.txt'
const sum = 2020;
let answer;
// const input = [1, 4, 45, 6, 10, 8]
// const sum = 16

// part 1
// sort and 2 pointers
// fs.readFile(input, 'utf-8', (err, data) => {
//   if (err) throw err;
//   let dataArr = data.split('\n');
//   const sorted = dataArr.sort();
//   let l = 0;
//   let r = sorted.length - 1;
//   let currL, currR; 
//   while (l < r) {
//     currL = parseInt(sorted[l]);
//     currR = parseInt(sorted[r]);
//     // check if match is found
//     if ((currL + currR) == sum) {
//       console.log(currL * currR)
//       return [currL, currR]
//     } else if ((currL + currR) < sum) { 
//       l += 1;
//     } else {
//       r -= 1;
//     }
//   }
// });


// part 2
fs.readFile(input, 'utf-8', (err, data) => {
  if (err) throw err;
  let dataArr = data.split('\n');
  const sorted = dataArr.sort();
  let l, r;
  let currL, currR;
  for (let i = 0; i < sorted.length - 2; i++) {
    let currM = parseInt(sorted[i]);
    l = i;
    r = sorted.length - 1;
    while (l < r) {
      currL = parseInt(sorted[l]);
      currR = parseInt(sorted[r]);
      // check if match is found
      if ((currL + currM + currR) == sum) {
        console.log(currL * currM * currR)
        return [currL, currR]
      } else if ((currL + currR) < sum) { 
        l += 1;
      } else {
        r -= 1;
      }
    }
  }
});







// const getSum2020 = (arr, sum) => {  
//   const s = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     let temp = sum-arr[i]
//     if (s.has(temp)) {
//       return [arr[i], temp];
//     }
//     s.add(arr[i]);
//   }
//   console.log('nope')
//   return 0;
// }
