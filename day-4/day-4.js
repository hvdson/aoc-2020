// day-2
// find the two entries that sum to 2020 and then multiply those two numbers together.
const fs = require('fs');
const input = './input.txt'



// const main = () => {
//   fs.readFile(input, 'utf-8', (err, data) => {
//     if (err) throw err;
//     const dataArr = data.split('\n\n');
//     const cleanSplitArr = dataArr.map(element => {
//       return removeItemAll(element.split(''), '\n').join('').split(' ');
//     });
//     // let makeKeyVal = fo
//     const passportArray = [];
//     for (let passport of cleanSplitArr) {
//       const passportMap = {};
//       for (let line of passport) {
//         const [key, val] = [...line.split(':')];
//         passportMap[key] = val;
//       }
//       passportArray.push(passportMap);
//     }
//     let validPassports = countValidPassports(passportArray);
//     console.log(validPassports);
//   })
// }


const main = () => {
  fs.readFile(input, 'utf-8', (err, data) => {
    if (err) throw err;
    let stuff = data.split("\n\n").filter(passport => {x = passport.split(/\n|\s/).reduce((a,f) => ({...a, [f.split(":")[0]] : f.split(":")[1] }) , {}) 
      let valid = `byr:19[2-9]\\d\|(200[0-2]) iyr:201\\d|(2020) eyr:202\\d|(2030) ecl:^amb\|blu\|brn\|gry\|grn\|hzl\|oth$ pid:^\\d{9}$ hcl:#[a-z0-f]{6} hgt:(1[5-8]\\d\|19[0-3])cm\|(59\|6\\d\|7[0-6])in`
      return valid.split(/\n|\s/).reduce((acc,cur) => RegExp(cur.split(":")[1]).test(x[cur.split(":")[0]]) && acc, true)
    }).length
    console.log(stuff);
  })
}


function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1, ' ');
    } else {
      ++i;
    }
  }
  return arr;
}

// part 1
// const countValidPassports = (passportArr) => {
//   /* assumptions & rules:
//      - missing cid field is fine -> any hasProperty length < 8 should trigger
//   */
//   const passportFields = ['byr','iyr','eyr','hgt','hcl','ecl','pid','cid'];
//   let validCount = 0;
//   for (let passport of passportArr) {
//     let passportKeys = Object.keys(passport);
//     if (passportKeys.length === 8) {
//       // console.log(passportKeys, 'found')
//       validCount++;
//     } else if (passportKeys.length === 7) {
//       if (!passport.hasOwnProperty('cid')) {
//         console.log(passportKeys, 'found')
//         validCount++;
//       }
//     }
//   }
//   // return number of valid passports
//   return validCount;
// }


// part 2
const countValidPassports = (passportArr) => {
  /* assumptions & rules:
     - missing cid field is fine -> any hasProperty length < 8 should trigger
     - byr (Birth Year) - four digits; at least 1920 and at most 2002.
     - iyr (Issue Year) - four digits; at least 2010 and at most 2020.
     - eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
     - hgt (Height) - a number followed by either cm or in:
     - If cm, the number must be at least 150 and at most 193.
     - If in, the number must be at least 59 and at most 76.
     - hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
     - ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
     - pid (Passport ID) - a nine-digit number, including leading zeroes.
     - cid (Country ID) - ignored, missing or not.
  */
  let validCount = 0;
  for (let passport of passportArr) {
    let passportKeys = Object.keys(passport);
    if (passportKeys.length === 8 && verifyPassportValues(passport)) {
      validCount++;
      console.log(passport, 'found')
    } else if (passportKeys.length === 7) {
      if (!passport.hasOwnProperty('cid') && verifyPassportValues(passport)) {
        console.log(passport, 'found')
        validCount++;
      }
    }
  }
  // return number of valid passports
  return validCount;
}

const verifyPassportValues = (passport) => {
  let isValid = true;
  const passportFields = ['byr','iyr','eyr','hgt','hcl','ecl','pid','cid'];
  for (let key of passportFields) {
      if (key === 'byr') {
        if (!(parseInt(passport[key]) >= 1920 && parseInt(passport[key]) <= 2002)) {
          isValid = false;
          break;
        }
      } else if (key === 'iyr') {
        if (!(parseInt(passport[key]) >= 2010 && parseInt(passport[key]) <= 2020)) {
          isValid = false;
          break;
        }
      } else if (key === 'eyr') {
        if (!(parseInt(passport[key]) >= 2020 && parseInt(passport[key]) <= 2030)) { 
          isValid = false;
          break;
        }
      //  - If cm, the number must be at least 150 and at most 193.
      //  - If in, the number must be at least 59 and at most 76.
      } else if (key === 'hgt') {
        let regChar = /cm|in/;
        let regNum = /\d+/;
        if (passport[key].match(regChar) && passport[key].match(regChar)[0] === 'in') {
          if (!(passport[key].match(regNum)[0] >= 59 && (passport[key].match(regNum)[0]) <= 76)) {
            isValid = false;
            break;
          }
        } else if (passport[key].match(regChar) && passport[key].match(regChar)[0] === 'cm') {
          if (!(passport[key].match(regNum)[0] >= 150 && (passport[key].match(regNum)[0]) <= 193)) {
            isValid = false;
            break;
          }
        }
      } else if (key === 'hcl') {
        let regHex = /#[0-9a-f]{6}$/;
        if (!(passport[key].match(regHex))) {
          isValid = false;
          break;
        }
      } else if (key === 'ecl') {
        const eclArray = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
        if (!(eclArray.indexOf(passport[key]) !== -1)) {
          isValid = false;
          break;
        }
      } else if (key === 'pid') {
        const reg = /\d{9}/;
        if (!(parseInt(passport[key]) && passport[key].match(reg))) {
          isValid = false
          break;
        }
      }
    }
  // return true or false
  return isValid;
}

console.log(main());