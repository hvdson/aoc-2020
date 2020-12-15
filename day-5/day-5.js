// day-2
// find the two entries that sum to 2020 and then multiply those two numbers together.
const fs = require('fs');
const input = './input.txt'

const F = "F"
const B = "B"
const L = "L"
const R = "R"

const main = () => {
  fs.readFile(input, 'utf-8', (err, data) => {
    if (err) throw err;
    const dataArr = data.split('\n');
    const result = highestSeatId(dataArr);
    // console.log(result);
  })
}

// // part 1
// const highestSeatId = (data) => {
//   let largest = 0;
//   let smallest = 1000;
//   for (let pass of data) {
//     const rowData = pass.slice(0, 7).split('').map(x => getBinary(x)).join('');
//     const colData = pass.slice(7, 10).split('').map(x => getBinary(x)).join('');
//     const row = getSeatData(rowData);
//     const col = getSeatData(colData);
//     const seatId = row * 8 + col;
//     if (seatId > largest) {
//       largest = seatId;
//       console.log(row, col)
//       console.log("smol", smallest)
//     }
//     if (seatId < smallest) {
//       smallest = seatId;
//       // id 46 row 7, col 1
//     }
//   }
//   // 991 in binary = 
//   return largest;
// }



// part2 
const highestSeatId = (data) => {
  const idArr = []
  for (let pass of data) {
    const rowData = pass.slice(0, 7).split('').map(x => getBinary(x)).join('');
    const colData = pass.slice(7, 10).split('').map(x => getBinary(x)).join('');
    const row = getSeatData(rowData);
    const col = getSeatData(colData);
    const seatId = row * 8 + col;
    idArr.push(seatId);
  }

  idArr.sort((a, b) => { return a - b}).forEach((elem, idx, arr) => {
    let prevIdx = idx - 1;
    
    
    if (prevIdx >= 0 && elem - arr[prevIdx] > 1) {
      console.log(arr[prevIdx])
      console.log(elem);
      
      
    }
  });
  // 991 in binary = 
  return;
}

const getBinary = (char) => {
  if (char === F) {
    return 0;
  } else if (char === B) {
    return 1;
  } else if (char === L) {
    return 0;
  } else {
    return 1;
  }
}
// F is lower half range
// B is upper half range
const getSeatData = (bin) => {
  const position = parseInt(bin, 2);
  return position
}

console.log(main());