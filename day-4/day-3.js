// day-2
// find the two entries that sum to 2020 and then multiply those two numbers together.
const fs = require('fs');
const input = './input.txt'

const main = () => {
  fs.readFile(input, 'utf-8', (err, data) => {
    if (err) throw err;
    let dataArr = data.split('\n');
    console.log(getNumOfTrees(dataArr, 1, 1) * getNumOfTrees(dataArr, 3, 1)*getNumOfTrees(dataArr, 5, 1)*getNumOfTrees(dataArr, 7, 1)*getNumOfTrees(dataArr, 1, 2));

  })
}

const getNumOfTrees = (dataArr, xMove, yMove) => {
  /* assumptions & rules:
    - 0,0 is top left
    - at the end of the string, wrap back around,
      so technically it's an infinite array until bottom
      - while loop?
      - slope is x+3 y+1 each iteration
  */
  let numOfTrees = 0;
  let currX = 0;
  for (let currY = 0; currY < dataArr.length; currY += yMove ) {
    // nested loop x will be based on currX
    let currArray = createProxyLoop(dataArr[currY].split(''))
    // length is 31 for each string
    // console.log(currArray[32]);
    // console.log(currArray[1]);
    // if currPosition has tree add to numTrees
    if (yMove) {

    }
    if (currArray[currX] === '#') {
      numOfTrees++;
    }
    currX += xMove;
  }
  // let newArray = dataArr.map((val, idx) => {
  //   return val.split(' ');
  // });
  return numOfTrees;
}

main();

const createProxyLoop = (letters) => {
  const proxy = new Proxy(letters, {
      get(target, prop) {
          if (prop >= target.length) {
              prop = prop % target.length;
          }
          return target[prop];
      }
  });
  return proxy;
}