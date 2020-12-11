// day-2
// find the two entries that sum to 2020 and then multiply those two numbers together.
const fs = require('fs');
const input = './input.txt'
const sum = 2020;
let answer;


/* Each line gives the password policy and then the password. 
The password policy indicates the lowest and highest number of times 
a given letter must appear for the password to be valid. 
For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.
1-3 a: abcde
*/
// part 1
// const main = () => {
//   fs.readFile(input, 'utf-8', (err, data) => {
//     if (err) throw err;
//     let dataArr = data.split('\n');
//     let newArray = dataArr.map((val, idx) => {
//       return val.split(' ');
//     });
//     let validCount = 0;
//     for (let elem of newArray) {
//       const policy = elem[0].split('-').map( x => parseInt(x));
//       const letter = elem[1].split(':')[0];
//       const password = elem[2].split('');
//       // console.log(policy, letter, encoded);
//       const letterKey = {}
//       password.forEach(elem => {
//         letterKey.hasOwnProperty(elem) ? letterKey[elem]++
//         : letterKey[elem] = 1;
//       });
//       // compare the letterKey with the POLICY of the LETTER
//       if (letterKey.hasOwnProperty(letter)) {
//         if (letterKey[letter] >= policy[0] && letterKey[letter] <= policy[1]) {
//           validCount++;
//         }
//       }
//     }
//     console.log(validCount);
//   });
// }



const main = () => {
  fs.readFile(input, 'utf-8', (err, data) => {
    if (err) throw err;
    let dataArr = data.split('\n');
    let newArray = dataArr.map((val, idx) => {
      return val.split(' ');
    });
    let validCount = 0;
    for (let elem of newArray) {
      const policy = elem[0].split('-').map( x => parseInt(x));
      const letter = elem[1].split(':')[0];
      const password = elem[2].split('');
      // console.log(policy, letter, encoded);
      const letterKey = {}
      // ONLY 1 positon can be letter in the policy
      let passLetterCount = 0;
      for (i = 0; i < password.length; i++) {
        if (i === policy[0] - 1 || i === policy[1] - 1) {
          // console.log(policy[0], policy[1]);
          passLetterCount += checkPolicy(letter, password[i]);
        }
      }
      if (passLetterCount === 1) {
        validCount++;
      }
      console.log(passLetterCount);
      // compare the letterKey with the POLICY of the LETTER
    }
    console.log(validCount);
  });
}

const checkPolicy = (letter, passLetter) => {
    return (passLetter === letter) ? 1 : 0 
}
main();